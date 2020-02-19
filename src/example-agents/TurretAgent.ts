import { AIClient, Command } from "../../lib/fuseblade/gameserver/index"
import { FBScenarioData } from "../../lib/fuseblade/gamemodel/data/FBScenarioData";
import { FBSaveData } from "../../lib/fuseblade/gamemodel/save/FBSaveData";
import { FBActions } from "enums/FBActions";
import { FBGameModel } from "../../lib/fuseblade/gamemodel/model/FBGameModel";
import { FBCommandFactory } from "../../lib/fuseblade/gamemodel/FBCommandFactory";
import ProjectileData from "../../lib/fuseblade/gamemodel/data/ProjectileData";

/**
 * A simple AI controlling one agent that aims at the player and shoots.
 */
export class TurretAgent implements AIClient<FBScenarioData,FBSaveData,FBActions>
{
    // Store various private variables for our agent.
    private _team: number;
    private _timer: number = 0;
    private readonly _reloadTime: number = 1;
    private readonly _bulletSpeed: number = 5;
    private readonly _bulletTTL: number = 2

    /**
     * This method is called before the start of the scenario with some useful values.
     * Here we save the team that we are on so we can find the agent we are controlling later.
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
     * This method is called each update. It returns all the actions for the team to take that update.
     * @param data
     * @param commandFactory 
     * @param delta 
     */
    update<C>(data: FBScenarioData, commandFactory: FBCommandFactory, delta: number): Command<C>[] | Command<C>
    {
        // Here we decrease a timer with the amount of time passed since the last update
        if (this._timer > 0)
        {
            this._timer-=delta;
            return null;
        }

        // Get the agent that we are controlling
        let me = data.teams[this._team].agents[0];
        
        // Work out the closest target in another team. To do this we iterate over
        // data.teams, and for each team we iterate through the agents on that team.
        // We keep track of the closest team and agent that we have found and store
        // the square distance to that agent
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
                let dx = data.teams[closestTeam].agents[closestAgent].x - me.x;
                let dy = data.teams[closestTeam].agents[closestAgent].y - me.y;
                let distance = Math.sqrt(sqDistance);
                proj.velocityX = (dx/distance)*this._bulletSpeed;
                proj.velocityY = (dy/distance)*this._bulletSpeed;
                proj.timeToLive = this._bulletTTL;
                this._timer = this._reloadTime;
                return c;
            }
        }
        return null;
    }
    
    /**
     * This method is called at the end of the scenario. It can be used for outputing data about
     * the run.
     * @param data
     */
    scenarioEnded(data: FBScenarioData): void {}
}