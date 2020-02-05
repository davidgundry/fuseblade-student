import { Command } from "server/Command";
export declare enum FBActions {
    AgentMoveForward = 0,
    AgentMoveBackward = 1,
    AgentStrafeLeft = 2,
    AgentStrafeRight = 3,
    AgentStopMoving = 4
}
export declare class AgentCommand extends Command<FBActions> {
    agentID: number;
    constructor(commandType: FBActions, clientID: number, teamID: number, agentID: number);
}
