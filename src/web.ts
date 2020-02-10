const sf = require("../lib/fuseblade/fusebladeWeb");
import { MyRandomAIClient } from "MyRandomAIClient";
import ScenarioFactory from "../lib/fuseblade/gameserver/index";
import { defaultSaveData } from "../lib/fuseblade/defaultSaveData";
import { BehaviourAI } from "BehaviourAI";

let factory: ScenarioFactory = new sf.default()
let scenario = factory.createFusebladeScenario(defaultSaveData);
scenario.addAITeam(new MyRandomAIClient());
scenario.addAITeam(new BehaviourAI());
window["FBScenario"] = scenario;
