import { Command } from "./Command";
export interface CommandFactory<C> {
    setClient(clientID: number): void;
    setTeam(teamID: number): void;
    getCommandList(): number[];
    getCommand(command: number): Command<C>;
}
