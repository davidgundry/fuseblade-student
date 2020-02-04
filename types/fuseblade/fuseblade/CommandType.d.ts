import { Command } from "server/Command";
export declare enum CommandType {
    AgentMove = 0,
    AgentMoveAngle = 1,
    AgentDodge = 2,
    AgentDodgeAngle = 3,
    AgentRotateTo = 4,
    AgentMeleeAttack = 5,
    AgentShoot = 6,
    AgentBurstFireOn = 7,
    AgentBurstFireOff = 8,
    AgentReload = 9,
    AgentShieldUp = 10,
    AgentShieldDown = 11,
    AgentEnterCrouch = 12,
    AgentLeaveCrouch = 13,
    AgentRadio = 14,
    AgentAnimate = 15,
    AgentFlashlightOn = 16,
    AgentFlashlightOff = 17,
    AgentSpawn = 18,
    AgentLoot = 19,
    AgentHarvestOn = 20,
    AgentHarvestOff = 21
}
export declare class AgentCommand extends Command<CommandType> {
    agentID: number;
    constructor(commandType: CommandType, clientID: number, teamID: number, agentID: number);
}
export declare class AgentMove extends AgentCommand {
    x: number;
    y: number;
    constructor(clientID: number, teamID: number, agentID: number, x: number, y: number);
}
export declare class AgentMoveAngle extends AgentCommand {
    angle: number;
    speed: number;
    constructor(clientID: number, teamID: number, agentID: number, angle: number, speed: number);
}
export declare class AgentDodge extends AgentCommand {
    x: number;
    y: number;
    constructor(clientID: number, teamID: number, agentID: number, x: number, y: number);
}
export declare class AgentDodgeAngle extends AgentCommand {
    angle: number;
    speed: number;
    constructor(clientID: number, teamID: number, agentID: number, angle: number, speed: number);
}
export declare class AgentRotateTo extends AgentCommand {
    angle: number;
    constructor(clientID: number, teamID: number, agentID: number, angle: number);
}
