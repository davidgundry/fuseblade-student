import { SimultanousGameModel } from "server/GameModel";
import { FBScenarioData } from "./FBScenarioData";
import { SaveData } from "./SaveData";
import { CommandType } from "./CommandType";
import { Command } from "server/Command";
export declare class FBGameModel extends SimultanousGameModel<FBScenarioData, SaveData, CommandType> {
    stateActionMapping<CommandType>(data: FBScenarioData): (keyof CommandType)[];
    applyCommands(data: FBScenarioData, commands: Command<CommandType>[]): void;
    goalTest(data: FBScenarioData): boolean;
}
