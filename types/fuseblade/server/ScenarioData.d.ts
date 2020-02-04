export interface ScenarioData<T extends ScenarioSaveData> {
    load(saveData: T): void;
    cloneFrom(data: ScenarioData<T>): void;
    save(): T;
}
export declare abstract class ScenarioSaveData {
    abstract clients: number;
}
export interface TurnBasedScenarioData<T extends ScenarioSaveData> extends ScenarioData<T> {
    getCurrentPlayer(): number;
    moveToNextPlayer(): void;
}
