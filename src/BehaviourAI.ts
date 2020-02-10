import { AIBehaviour } from "./AIBehaviour";
import { TurretBehaviour } from "./TurretBehaviour";
import { AIClient, Command } from "../lib/fuseblade/gameserver/index";
import { FBScenarioData } from "../lib/fuseblade/gamemodel/FBScenarioData";
import { FBSaveData } from "../lib/fuseblade/gamemodel/FBSaveData";
import { FBGameModel } from "../lib/fuseblade/gamemodel/FBGameModel";
import { TeamData } from "../lib/fuseblade/gamemodel/TeamData";
import { FBCommandFactory } from "../lib/fuseblade/gamemodel/FBCommandFactory";
import { FBActions } from "FBActions";

export class BehaviourAI implements AIClient<FBScenarioData,FBSaveData,FBActions>
{
    private _gameModel: FBGameModel;
    private _team: number;
    private _behaviours: AIBehaviour[];
    private _myTeam: TeamData;

    create(clientID: number, teamID: number, gameModel: FBGameModel, data: FBScenarioData): void
    {
        this._gameModel = gameModel;
        this._team = teamID;
        this._myTeam =  data.teams[this._team];
        this._behaviours = new Array(this._myTeam.agents.length);
        for (let i=0;i<this._myTeam.agents.length;i++)
        {
            this._behaviours[i] = new TurretBehaviour(teamID);
        }
    }

    update<FBActions>(data: FBScenarioData, commandFactory: FBCommandFactory, delta: number): Command<FBActions>[] | Command<FBActions>
    {
        let commands = [];
        for (let a=0,len=this._myTeam.agents.length;a<len;a++)
        {
            let me = this._myTeam.agents[a];
            if (me.inUse)
            {
                let cs = this._behaviours[a].run(data, me, a, commandFactory, delta);
                if (cs)
                    commands.push(cs);
            }
        }
        return commands;
    }
    
    scenarioEnded(data: FBScenarioData): void {}


}