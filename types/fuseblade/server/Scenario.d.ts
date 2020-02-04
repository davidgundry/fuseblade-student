import { ClientController } from "server/client/ClientController";
import { GameModel, SimultanousGameModel, TurnBasedGameModel } from "./GameModel";
import { ScenarioData, ScenarioSaveData, TurnBasedScenarioData } from "server/ScenarioData";
import { ClientConnection } from "./client/ClientConnection";
import { AIClient } from "./client/AIClient";
export declare abstract class Scenario<G extends GameModel<D, S, C>, D extends ScenarioData<S>, S extends ScenarioSaveData, C> {
    private _gameModel;
    private _data;
    private _clients;
    protected _ended: boolean;
    private _created;
    constructor(gameModel: G, data: D, clients: ClientController<D, S, C>);
    get ended(): boolean;
    get ready(): boolean;
    get created(): boolean;
    protected get clients(): ClientController<D, S, C>;
    protected get gameModel(): G;
    protected get data(): D;
    abstract update(): void;
    create(): void;
    getSaveData(): S;
    addClient(client: ClientConnection<D, S, C>): boolean;
    addAITeam(ai: AIClient<D, S, C>): void;
}
export declare class TurnBasedScenario<G extends TurnBasedGameModel<D, S, C>, D extends TurnBasedScenarioData<S>, S extends ScenarioSaveData, C> extends Scenario<G, D, S, C> {
    update(): void;
}
export declare class SimultanousScenario<G extends SimultanousGameModel<D, S, C>, D extends ScenarioData<S>, S extends ScenarioSaveData, C> extends Scenario<G, D, S, C> {
    update(): void;
}
