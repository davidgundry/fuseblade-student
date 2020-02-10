import { AIBehaviour } from "AIBehaviour";
import { FBScenarioData } from "../lib/fuseblade/gamemodel/FBScenarioData";
import { AgentData } from "../lib/fuseblade/gamemodel/AgentData";
import { FBCommand } from "../lib/fuseblade/gamemodel/FBCommand";
import ProjectileData from "../lib/fuseblade/gamemodel/ProjectileData";
import { FBCommandFactory } from "../lib/fuseblade/gamemodel/FBCommandFactory";
import { FBActions } from "FBActions";

export class TurretBehaviour implements AIBehaviour
{
    private _team: number;
    private _timer: number = 0;

    constructor(team: number)
    {
        this._team = team;
    }

    run(data: FBScenarioData, me: AgentData, meID: number, commandFactory: FBCommandFactory, delta: number): FBCommand
    {
        if (this._timer > 0)
        {
            this._timer-=delta;
            return null;
        }

        let closestTeam: number;
        let closestAgent: number;
        let sqDistance = Infinity;
        for(let i=0; i < data.teams.length; i++)
        {
            if (i === this._team)
                continue;
            for(let j=0;j < data.teams[i].agents.length;j++)
            {
                let target = data.teams[i].agents[j];
                if (!target.inUse)
                    continue;
                let dist = (me.x - target.x)*(me.x - target.x) + (me.y - target.y)*(me.y - target.y);
                if (dist < sqDistance)
                {
                    closestTeam = i;
                    closestAgent = j;
                    sqDistance = dist;
                }
            }
        }
        if (closestTeam !== undefined)
        {
            let c = commandFactory.getCommand(FBActions.SpawnProjectile, meID);
            if (c)
            {
                let proj = c.arg as ProjectileData;
                let dx = data.teams[closestTeam].agents[closestAgent].x - me.x;
                let dy = data.teams[closestTeam].agents[closestAgent].y - me.y;
                let distance = Math.sqrt(sqDistance);
                proj.velocityX = (dx/distance)*5;
                proj.velocityY = (dy/distance)*5;
                this._timer = 0.5;
                return c;
            }
        }
        return null;
    }
}