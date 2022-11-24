import { GamesRepository } from "../../repository/prisma/games.repository";

type OutputGameAndResult = {
  id: string;
  played_at: string;
  first_slug: string;
  first_flag: string;
  second_slug: string;
  second_flag: string;
  match_score: string;
  result: string;
  status: string;
};

export class GamesAndResultsUsecase {
  async execute() {
    const repository = new GamesRepository();

    const games = await repository.gamesAndResults();

    const gamesOutput: OutputGameAndResult[] = [];

    games.forEach((game) => {
      gamesOutput.push({
        id: game.id,
        played_at: game.played_at,
        first_slug: game.first_country.slug,
        first_flag: game.first_country.flag,
        second_slug: game.second_country.slug,
        second_flag: game.second_country.flag,
        match_score: game.match_score,
        result: game.result(),
        status: game.status,
      });
    });

    return gamesOutput;
  }
}
