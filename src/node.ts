const sf = require("../lib/fuseblade/fusebladeNode");
//const fs = require('fs') // Must put target:node in webpack.config.js
import { MyRandomAIClient } from "MyRandomAIClient";
import ScenarioFactory from "../lib/fuseblade/gameserver/index";
import { defaultSaveData } from "../lib/fuseblade/defaultSaveData";

let factory: ScenarioFactory = new sf.default()
let scenario = factory.createFusebladeScenario(defaultSaveData);
while(!scenario.ready)
    scenario.addAITeam(new MyRandomAIClient());
scenario.runHeadless();