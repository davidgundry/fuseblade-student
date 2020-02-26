import { AgentBehaviour } from "./AgentBehaviour";
import { Consideration } from "./Consideration";
import { AgentData } from "../../lib/fuseblade/gamemodel/data/AgentData";

export class Action
{
    private _behaviour: AgentBehaviour;
    private _weight: number;
    private _considerations: Consideration[];

    public getBehaviour(): AgentBehaviour{
        return this._behaviour;
    }

    constructor(behaviour: AgentBehaviour, considerations: Consideration[], weight: number)
    {
        this._behaviour = behaviour;
        this._considerations = considerations;
        this._weight = weight;
    }

    process(agent: AgentData): number
    {
        let utility = 1;
        for (let i=0;i< this._considerations.length;i++)
        {
            utility *= this._considerations[i].calculate(agent);
        }
        return utility * this._weight;
    }
}