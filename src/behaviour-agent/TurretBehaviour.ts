import { AgentBehaviour } from "./AgentBehaviour";
import { FBCommandFactory } from "../../lib/fuseblade/gamemodel/FBCommandFactory";
import { FBCommand } from "../../lib/fuseblade/gamemodel/FBCommand";
import { FBActions } from "../../lib/fuseblade/gamemodel/FBActions";
import ProjectileData from "../../lib/fuseblade/gamemodel/data/ProjectileData";

export class TurretBehaviour extends AgentBehaviour
{
    private _timer: number = 0;
    private readonly _reloadTime: number = 1;
    private readonly _bulletSpeed: number = 5;
    private readonly _bulletTTL: number = 2

    update(delta: number, commandFactory: FBCommandFactory): FBCommand[]
    {
        // Here we decrease a timer with the amount of time passed since the last update
        if (this._timer > 0)
        {
            this._timer-=delta;
            return null;
        }

        // Get the agent that we are controlling
        let me = this.team.agents[0];
        
        // Work out the closest target in another team. To do this we iterate over
        // data.teams, and for each team we iterate through the agents on that team.
        // We keep track of the closest team and agent that we have found and store
        // the square distance to that agent
        let closestTeam: number;
        let closestAgent: number;
        let sqDistance = Infinity;
        for(let i=0; i < this.data.teams.length; i++)
        {
            if (this.data.teams[i] === this.team)
                continue;
            for(let j=0;j < this.data.teams[i].agents.length;j++)
            {
                let target = this.data.teams[i].agents[j];
                if (!target.inUse)
                    continue;
                if (Math.floor(target.z) !== Math.floor(me.z))
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
            // If we have found a closest agent, then get a SpawnProjectile command
            // for agent 0. Then we set some properties on the projectile.
            let c = commandFactory.getCommand(FBActions.SpawnProjectile, 0);
            if (c)
            {
                let proj = c.arg as ProjectileData;
                let dx = this.data.teams[closestTeam].agents[closestAgent].x - me.x;
                let dy = this.data.teams[closestTeam].agents[closestAgent].y - me.y;
                let distance = Math.sqrt(sqDistance);
                proj.velocityX = (dx/distance)*this._bulletSpeed;
                proj.velocityY = (dy/distance)*this._bulletSpeed;
                proj.timeToLive = this._bulletTTL;
                proj.damage
                this._timer = this._reloadTime;
                return [c];
            }
        }
        return null;
    }
}