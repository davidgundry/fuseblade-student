import { FBScenarioData } from "../lib/fuseblade/gamemodel/FBScenarioData";
import { AgentData } from "../lib/fuseblade/gamemodel/AgentData";
import { FBCommandFactory } from "../lib/fuseblade/gamemodel/FBCommandFactory";

export interface AIBehaviour
{
    run(data: FBScenarioData, me: AgentData, meID: number, commandFactory: FBCommandFactory, delta: number)
}