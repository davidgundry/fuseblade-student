const sf = require("../lib/fuseblade/fusebladeWeb");
//const fs = require('fs') // Must put target:node in webpack.config.js
import { MyRandomAIClient } from "MyRandomAIClient";
import ScenarioFactory from "../lib/fuseblade/gameserver/index";
import { defaultSaveData } from "../lib/fuseblade/defaultSaveData";

let factory: ScenarioFactory = new sf.default()
let scenario = factory.createFusebladeScenario(defaultSaveData);
while(!scenario.ready)
    scenario.addAITeam(new MyRandomAIClient());
window["FBScenario"] = scenario;
