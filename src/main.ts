const fb = require('../../fuseblade-server/dist/fusebladeServer')

import { MyRandomAIClient } from "MyRandomAIClient";
import { NodeServer, FBScenario} from "../types/fuseblade/index";

//const fs = require('fs') // Must put target:node in webpack.config.js instead

let scenario = new fb.FPScenario()
scenario.addAITeam(new MyRandomAIClient());

if (typeof window === 'undefined')
{
    let server: NodeServer = new fb.NodeServer();
    server.loadScenario(scenario);
    if (server.run())
        server.saveState();
    else
        throw new Error("Scenario not ready: have you loaded enough AIs?");
}
else //if (scenario instanceof FBScenario)
    window["FBScenario"] = scenario;