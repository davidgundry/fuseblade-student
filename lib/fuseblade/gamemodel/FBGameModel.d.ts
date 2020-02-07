import { SimultanousGameModel } from "gameserver/GameModel";
import { FBScenarioData } from "./FBScenarioData";
import { FBSaveData } from "./FBSaveData";
import { FBActions } from "./FBActions";
import { FBCommand } from "./FBCommand";
export declare class FBGameModel extends SimultanousGameModel<FBScenarioData, FBSaveData, FBActions> {
    private _allActions;
    constructor();
    stateActionMapping(data: FBScenarioData): number[];
    applyCommands(data: FBScenarioData, commands: FBCommand[], delta: number): void;
    private _agentActions;
    private _doStateUpdate;
    private _updateInfluence;
    private _updateAgent;
    goalTest(data: FBScenarioData): boolean;
}
