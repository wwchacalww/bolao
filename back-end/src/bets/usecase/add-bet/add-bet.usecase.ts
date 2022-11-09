import { Player } from "../../../players/domain/entities/player";
import { Game } from "../../../games/domain/entity/game";
import { BetsRepository } from "../../repository/prisma/bets.repository";
import { Bet } from "../../domains/entity/bet";

type InputAddBetDTO = {
  game: Game;
  player: Player;
  bet: string;
};

export type OutputBet = {
  id: string;
  bet: string;
  player: {
    id: string;
    name: string;
  };
  game: {
    played_at: string;
    first_country: {
      id: string;
      name: string;
      slug: string;
    };
    second_country: {
      id: string;
      name: string;
      slug: string;
    };
  };
};

export class AddBetUsecase {
  async execute({ game, player, bet }: InputAddBetDTO): Promise<OutputBet> {
    const repository = new BetsRepository();
    const betEntity = new Bet({
      bet,
      game,
      player,
    });
    await repository.add(betEntity);

    return {
      id: betEntity.id,
      bet: bet,
      player: {
        id: player.id,
        name: player.name,
      },
      game: {
        played_at: game.played_at,
        first_country: {
          id: game.first_country.id as string,
          name: game.first_country.name,
          slug: game.first_country.slug,
        },
        second_country: {
          id: game.second_country.id as string,
          name: game.second_country.name,
          slug: game.second_country.slug,
        },
      },
    };
  }
}
