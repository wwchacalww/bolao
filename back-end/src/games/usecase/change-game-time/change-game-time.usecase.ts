import { GamesRepository } from "../../repository/prisma/games.repository";

export class ChangeGameTimeUsecase {
  async execute() {
    const repository = new GamesRepository();
    await repository.changeGameTime();
    return { message: "game time updated" };
  }
}
