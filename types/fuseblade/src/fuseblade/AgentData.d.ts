import { WorldObjectData } from "./WorldObjectData";
export declare class AgentData extends WorldObjectData {
    team: number;
    crouching: boolean;
    shieldUp: boolean;
    flashlightOn: boolean;
    ammoCurrent: number;
    health: number;
    activeWeapon: number;
    speed: number;
    maxHealth: number;
    meleeDamage: number;
    damage: number;
    reloadTime: number;
    rateOfFire: number;
    ammoClipSize: number;
    burstFirePossible: boolean;
}
