import { ScenarioData, ScenarioSaveData, AIClient, GameModel, CommandFactory, Command } from "../types/fuseblade/index"

export class MyRandomAIClient<D extends ScenarioData<S>, S extends ScenarioSaveData, C> implements AIClient<D,S,C>
{
    private _gameModel: GameModel<D, S, C>;

    create(clientID: number, teamID: number, gameModel: GameModel<D,S,C>): void
    {
        this._gameModel = gameModel;
    }

    update<C>(data: D, commandFactory: CommandFactory<C>): Command<C>[] | Command<C>
    {
        let list = this._gameModel.stateActionMapping(data);
        if (list.length > 0)
        {
            let id = Math.round(Math.random() * list.length-1)
            return commandFactory.getCommand(list[id]);
        }
        return null;
    }

    scenarioEnded(data: D): void
    {

    }
}