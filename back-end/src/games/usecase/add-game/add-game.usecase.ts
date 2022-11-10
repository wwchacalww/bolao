import { Country } from "../../../countries/domain/entity/Country";
import { GamesRepository } from "../../repository/prisma/games.repository";
import { Game } from "../../domain/entity/game";

type InputGameDTO = {
  played_at: string;
  first_country: Country;
  second_country: Country;
  group: string;
};

type OutputGameDTO = {
  id: string;
  played_at: string;
  group: string;
  first_country: {
    id: string;
    name: string;
    slug: string;
    flag: string;
  };
  second_country: {
    id: string;
    name: string;
    slug: string;
    flag: string;
  };
  match_score: string;
  status: string;
  result: string;
};

export class AddGameUsecase {
  async execute({
    played_at,
    first_country,
    second_country,
    group,
  }: InputGameDTO): Promise<OutputGameDTO> {
    const repository = new GamesRepository();
    const game = new Game({
      played_at,
      first_country,
      second_country,
      group,
    });
    await repository.add(game);

    return {
      id: game.id,
      played_at,
      group,
      first_country: {
        id: first_country.id || "",
        name: first_country.name,
        slug: first_country.slug,
        flag: first_country.flag,
      },
      second_country: {
        id: second_country.id || "",
        name: second_country.name,
        slug: second_country.slug,
        flag: second_country.flag,
      },
      match_score: game.match_score,
      status: game.status,
      result: game.result() || "",
    };
  }
}
