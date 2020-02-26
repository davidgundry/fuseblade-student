import { AgentBehaviour } from "./AgentBehaviour";
import { FBCommand } from "../../lib/fuseblade/gamemodel/FBCommand";
import { AgentData } from "../../lib/fuseblade/gamemodel/data/AgentData";
import { FloorType } from "../../lib/fuseblade/gamemodel/data/FloorType";
import { FBCommandFactory } from "../../lib/fuseblade/gamemodel/FBCommandFactory";
import { FBActions } from "../../lib/fuseblade/gamemodel/FBActions";

export class FollowBehaviour extends AgentBehaviour
{
    private _pathfindingDone: boolean = false;
    private _waypoints: GridPos[];
    private _waypointsIndex: number;
    private _snappingRange: number; 
    private readonly _maxIterations = 1000; // The maximum iterations of BFS we will
    // do before giving up
    private _planningTime: number; // A weighted average of time taken to do pathfinding

    private _target: AgentData;

    changeTarget(target: AgentData)
    {
        this._target = target;
    }

    update(delta: number, commandFactory: FBCommandFactory): FBCommand[]
    {
        if (!this._target)
            return null;
        let commands: FBCommand[] = null;

        // Get the 0th agent of our team to control. If we have other agents,
        // they are ignored.
        let me: AgentData = this.agent;

        // Update our snapping range so that we can get as close as possible to
        // the exact point without the risk of overshooting. 
        this._snappingRange = delta * me.speed;

        // If we have pathfinding to do, then update the waypoints with our new
        // path and set the index of our current waypoint to the first one.
        if (!this._pathfindingDone)
        {
            this._waypoints = this._doPathfinding(me, this._target, this.data.map);
            this._waypointsIndex = 0;
            this._pathfindingDone = true;
        }

        // If we are following a plan, then check if we've reached our next waypoint.
        // If so, we move to the next one. If not, we get commands to move us towards
        // our current waypoint.
        if (this._waypoints && this._waypointsIndex < this._waypoints.length)
        {
            let maxDist = Math.max(Math.abs(me.x - this._waypoints[this._waypointsIndex].x) , Math.abs(me.y -this._waypoints[this._waypointsIndex].y))
            if (maxDist <= this._snappingRange)
                this._waypointsIndex++;
            if (this._waypointsIndex < this._waypoints.length)
                commands = this._moveTowardsPoint(me, this._waypoints[this._waypointsIndex], commandFactory);           
        }
        // If we're not following a plan, flag that we need to generate a new one.
        // Because we set this only on completing a plan, we will always go to where
        // the player _was_ when creating the plan, not necessarily where they are now.
        else
            this._pathfindingDone = false;

        // Return the commands we have picked for this update.
        return commands;
    }


    /**
     * Run the pathfinder and generate a plan of waypoints to follow to move the 
     * provided agent (me) to the target (target). If we cannot find a plan, after
     * the maximum iterations then we return null.
     * @param data 
     */
    private _doPathfinding(me: AgentData, target: AgentData, map: FloorType[][][]): GridPos[]
    {
        let start = performance.now();
        let currentCell: GridPos = new GridPos(Math.floor(me.x),Math.floor(me.y),Math.floor(me.z));
        let goalCell: GridPos = new GridPos(Math.floor(target.x),Math.floor(target.y),Math.floor(target.z));
        let directions: MoveDirections[] = this._breadthFirstSearch(currentCell, goalCell, map);
        let plan: GridPos[] = null;
        if (directions && directions.length > 0)
            plan = this._createWaypoints(directions, new GridPos(me.x,me.y,me.z));

        let end = performance.now();
        let alpha = 0.9
        if (this._planningTime === undefined)
            this._planningTime = end-start;
        else
            this._planningTime = this._planningTime*alpha + (end-start)*(1-alpha);

        return plan;
    }

