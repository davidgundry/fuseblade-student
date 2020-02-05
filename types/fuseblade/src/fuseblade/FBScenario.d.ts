import { SimultanousScenario } from "server/Scenario";
import { FBGameModel } from "./FBGameModel";
import { FBScenarioData } from "./FBScenarioData";
import { FBSaveData } from "./FBSaveData";
import { FBActions } from "./FBActions";
export declare class FBScenario extends SimultanousScenario<FBGameModel, FBScenarioData, FBSaveData, FBActions> {
    constructor(saveData: FBSaveData);
}
