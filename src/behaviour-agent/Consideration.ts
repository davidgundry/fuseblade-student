import { CurveType, Characteristics } from "./UtilityBehaviour";
import { AgentData } from "../../lib/fuseblade/gamemodel/data/AgentData";

export class Consideration
{
    inputs: InputSpec[]
    
    constructor(inputs: InputSpec[])
    {
        this.inputs = inputs;
    }

    calculate(agent: AgentData): number
    {
        let product = 1;
        for (let i=0;i<this.inputs.length;i++)
        {
            product = this.inputs[i].process(this._normalisedCharacteristics(this.inputs[i].characteristic, agent)) * product;
        }
        return product;
    }

    private _normalisedCharacteristics(type: Characteristics, agent: AgentData): number
    {
        switch(type)
        {
            //case Characteristics.Damage:
            //    return Math.min(this._damage, this._damageBookend)/100;
            case Characteristics.Health:
                return agent.health/agent.maxHealth;
            case Characteristics.Distance:
                break;
            case Characteristics.ToiletNeed:
                break;
        }
        return 0;
    }
}

export class InputSpec
{
    characteristic: Characteristics;
    type: CurveType;
    m: number;
    k: number;
    b: number;
    c: number;

    constructor(characteristic: Characteristics, type: CurveType, m: number, k: number, b: number, c: number)
    {
        this.characteristic = characteristic;
        this.type = type;
        this.m = m;
        this.k = k;
        this.b = b;
        this.c = c;
    }

    process(x: number)
    {
        switch(this.type)
        {
            case CurveType.Quadratic:
                return this.m*Math.pow((x- this.c), this.k) + this.b;
        }
        return 0;
    }
}