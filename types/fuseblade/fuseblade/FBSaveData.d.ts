import { WorldObjectData } from "./WorldObjectData";
import { AgentData } from "./AgentData";
import { TeamData } from "./TeamData";
export declare class FBSaveData {
    teams: TeamData[];
    map: number[][];
    influence: number[][][];
    worldObjects: WorldObjectData[];
    agents: AgentData[][];
}
declare let defaultSaveData: FBSaveData;
export { defaultSaveData };
