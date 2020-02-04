import { WorldObjectData } from "./WorldObjectData";
import { AgentData } from "./AgentData";
import { WorldObjectType } from "./WorldObjectType";
import { AgentType } from "./AgentType";
import { WeaponType } from "./WeaponType";
import { TeamData } from "./TeamData";
import { ScenarioSaveData } from "server/ScenarioData";
export declare class SaveData extends ScenarioSaveData {
    clients: number;
    teams: TeamData[];
    map: number[][];
    agentTypes: AgentType[];
    weaponTypes: WeaponType[];
    worldObjectTypes: WorldObjectType[];
    worldObjects: WorldObjectData[];
    agents: AgentData[][];
}
declare let defaultSaveData: SaveData;
export { defaultSaveData };
