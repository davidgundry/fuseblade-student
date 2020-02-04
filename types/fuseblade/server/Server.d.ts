import { Scenario } from "./Scenario";
export declare abstract class Server {
    protected scenario: Scenario<any, any, any, any>;
    loadScenario(scenario: Scenario<any, any, any, any>): void;
    abstract run(): boolean;
}
