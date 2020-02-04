import { Command } from "./Command";
import { ScenarioData, ScenarioSaveData, TurnBasedScenarioData } from "server/ScenarioData";
export declare abstract class GameModel<D extends ScenarioData<S>, S extends ScenarioSaveData, C> {
    abstract goalTest(data: D): boolean;
    abstract stateActionMapping(data: D): number[];
}
export declare abstract class TurnBasedGameModel<D extends TurnBasedScenarioData<S>, S extends ScenarioSaveData, C> extends GameModel<D, S, C> {
    abstract applyCommands(data: D, command: Command<C> | Command<C>[]): void;
}
export declare abstract class SimultanousGameModel<D extends ScenarioData<S>, S extends ScenarioSaveData, C> extends GameModel<D, S, C> {
    abstract applyCommands(data: D, command: Command<C> | Command<C>[]): void;
}