    /**
     * Returns the next command(s) for moving an agent to the provided point. Here we
     * check whether each dimension of the point is within "snapping" range. If so,
     * we don't move any closer in that dimension to avoid overshooting and appearing
     * to vibrate either side of the target.
     * @param me 
     * @param point 
     * @param commandFactory 
     */
    private _moveTowardsPoint(me: AgentData, point: GridPos, commandFactory: FBCommandFactory): FBCommand[]
    {
        let padding = this._snappingRange;
        let moves: Array<FBCommand> = [];
        if (point.x - me.x > padding)
            moves.push(commandFactory.getCommand(FBActions.AgentMoveEast))
        else if (me.x - point.x > padding)
            moves.push(commandFactory.getCommand(FBActions.AgentMoveWest))
        if (point.y - me.y > padding)
            moves.push(commandFactory.getCommand(FBActions.AgentMoveSouth))
        else if (me.y - point.y > padding)
            moves.push(commandFactory.getCommand(FBActions.AgentMoveNorth))
        return moves;
    }

    /**
     * Here we take a plan generated by our search and convert it into a series of waypoints
     * in world space. These waypoints are easy to follow, as we just move towards the next
     * one until we reach it.
     * @param directions The array of directions to create waypoints from
     * @param start The starting position of our agent, so we can work out the agent's
     * grid position and use it as a starting point for the plan.
     */
    private _createWaypoints(directions: MoveDirections[], start: GridPos): GridPos[]
    {
        let plan = [];
        plan.push(new GridPos(Math.floor(start.x)+0.5, Math.floor(start.y)+0.5, start.z));
        for (let i=0;i<directions.length;i++)
        {
            let last = plan[plan.length-1];
            if (directions[i] === MoveDirections.Up)
                plan.push(new GridPos(last.x, last.y-1, last.z));
            if (directions[i] === MoveDirections.Down)
                plan.push(new GridPos(last.x, last.y+1, last.z));
            if (directions[i] === MoveDirections.Left)
                plan.push(new GridPos(last.x-1, last.y, last.z));
            if (directions[i] === MoveDirections.Right)
                plan.push(new GridPos(last.x+1, last.y, last.z));
        }
        
        return plan;
    }

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
        while (openList.length > 0 && iterations < this._maxIterations)
        {
            iterations++;
            let current = openList.shift();
            if (this._goalTest(current.state, goal))
                return this._getActions(current);

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
        let moves = [];
        if (state.x > 0 && this._isWalkable(map[state.z][state.x-1][state.y]))
            moves.push(MoveDirections.Left);

        if (state.x+1 < map[0].length && this._isWalkable(map[state.z][state.x+1][state.y]))
            moves.push(MoveDirections.Right);

        if (state.y > 0 && this._isWalkable(map[state.z][state.x][state.y-1]))
            moves.push(MoveDirections.Up);
        else if ((state.z+1 < map.length) && (map[state.z+1][state.x][state.y] === FloorType.StepsDown))
            moves.push(MoveDirections.Up);

        if (state.y+1 < map[0][0].length && this._isWalkable(map[state.z][state.x][state.y+1]))
            moves.push(MoveDirections.Down);
        else if (map[state.z][state.x][state.y] === FloorType.StepsDown)
            moves.push(MoveDirections.Down);

        return moves;
    }

    /**
     * Returns whether or not a particular tile is walkable. The game won't let
     * us walk on certain tiles, so we need to make sure this reflects that.
     * @param tile 
     */
    private _isWalkable(tile: FloorType)
    {
        if (tile === FloorType.Void || tile === FloorType.Wall)
            return false;
        return true;
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
        let s = new GridPos(state.x, state.y, state.z);

        if (action === MoveDirections.Up)
        {
            if ((state.z+1 < map.length) && (map[state.z+1][state.x][state.y] === FloorType.StepsDown))
                s.z++;
            s.y--;
        }
        else if (action === MoveDirections.Down)
        {
            if (map[state.z][state.x][state.y] === FloorType.StepsDown)
                s.z--;
            s.y++;
        }
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
            actions.unshift(node.action)
            node = node.parent;
        }
        return actions;
    }
    
}

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

enum MoveDirections
{
    Up,
    Down,
    Left,
    Right
}

