import { GamesRepository } from "../../repository/prisma/games.repository";
import { StatusType } from "../../domain/entity/game";
import { FindByIdGameUsecase } from "../find-by-id/find-by-id-game.usecase";
import { PlayersRepository } from "../../../players/repository/prisma/players.repository";

export type InputChangeMatchScore = {
  game_id: string;
  match_score: string;
  status: StatusType;
};
export class ChangeMatchScoreUsecase {
  async execute({ game_id, match_score, status }: InputChangeMatchScore) {
    const findById = new FindByIdGameUsecase();
    const repository = new GamesRepository();
    const playersRepository = new PlayersRepository();
    const game = await findById.execute(game_id);
    game.match_score = match_score;
    game.status = status;

    await repository.changeMatchScore(game);

    const players = await playersRepository.listPlayersWithBets();

    players.forEach(async (player) => {
      await playersRepository.listBetsByPlayer(player.id);
    });
  }
}
