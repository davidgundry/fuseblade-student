import { AgentData } from "../../lib/fuseblade/gamemodel/data/AgentData";
import { FBScenarioData } from "../../lib/fuseblade/gamemodel/data/FBScenarioData";

export class FindClosestTargetModule
{

    static findClosestTarget(me: AgentData, data: FBScenarioData): AgentData
    {

        // Work out the closest target in another team. To do this we iterate over
        // data.teams, and for each team we iterate through the agents on that team.
        // We keep track of the closest team and agent that we have found and store
        // the square distance to that agent
        let closestTeam: number;
        let closestAgent: number;
        let sqDistance = Infinity;
        for(let i=0; i < data.teams.length; i++)
        {
            if (i === me.team)
                continue;
            for(let j=0;j < data.teams[i].agents.length;j++)
            {
                let target = data.teams[i].agents[j];
                if (!target.inUse)
                    continue;
                if (Math.floor(target.z) !== Math.floor(me.z))
                    continue;
                let dist = (me.x - target.x)*(me.x - target.x) + (me.y - target.y)*(me.y - target.y);
                if (dist < sqDistance)
                {
                    closestTeam = i;
                    closestAgent = j;
                    sqDistance = dist;
                }
            }
        }
        if (closestAgent !== undefined)
            return data.teams[closestTeam].agents[closestAgent];
        return null;
    }
}