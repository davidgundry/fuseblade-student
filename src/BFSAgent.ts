import { AIClient } from "../lib/fuseblade/gameserver/index";
import { FBScenarioData } from "../lib/fuseblade/gamemodel/data/FBScenarioData";
import { FBSaveData } from "../lib/fuseblade/gamemodel/save/FBSaveData";
import { FBActions } from "../lib/fuseblade/gamemodel/FBActions";
import { FBGameModel } from "../lib/fuseblade/gamemodel/model/FBGameModel";
import { FBCommandFactory } from "../lib/fuseblade/gamemodel/FBCommandFactory";
import { FloorType } from "../lib/fuseblade/gamemodel/data/FloorType";
import { FBCommand } from "../lib/fuseblade/gamemodel/FBCommand";

/**
 * The beginnings of a breadth-first search agent which plans a path to the player
 * to demonstrate the BFS algorithm.
 * 
 * It does not currently consult the level map to determine what actions it can take
 * or what happens when it takes them.
 */
export class BFSAgent implements AIClient<FBScenarioData,FBSaveData,FBActions>
{
    private _team: number;
    private _pathfindingDone: boolean = false;

    /**
     * The create function is called when the scenario is created, and supplies some
     * potentially useful values. Here we just save our teamID so we are able to
     * access our agents' data.
     * @param clientID 
     * @param teamID 
     * @param gameModel 
     * @param data 
     */
    create(clientID: number, teamID: number, gameModel: FBGameModel, data: FBScenarioData): void
    {
        this._team = teamID;
    }

    /**
     * This is called once a frame before the game logic update. It returns either a Command or an
     * array of Commands (or null if there are no commands to return). These commands are applied
     * to their respective agents in the following game logic update.
     * 
     * Commands objects are taken from the commandFactory, using the commandFactory.getCommand()
     * method, which takes the commandType. The commandFactory creates commands when needed, and also
     * uses an object pool to reuse old command objects to minimise garbage collection.
     * @param data 
     * @param commandFactory 
     * @param delta 
     */
    update(data: FBScenarioData, commandFactory: FBCommandFactory, delta: number): FBCommand[] | FBCommand
    {
        if (!this._pathfindingDone)
        {
            let me = data.teams[this._team].agents[0];
            let target = data.player();
            let currentPos = new GridPos(Math.floor(me.x),Math.floor(me.y),Math.floor(me.z));
            let goal = new GridPos(Math.floor(target.x),Math.floor(target.y),Math.floor(target.z));
            console.log("Pathfinding from", currentPos, "to", goal)
            let directions = this._breadthFirstSearch(currentPos, goal, data.map);
            console.log(directions)
        }
        this._pathfindingDone = true;
        return null;
    }
    
    scenarioEnded(data: FBScenarioData): void {}

    /**
     * This is a generic breadth-first search function slightly adapted to the
     * pathfinding context to make it easier to read. With minor modifications
     * this could be used for any tree search problem, so long as we can define
     * the functions required:
     * 
     * * stateActionMapping
     * * transitionModel
     * * goalTest
     * * stateEquals
     * 
     * As such, it is possible to rewrite this function to be path-finding specific
     * for improved clarity and performance.
     * 
     * @param initialState 
     * @param goal 
     * @param map 
     */
    private _breadthFirstSearch(initialState: GridPos, goal: GridPos, map: FloorType[][][]): MoveDirections[]
    {
        let openList = [];
        let closedList = [];
        openList.push(new TreeNode<GridPos, MoveDirections>(initialState, null, null));
        let iterations: number = 0;
        while (openList.length > 0 && iterations < 1000)
        {
            iterations++;
            let current = openList.shift();
            if (this._goalTest(current.state, goal))
            {
                console.log(iterations);
                return this._getActions(current);
            }
            let edges = this._stateActionMapping(map, current.state);
            for (let i=0;i<edges.length;i++)
            {
                let newState = this._transitionModel(current.state, edges[i], map);
                let duplicate = false;
                for (let i=0,len=closedList.length;i<len;i++)
                    if (this._stateEquals(closedList[i], newState))
                    {
                        duplicate = true;
                        break;
                    }

                if (!duplicate)
                {
                    let newNode = new TreeNode<GridPos, MoveDirections>(newState, edges[i], current);
                    openList.push(newNode);
                    closedList.push(newNode.state);
                }
            }
        }

        return null;
    }

    /**
     * Checks whether our state equals another state. This is used for avoiding duplicate
     * states which otherwise would unnecessarily duplicate our search effort.
     * @param a 
     * @param b 
     */
    private _stateEquals(a: GridPos, b: GridPos): boolean
    {
        return a.x === b.x && a.y === b.y;
    }

    /**
     * The goal test checks if a state is our target state. With pathfinding this checks if
     * we are in the correct location. If we were searching a game state tree, this would
     * return true if we had reached a "game over" state.
     * @param state the current state
     * @param goal for our pathfinding problem, this is the location we want to reach
     */
    private _goalTest(state: GridPos, goal: GridPos): boolean
    {
        return this._stateEquals(state, goal);
    }

    /**
     * Maps from states to the set of available actions. For our pathfinding problem,
     * a state is a grid position, and our actions are determined by whether the
     * surrounding map tiles are passable or not.
     * @param map
     * @param state 
     */
    private _stateActionMapping(map: FloorType[][][], state: GridPos): MoveDirections[]
    {
        //TODO: check map and return only available moves
        return [MoveDirections.Up,
            MoveDirections.Down,
            MoveDirections.Left,
            MoveDirections.Right];
    }

    /**
     * A transition model takes a state and an action that can be performed in that state.
     * It applies the action to the state and returns the resulting state. In other words,
     * a transition model simulates one move into the future from any given state. Also
     * called a forward model.
     * @param state 
     * @param action 
     * @param map 
     */
    private _transitionModel(state: GridPos, action: MoveDirections, map: FloorType[][][])
    {
         //TODO: check map and change z when going up or down steps
        let s = new GridPos(state.x, state.y, state.z);
        if (action === MoveDirections.Up)
            s.y--;
        else if (action === MoveDirections.Down)
            s.y++;
        else if (action === MoveDirections.Left)
            s.x--;
        else if (action === MoveDirections.Right)
            s.x++;
        return s;
    }

    /**
     * Once we have found our goal, we need to reconstruct the sequence of steps taken
     * to reach it.
     * 
     * Here we back-track through the tree of expanded nodes, following each parent. We record
     * the actions taken to take us each step. The first action to take will be the last
     * on the returned list.
     * @param node
     */
    private _getActions(node: TreeNode<GridPos, MoveDirections>): MoveDirections[]
    {
        let actions = []
        while (node.parent)
        {
            actions.push(node.action)
            node = node.parent;
        }
        return actions;
    }

}

/**
 * Our list of available actions. Here we are assuming a 4-connected grid.
 * To add more actions, we must also make sure they are applied in the transition
 * model.
 */
enum MoveDirections
{
    Up,
    Down,
    Left,
    Right
}

/**
 * For our state we just store an x,y,z position on the grid. We need to store
 * all the data that can change between states in our search. For searching a
 * game tree, this would require encoding the entire game state.
 */
class GridPos
{
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

/**
 * We store a state tree which holds the states we have expanded as well
 * as their parent and the action taken to reach the state from the parent
 * state. This allows us to reconstruct the path taken when we find the 
 * goal.
 */
class TreeNode<T, A>
{
    state: T;
    parent: TreeNode<T, A>
    action: A;

    constructor(state: T, action: A, parent: TreeNode<T, A>)
    {
        this.state = state;
        this.action = action;
        this.parent = parent;
    }
}
