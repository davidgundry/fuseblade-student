import { SimultanousGameModel } from "server/GameModel";
import { FBScenarioData } from "./FBScenarioData";
import { FBSaveData } from "./FBSaveData";
import { FBActions } from "./FBActions";
import { Command } from "server/Command";
export declare class FBGameModel extends SimultanousGameModel<FBScenarioData, FBSaveData, FBActions> {
    private _allActions;
    constructor();
    stateActionMapping(data: FBScenarioData): number[];
    applyCommands(data: FBScenarioData, commands: Command<FBActions>[]): void;
    goalTest(data: FBScenarioData): boolean;
}
