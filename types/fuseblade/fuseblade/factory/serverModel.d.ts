import { SaveData } from "fuseblade/SaveData";
import { FBScenarioData } from "fuseblade/FBScenarioData";
import { FBGameModel } from "fuseblade/FBGameModel";
import { CommandType } from "fuseblade/CommandType";
import { SimultanousScenario } from "server/Scenario";
export declare function createFBScenario(saveData: SaveData, clientsCount: any): SimultanousScenario<FBGameModel, FBScenarioData, SaveData, CommandType>;
