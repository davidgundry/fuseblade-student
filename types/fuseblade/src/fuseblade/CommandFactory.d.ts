import { FBActions } from "./FBActions";
import { CommandFactory as CommandFactoryInterface } from "server/CommandFactory";
import { Command } from "server/Command";
export declare class CommandFactory implements CommandFactoryInterface<FBActions> {
    private _currentClient;
    private _currentTeam;
    private _allActions;
    constructor();
    setClient(clientID: number): void;
    setTeam(teamID: number): void;
    getCommand(t: FBActions): Command<FBActions>;
    getCommandList(): number[];
}
