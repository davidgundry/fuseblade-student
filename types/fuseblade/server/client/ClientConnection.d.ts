import { Command } from "../Command";
import { AIClient } from "./AIClient";
import { ScenarioData, ScenarioSaveData } from "server/ScenarioData";
import { CommandFactory } from "server/CommandFactory";
import { GameModel } from "server/GameModel";
import { LocalServerConnection } from "LocalServerConnection";
export declare abstract class ClientConnection<D extends ScenarioData<S>, S extends ScenarioSaveData, C> {
    readonly clientID: number;
    readonly teamID: number;
    private _isObserver;
    abstract sendDataUpdate(data: D): void;
    abstract grabCommands(commandFactory: CommandFactory<C>): Command<C>[] | Command<C>;
    abstract createScenario(data: D, gameModel: GameModel<D, S, C>): void;
    constructor(clientID: number, teamID: number);
    get isObserver(): boolean;
}
export declare class LocalClientConnection<D extends ScenarioData<S>, S extends ScenarioSaveData, C> extends ClientConnection<D, S, C> {
    private _local;
    protected _commandsBuffer: Command<C>[];
    constructor(clientID: number, teamID: number, client: LocalServerConnection);
    createScenario(data: D, gameModel: GameModel<D, S, C>): void;
    sendDataUpdate(data: D): void;
    grabCommands(commandFactory: CommandFactory<C>): Command<C> | Command<C>[];
    recieveCommand(command: Command<C>): void;
}
export declare class AIClientConnection<D extends ScenarioData<S>, S extends ScenarioSaveData, C> extends ClientConnection<D, S, C> {
    private _ai;
    private _data;
    constructor(clientID: number, teamID: number, client: AIClient<D, S, C>);
    createScenario(data: D, gameModel: GameModel<D, S, C>): void;
    sendDataUpdate(data: D): void;
    grabCommands(commandFactory: CommandFactory<C>): Command<C> | Command<C>[];
}
