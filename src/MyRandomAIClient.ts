import * as GameServer from "../lib/fuseblade/gameserver/index"

export class MyRandomAIClient<D extends GameServer.ScenarioData<S>, S, C> implements GameServer.AIClient<D,S,C>
{
    private _gameModel: GameServer.GameModel<D, S, C>;

    create(clientID: number, teamID: number, gameModel: GameServer.GameModel<D,S,C>): void
    {
        this._gameModel = gameModel;
        console.log("AI created");
    }

    update<C>(data: D, commandFactory: GameServer.CommandFactory<C>): GameServer.Command<C>[] | GameServer.Command<C>
    {
        let list = this._gameModel.stateActionMapping(data);
        if (list.length > 0)
        {
            let id = Math.abs(Math.round(Math.random() * list.length-1));
            return commandFactory.getCommand(list[id]);
        }
        return null;
    }

    scenarioEnded(data: D): void
    {

    }
}