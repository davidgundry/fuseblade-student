const sf = require('../../fuseblade-server/dist/fusebladeServer')
//const fs = require('fs') // Must put target:node in webpack.config.js instead
import { MyRandomAIClient } from "MyRandomAIClient";
import ScenarioFactory from "types/fuseblade/index";
import { defaultSaveData } from "../../fuseblade-server/src/fuseblade/FBSaveData";

let factory: ScenarioFactory = new sf.default()
let scenario = factory.createFusebladeScenario(defaultSaveData);
while(!scenario.ready)
    scenario.addAITeam(new MyRandomAIClient());

if (typeof window === 'undefined')
    scenario.runHeadless();
else //if (scenario instanceof FBScenario)
    window["FBScenario"] = scenario;