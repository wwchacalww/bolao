import { Player } from "../../domain/entities/player";
import { PlayersRepository } from "../../repository/prisma/players.repository";

export type OutputPlayerDTO = {
  id: string;
  name: string;
  group: string;
  score: number;
};
export class AddPlayerUsecase {
  async execute(name: string, group: string): Promise<OutputPlayerDTO> {
    const repository = new PlayersRepository();
    const player = new Player({ name, group });
    await repository.add(player);

    return player.toJSON();
  }
}
