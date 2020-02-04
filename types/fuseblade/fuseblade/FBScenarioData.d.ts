import { ScenarioData } from "../server/ScenarioData";
import { SaveData } from "./SaveData";
import { TeamData } from "./TeamData";
import { AgentData } from "./AgentData";
import { WorldObjectData } from "./WorldObjectData";
export declare class FBScenarioData implements ScenarioData<SaveData> {
    teams: TeamData[];
    map: number[][][];
    agents: AgentData[][];
    agentsLength: number[];
    worldObjects: WorldObjectData[];
    worldObjectsLength: number;
    cloneFrom(source: FBScenarioData): void;
    load(saveData: SaveData): void;
    clone(other: FBScenarioData): void;
    save(): SaveData;
}
