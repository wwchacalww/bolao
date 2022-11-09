import { Player } from "../../domain/entities/player";
import { PlayersRepository } from "../../repository/prisma/players.repository";

export class FindByIdPlayerUsecase {
  async execute(id: string): Promise<Player> {
    const repository = new PlayersRepository();

    return await repository.findById(id);
  }
}
