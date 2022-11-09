import { prisma } from "../../../@shared/db/prisma.client";
import { Game } from "../../domain/entity/game";
import {
  GamesRepositoryInterface,
  OutputFindByIdGame,
} from "../../domain/repository/games-repository.interface";

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

  async findById(id: string): Promise<OutputFindByIdGame> {
    const find = await prisma.games.findFirst({ where: { id } });
    if (!find) {
      throw new Error("Partida não encontrada");
    }
    const {
      first_country_id,
      second_country_id,
      played_at,
      match_score,
      result,
      status,
    } = find;

    return {
      id,
      played_at,
      first_country_id,
      second_country_id,
      match_score,
      result,
      status,
    };
  }
}
