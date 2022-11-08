import { prisma } from "../../../@shared/db/prisma.client";
import { Game } from "../../domain/entity/game";
import { GamesRepositoryInterface } from "games/domain/repository/games-repository.interface";

export class GamesRepository implements GamesRepositoryInterface {
  async add(game: Game): Promise<void> {
    await prisma.games.create({
      data: {
        id: game.id,
        played_at: game.played_at,
        first_country_id: game.first_country.id as any,
        second_country_id: game.second_country.id as any,
        status: game.status,
      },
    });
  }
}
