import { AIClient, Command } from "lib/fuseblade/gameserver/index"
import { FBScenarioData } from "lib/fuseblade/gamemodel/data/FBScenarioData";
import { FBSaveData } from "lib/fuseblade/gamemodel/save/FBSaveData";
import { FBGameModel } from "lib/fuseblade/gamemodel/model/FBGameModel";
import { FBCommandFactory } from "lib/fuseblade/gamemodel/FBCommandFactory";
import { FBActions } from "lib/fuseblade/gamemodel/FBActions";
import { AgentBehaviour } from "./AgentBehaviour";
import { FollowBehaviour } from "./FollowBehaviour";
import { TurretBehaviour } from "./TurretBehaviour";
import { UtilityBehaviour, Characteristics, CurveType } from "./UtilityBehaviour";
import { AgentData } from "../../lib/fuseblade/gamemodel/data/AgentData";
import { TeamData } from "../../lib/fuseblade/gamemodel/data/TeamData";
import { InputSpec, Consideration } from "./Consideration";
import { Action } from "./Action";

/**
 * A simple AI controlling one agent that spins around and shoots constantly.
 */
export class MyAgent implements AIClient<FBScenarioData,FBSaveData,FBActions>
{
    private _behaviours: AgentBehaviour[];
    private _data: FBScenarioData;

    /**
     * This method is called before the start of the scenario with some useful values.
     * @param clientID 
     * @param teamID 
     * @param gameModel 
     * @param data 
     */
    create(clientID: number, teamID: number, gameModel: FBGameModel, data: FBScenarioData): void
    {
        this._data = data;
        this._behaviours = [];
        for (let i=0;i<data.teams[teamID].agents.length;i++)
        {
            let ub = this.utilityBehaviourFactory(data.teams[teamID].agents[i], data.teams[teamID])
            this._behaviours.push(ub)
        }
    }

    /**
     * This method is called each update. It returns all the actions for the team to take that update.
     * @param data
     * @param commandFactory 
     * @param delta 
     */
    update<C>(data: FBScenarioData, commandFactory: FBCommandFactory, delta: number): Command<C>[] | Command<C>
    {
        let commands = [];
        for (let i=0;i<this._behaviours.length;i++)
        {
            if (this._behaviours[i].agent.inUse)
            {
                let c = this._behaviours[i].update(delta, commandFactory);
                if (c)
                    commands.concat(c);
            }
        }
       return commands;
    }
    
    /**
     * This method is called at the end of the scenario. It can be used for outputing data about
     * the run.
     * @param data
     */
    scenarioEnded(data: FBScenarioData): void {}

    utilityBehaviourFactory(agent: AgentData, team: TeamData): UtilityBehaviour
    {
        let actions = [];
        let considerations = [];
        let inputs = []

        inputs.push([]);
        inputs[0].push(new InputSpec(Characteristics.Distance, CurveType.Quadratic, 0, 0, 0, 0) )
        inputs[0].push(new InputSpec(Characteristics.Distance, CurveType.Quadratic, 0, 0, 0, 0) )
        inputs[0].push(new InputSpec(Characteristics.Distance, CurveType.Quadratic, 0, 0, 0, 0) )
        
        inputs.push([]);
        inputs[1].push(new InputSpec(Characteristics.Distance, CurveType.Quadratic, 0, 0, 0, 0) )
        inputs[1].push(new InputSpec(Characteristics.Distance, CurveType.Quadratic, 0, 0, 0, 0) )
        inputs[1].push(new InputSpec(Characteristics.Distance, CurveType.Quadratic, 0, 0, 0, 0) )
        

        considerations.push(new Consideration(inputs[0]))
        actions.push(new Action(new FollowBehaviour(this._data, agent, team), considerations, 1))

        return new UtilityBehaviour(this._data, agent, team, actions);
    }
}