import { FBActions } from "./FBActions";
import { Command } from "server/Command";
export declare class FBCommand extends Command<FBActions> {
    agentID: number;
    constructor(commandType: FBActions, clientID: number, teamID: number, agentID: number);
}
