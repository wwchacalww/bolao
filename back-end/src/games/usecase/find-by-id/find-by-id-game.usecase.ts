import { Game, StatusType } from "../../domain/entity/game";
import { FindByIdCountryUsecase } from "../../../countries/usecase/find-by-id/find-by-id-country.usecase";
import { GamesRepository } from "../../repository/prisma/games.repository";
import { GameplayProp } from "../../domain/repository/games-repository.interface";

type GameProps = {
  game: Game,
  gameplay: GameplayProp[]
}
export class FindByIdGameUsecase {
  async execute(id: string): Promise<GameProps> {
    const findByIdCountry = new FindByIdCountryUsecase();
    const repository = new GamesRepository();
    const find = await repository.findById(id);
    const first_country = await findByIdCountry.execute(find.first_country_id);
    const second_country = await findByIdCountry.execute(
      find.second_country_id
    );

    const game = new Game({
      id,
      played_at: find.played_at,
      first_country,
      second_country,
      group: first_country.group,
      match_score: find.match_score,
      status: find.status as StatusType,
    });

    return {
      game,
      gameplay: find.gameplays
    }
    
  }
}
