import { Player } from "../../domain/entities/player";
import { PlayersRepository } from "../../repository/prisma/players.repository";

export type OutputPlayerDTO = {
  id: string;
  name: string;
  score: number;
};
export class AddPlayerUsecase {
  async execute(name: string): Promise<OutputPlayerDTO> {
    const repository = new PlayersRepository();
    const player = new Player({ name });
    await repository.add(player);

    return player.toJSON();
  }
}
