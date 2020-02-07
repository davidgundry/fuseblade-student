import { AIClient } from "./AIClient";
import { ScenarioData } from "gameserver/ScenarioData";
import { GameModel } from "gameserver/GameModel";
import { Command } from "../Command";
import { CommandFactory } from "gameserver/CommandFactory";
export declare class RandomAIClient<D extends ScenarioData<S>, S, C> implements AIClient<D, S, C> {
    private _gameModel;
    create(clientID: number, teamID: number, gameModel: GameModel<D, S, C>): void;
    update<C>(data: D, commandFactory: CommandFactory<C>): Command<C>[] | Command<C>;
    scenarioEnded(data: D): void;
}
