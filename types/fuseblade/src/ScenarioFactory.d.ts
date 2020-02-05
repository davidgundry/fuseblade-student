import { FPScenario } from "FarmerPuzzle";
import { FBScenario } from "fuseblade/FBScenario";
import { FBSaveData } from "fuseblade/FBSaveData";
export declare class ScenarioFactory {
    createFusebladeScenario(saveData: FBSaveData): FBScenario;
    createFarmerPuzzleScenario(): FPScenario;
}
