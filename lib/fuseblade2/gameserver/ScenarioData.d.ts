export interface ScenarioData<T> {
    load(saveData: T): void;
    cloneFrom(data: ScenarioData<T>): void;
    save(): T;
    clients(): number;
}
export interface TurnBasedScenarioData<T> extends ScenarioData<T> {
    getCurrentPlayer(): number;
    moveToNextPlayer(): void;
}
