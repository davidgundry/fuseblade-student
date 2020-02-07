import { TurnBasedScenarioData } from "./ScenarioData";
import { TurnBasedGameModel } from "./GameModel";
import { Command } from "./Command";
import { CommandFactory } from "./CommandFactory";
import { TurnBasedScenario } from "./Scenario";
export declare enum FPItems {
    Wolf = 0,
    Sheep = 1,
    Cabbage = 2
}
export declare enum FPActions {
    MoveWolf = 0,
    MoveCabbage = 1,
    MoveSheep = 2,
    MoveFarmer = 3
}
export declare class FPState implements TurnBasedScenarioData<FPSave> {
    leftBank: FPItems[];
    rightBank: FPItems[];
    farmerOnLeftBank: boolean;
    load(save: FPSave): void;
    cloneFrom(source: FPState): void;
    clients(): number;
    save(): FPSave;
    equals(other: FPState): boolean;
    getCurrentPlayer(): number;
    moveToNextPlayer(): void;
}
export declare class FPSave {
    leftBank: FPItems[];
    rightBank: FPItems[];
    farmerOnLeftBank: boolean;
}
export declare class FPModel extends TurnBasedGameModel<FPState, FPSave, FPActions> {
    stateActionMapping<FPActions>(state: FPState): FPActions[];
    applyCommands(state: FPState, action: Command<FPActions>): void;
    goalTest(state: FPState): boolean;
    heuristic(state: FPState): number;
    private _checkIfFailureState;
}
export declare class FPCommandFactory implements CommandFactory<FPActions> {
    setClient(clientID: number): void;
    setTeam(teamID: number): void;
    getCommandList(): number[];
    getCommand(c: number): Command<FPActions>;
}
export declare class FPScenario extends TurnBasedScenario<FPModel, FPState, FPSave, FPActions> {
    constructor();
}
