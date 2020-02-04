import { SimultanousScenario } from "server/Scenario";
import { FBGameModel } from "./FBGameModel";
import { FBScenarioData } from "./FBScenarioData";
import { SaveData } from "./SaveData";
import { CommandType } from "./CommandType";
export declare class FBScenario extends SimultanousScenario<FBGameModel, FBScenarioData, SaveData, CommandType> {
    constructor(saveData: SaveData);
}
