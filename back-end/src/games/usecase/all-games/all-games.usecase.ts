import { GamesRepository } from "../../repository/prisma/games.repository";

export class AllGamesUsecase {
  async execute() {
    const repository = new GamesRepository();
    return await repository.all();
  }
}
