import { ClientController } from "gameserver/client/ClientController";
import { GameModel, SimultanousGameModel, TurnBasedGameModel } from "./GameModel";
import { ScenarioData, TurnBasedScenarioData } from "gameserver/ScenarioData";
import { ClientConnection } from "./client/ClientConnection";
import { AIClient } from "./client/AIClient";
export declare abstract class Scenario<G extends GameModel<D, S, C>, D extends ScenarioData<S>, S, C> {
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
    get data(): D;
    abstract update(delta: number): void;
    create(): void;
    load(save: S): void;
    getSaveData(): S;
    addClient(client: ClientConnection<D, S, C>): boolean;
    addAITeam(ai: AIClient<D, S, C>): void;
    runHeadless(): boolean;
}
export declare class TurnBasedScenario<G extends TurnBasedGameModel<D, S, C>, D extends TurnBasedScenarioData<S>, S, C> extends Scenario<G, D, S, C> {
    update(): void;
}
export declare class SimultanousScenario<G extends SimultanousGameModel<D, S, C>, D extends ScenarioData<S>, S, C> extends Scenario<G, D, S, C> {
    update(delta: number): void;
}
