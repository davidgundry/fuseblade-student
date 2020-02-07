import { Command } from "gameserver/Command";
export declare enum FBActions {
    AgentMoveForward = 0,
    AgentMoveBackward = 1,
    AgentStrafeLeft = 2,
    AgentStrafeRight = 3,
    AgentStopMoving = 4,
    AgentTurnLeft = 5,
    AgentTurnRight = 6,
    AgentStopTurning = 7,
    AgentBurstFireOn = 8,
    AgentBurstFireOff = 9,
    AgentShoot = 10,
    AgentMelee = 11,
    AgentReload = 12,
    AgentShieldUp = 13,
    AgentShieldDown = 14
}
export declare class AgentCommand extends Command<FBActions> {
    agentID: number;
    constructor(commandType: FBActions, clientID: number, teamID: number, agentID: number);
}
