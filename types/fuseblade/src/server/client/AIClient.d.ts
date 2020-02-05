import { ScenarioData } from "server/ScenarioData";
import { Command } from "../Command";
import { CommandFactory } from "server/CommandFactory";
import { GameModel } from "server/GameModel";
export interface AIClient<D extends ScenarioData<S>, S, C> {
    create(clientID: number, teamID: number, gameModel: GameModel<D, S, C>): void;
    update(data: D, commandFactory: CommandFactory<C>): Command<C>[] | Command<C>;
    scenarioEnded(data: D): void;
}
