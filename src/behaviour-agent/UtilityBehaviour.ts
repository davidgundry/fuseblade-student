import { AgentBehaviour } from "./AgentBehaviour";
import { FBCommandFactory } from "../../lib/fuseblade/gamemodel/FBCommandFactory";
import { FBCommand } from "../../lib/fuseblade/gamemodel/FBCommand";
import { FindClosestTargetModule } from "./FindClosestTargetModule";
import { TeamData } from "../../lib/fuseblade/gamemodel/data/TeamData";
import { FBScenarioData } from "../../lib/fuseblade/gamemodel/data/FBScenarioData";
import { Action } from "./Action";
import { AgentData } from "../../lib/fuseblade/gamemodel/data/AgentData";

export class UtilityBehaviour extends AgentBehaviour
{
    private _actions: Action[];
    
    constructor (data: FBScenarioData, agent: AgentData, team: TeamData, actions: Action[]){
        super(data,agent,team);
        this._actions = actions;
    }

    update(delta: number, commandFactory: FBCommandFactory): FBCommand[]
    {
        let target = FindClosestTargetModule.findClosestTarget(this.agent, this.data);
        let max = 0;
        let action : Action = null;
        for(let i = 0; i< this._actions.length;i++){
            let currentActionUtility = this._actions[i].process(this.agent);
            if(currentActionUtility> max){
                max = currentActionUtility;
                action = this._actions[i];
            }
        }
        if (action !== null)
            return action.getBehaviour().update(delta,commandFactory);
        return null;
    }   
}

export enum Characteristics
{
    Damage,
    Health,
    Distance,
    ToiletNeed
}

export enum CurveType
{
    Quadratic,
    Logistic
}