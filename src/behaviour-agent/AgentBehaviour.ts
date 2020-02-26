import { FBCommand } from "../../lib/fuseblade/gamemodel/FBCommand";
import { FBScenarioData } from "../../lib/fuseblade/gamemodel/data/FBScenarioData";
import { FBCommandFactory } from "../../lib/fuseblade/gamemodel/FBCommandFactory";
import { AgentData } from "../../lib/fuseblade/gamemodel/data/AgentData";
import { TeamData } from "../../lib/fuseblade/gamemodel/data/TeamData";

export abstract class AgentBehaviour
{
    private _data: FBScenarioData;
    private _agent: AgentData;
    private _team: TeamData;

    constructor(data: FBScenarioData, agent: AgentData, team: TeamData)
    {
        this._data = data;
        this._agent = agent;
        this._team = team;
    }
    
    protected get data() { return this._data; }
    get agent() { return this._agent; }
    protected get team() { return this._team; }

    abstract update(delta: number, commandFactory: FBCommandFactory): FBCommand[]
}