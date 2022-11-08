import { prisma } from "@shared/db/prisma.client";
import { Game } from "games/domain/entity/game";
import { Player } from "players/domain/entities/player";
import { Bet } from "../../domains/entity/bet";
import { BetsRepositoryInterface } from "../../domains/repository/bet-repository.interface";

export class BetsRepository implements BetsRepositoryInterface {
  async add(bet: Bet): Promise<void> {
    await prisma.bets.create({
      data: {
        id: bet.id,
        bet: bet.bet,
        game_id: bet.game.id,
        player_id: bet.player.id,
      },
    });
  }

  async all(): Promise<Bet[]> {
    throw new Error("Method not implemented.");
  }
  listBetsOnPlayer(player_id: string): Promise<Bet[]> {
    throw new Error("Method not implemented.");
  }
  listBetsOnGame(game_id: string): Promise<Bet[]> {
    throw new Error("Method not implemented.");
  }
}
