import { AIClient, Command } from "../../lib/fuseblade/gameserver/index"
import { FBScenarioData } from "../../lib/fuseblade/gamemodel/data/FBScenarioData";
import { FBSaveData } from "../../lib/fuseblade/gamemodel/save/FBSaveData";
import { FBActions } from "enums/FBActions";
import { FBGameModel } from "../../lib/fuseblade/gamemodel/model/FBGameModel";
import { FBCommandFactory } from "../../lib/fuseblade/gamemodel/FBCommandFactory";
import ProjectileData from "../../lib/fuseblade/gamemodel/data/ProjectileData";

/**
 * A simple AI controlling one agent that spins around and shoots constantly.
 */
export class RotateAndShootAgent implements AIClient<FBScenarioData,FBSaveData,FBActions>
{
    // Store various private variables for our agent.
    private _rotation: number = 0;
    private readonly _rotationSpeed: number = 1;
    private _timer: number = 0;
    private readonly _reloadTime: number = 0.1;
    private readonly _bulletSpeed: number = 5;
    private readonly _bulletTTL: number = 0.5

    /**
     * This method is called before the start of the scenario with some useful values.
     * @param clientID 
     * @param teamID 
     * @param gameModel 
     * @param data 
     */
    create(clientID: number, teamID: number, gameModel: FBGameModel, data: FBScenarioData): void { }

    /**
     * This method is called each update. It returns all the actions for the team to take that update.
     * @param data
     * @param commandFactory 
     * @param delta 
     */
    update<C>(data: FBScenarioData, commandFactory: FBCommandFactory, delta: number): Command<C>[] | Command<C>
    {
        // Increase our rotation by a constant multiplied by the elapsed time
        this._rotation += delta*this._rotationSpeed;

        // Decrement a timer based on the elapsed time. Once the timer reaches 0
        // we continue with the function.
        if (this._timer > 0)
        {
            this._timer-=delta;
            return null;
        }
        this._timer = this._reloadTime;

        // Get a SpawnProjectile command from our command factory. We need to check
        // that a command has been returned (as we may have hit the maximum projectiles
        // allowed). We can also pass in an agent ID if we don't want to spawn from agent 0.
        let c = commandFactory.getCommand(FBActions.SpawnProjectile);
        if (c)
        {
            // The command stores an argument of type `any`. For the SpawnProjectile action
            // this will be of type ProjectileData. 
            let proj = c.arg as ProjectileData;
            // The projectile defaults to our agent's position and other reasonable defaults.
            // We need to set our velocity, however.
            let dx = Math.cos(this._rotation);
            let dy = Math.sin(this._rotation);
            proj.velocityX = dx*this._bulletSpeed;
            proj.velocityY = dy*this._bulletSpeed;
            proj.timeToLive = this._bulletTTL;
            // Return the command for our team to take this update.
            return c;
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