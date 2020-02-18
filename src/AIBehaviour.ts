import { FBScenarioData } from "../lib/fuseblade/gamemodel/data/FBScenarioData";
import { AgentData } from "../lib/fuseblade/gamemodel/data/AgentData";
import { FBCommandFactory } from "../lib/fuseblade/gamemodel/FBCommandFactory";

export interface AIBehaviour
{
    run(data: FBScenarioData, me: AgentData, meID: number, commandFactory: FBCommandFactory, delta: number)
}