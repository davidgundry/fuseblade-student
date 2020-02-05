import { ScenarioData } from "../server/ScenarioData";
import { FBSaveData } from "./FBSaveData";
import { TeamData } from "./TeamData";
import { AgentData } from "./AgentData";
import { WorldObjectData } from "./WorldObjectData";
export declare enum WallType {
    None = 0,
    Low = 1,
    High = 2
}
export declare class FBScenarioData implements ScenarioData<FBSaveData> {
    teams: TeamData[];
    map: WallType[][];
    influence: number[][][];
    agents: AgentData[][];
    agentsLength: number[];
    worldObjects: WorldObjectData[];
    worldObjectsLength: number;
    cloneFrom(source: FBScenarioData): void;
    clients(): number;
    load(saveData: FBSaveData): void;
    save(): FBSaveData;
}
