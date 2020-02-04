import { AgentMove, AgentMoveAngle, AgentRotateTo, AgentDodge, AgentDodgeAngle, CommandType } from "./CommandType";
import { CommandFactory as CommandFactoryInterface } from "server/CommandFactory";
import { Command } from "server/Command";
export declare class CommandFactory implements CommandFactoryInterface<CommandType> {
    private _currentClient;
    private _currentTeam;
    setClient(clientID: number): void;
    setTeam(teamID: number): void;
    getCommand(t: CommandType): Command<CommandType>;
    getCommandList(): number[];
    agentMove(agentID: number, x: number, y: number): AgentMove;
    agentMoveAngle(agentID: number, angle: number, speed: number): AgentMoveAngle;
    agentDodge(agentID: number, x: number, y: number): AgentDodge;
    agentDodgeAngle(agentID: number, angle: number, speed: number): AgentDodgeAngle;
    agentRotateTo(agentID: number, angle: number): AgentRotateTo;
}
