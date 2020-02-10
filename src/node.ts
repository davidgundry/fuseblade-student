const sf = require("../lib/fuseblade/fusebladeNode");
import { MyRandomAIClient } from "MyRandomAIClient";
import ScenarioFactory from "../lib/fuseblade/gameserver/index";
import { defaultSaveData } from "../lib/fuseblade/defaultSaveData";

let factory: ScenarioFactory = new sf.default()
let scenario = factory.createFusebladeScenario(defaultSaveData);
while(!scenario.ready)
    scenario.addAITeam(new MyRandomAIClient());
scenario.runHeadless();