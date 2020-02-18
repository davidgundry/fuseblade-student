const sf = require("../lib/fuseblade/fusebladeWeb");
import { MyRandomAIClient } from "MyRandomAIClient";
import ScenarioFactory from "../lib/fuseblade/gameserver/index";
import { defaultSaveData } from "../lib/fuseblade/defaultSaveData";
import { BehaviourAI } from "BehaviourAI";
import { RotateAndShootAgent } from "RotateAndShootAgent";
import { BFSAgent } from "BFSAgent";

let factory: ScenarioFactory = new sf.default()
let scenario = factory.createFusebladeScenario(defaultSaveData);
scenario.addAITeam(new BFSAgent());
scenario.addAITeam(new RotateAndShootAgent());
window["FBScenario"] = scenario;
