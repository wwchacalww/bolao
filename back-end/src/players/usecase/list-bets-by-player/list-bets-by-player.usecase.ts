import { PlayersRepository } from "../../repository/prisma/players.repository";

export class ListBetsByPlayerUsecase {
  async execute(id: string) {
    const repository = new PlayersRepository();
    return await repository.listBetsByPlayer(id);
  }
}
