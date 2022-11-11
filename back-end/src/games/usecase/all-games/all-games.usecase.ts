import { GamesRepository } from "../../repository/prisma/games.repository";

type betProps = {
  game_id: string;
  game: number;
  played_at: string;
  first_slug: string;
  first_flag: string;
  first_country: number;
  second_slug: string;
  second_flag: string;
  second_country: number;
};

type betsProps = {
  group: string;
  bets: betProps[];
};
export class AllGamesUsecase {
  async execute() {
    const repository = new GamesRepository();
    const games = await repository.all();

    let gamesOutput: betsProps[] = [];
    let groupCtrl = "";
    let arrayCtrl = 0;
    let game_number = 0;
    games.forEach((game) => {
      if (groupCtrl !== game.group) {
        arrayCtrl++;
        groupCtrl = game.group;
        game_number = 1;
        gamesOutput.push({
          group: groupCtrl,
          bets: [
            {
              game_id: game.id,
              first_country: 99,
              first_flag: game.first_country.flag,
              first_slug: game.first_country.slug,
              second_country: 99,
              second_flag: game.second_country.flag,
              second_slug: game.second_country.slug,
              game: game_number,
              played_at: game.played_at,
            },
          ],
        });
      } else {
        game_number++;
        gamesOutput[arrayCtrl - 1].bets.push({
          game_id: game.id,
          first_country: 99,
          first_flag: game.first_country.flag,
          first_slug: game.first_country.slug,
          second_country: 99,
          second_flag: game.second_country.flag,
          second_slug: game.second_country.slug,
          game: game_number,
          played_at: game.played_at,
        });
      }
    });

    return gamesOutput;
  }
}
