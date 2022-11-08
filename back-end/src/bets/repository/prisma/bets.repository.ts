import { prisma } from "../../../@shared/db/prisma.client";
import { Bet } from "../../domains/entity/bet";
import { BetsRepositoryInterface } from "../../domains/repository/bet-repository.interface";

export class BetsRepository implements BetsRepositoryInterface {
  async add(bet: Bet): Promise<void> {
    const data = {
      id: bet.id,
      player_id: bet.player.id,
      game_id: bet.game.id,
      bet: bet.bet,
    };

    console.log(data);
    await prisma.bets.create({
      data,
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
