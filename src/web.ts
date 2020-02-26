const sf = require("../lib/fuseblade/fusebladeWeb");
import ScenarioFactory from "../lib/fuseblade/gameserver/index";
import { MyAgent } from "behaviour-agent/MyAgent";
import {mySaveData } from "behaviour-agent/saveData"

let factory: ScenarioFactory = new sf.default()
let scenario = factory.createFusebladeScenario(mySaveData);
scenario.addAITeam(new MyAgent());
//scenario.addAITeam(new TurretAgent());
window["FBScenario"] = scenario;
