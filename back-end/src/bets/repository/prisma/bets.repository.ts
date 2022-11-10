import { v4 } from "uuid";
import { prisma } from "../../../@shared/db/prisma.client";
import { Bet } from "../../domains/entity/bet";
import {
  BetsRepositoryInterface,
  InputAddMassBetDTO,
} from "../../domains/repository/bet-repository.interface";

export class BetsRepository implements BetsRepositoryInterface {
  async add(bet: Bet): Promise<void> {
    const data = {
      id: bet.id,
      player_id: bet.player.id,
      game_id: bet.game.id,
      bet: bet.bet,
    };

    await prisma.bets.create({
      data,
    });
  }

  async addMassBets(input: InputAddMassBetDTO): Promise<void> {
    const { bets, player_id } = input;
    bets.forEach(async (bet) => {
      const data = {
        id: v4(),
        player_id,
        game_id: bet.game_id,
        bet: bet.bet,
      };

      await prisma.bets.create({
        data,
      });
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
