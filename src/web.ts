const sf = require("../lib/fuseblade/fusebladeWeb");
import ScenarioFactory from "../lib/fuseblade/gameserver/index";
import { defaultSaveData } from "../lib/fuseblade/defaultSaveData";
import { BFSAgent } from "example-agents/BFSAgent";
import { TurretAgent } from "example-agents/TurretAgent";

let factory: ScenarioFactory = new sf.default()
let scenario = factory.createFusebladeScenario(defaultSaveData);
scenario.addAITeam(new BFSAgent());
scenario.addAITeam(new TurretAgent());
window["FBScenario"] = scenario;
