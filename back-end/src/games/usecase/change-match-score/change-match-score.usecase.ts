import { checkResult } from "../../../@shared/utils/check-result";
import { BetsRepository } from "../../../bets/repository/prisma/bets.repository";
import { GamesRepository } from "../../repository/prisma/games.repository";
import { StatusType } from "../../domain/entity/game";
import { FindByIdGameUsecase } from "../find-by-id/find-by-id-game.usecase";
import { PlayersRepository } from "../../../players/repository/prisma/players.repository";

type InputChangeMatchScore = {
  game_id: string;
  match_score: string;
  status: StatusType;
};
export class ChangeMatchScoreUsecase {
  async execute({ game_id, match_score, status }: InputChangeMatchScore) {
    const findById = new FindByIdGameUsecase();
    const repository = new GamesRepository();
    const playersRepository = new PlayersRepository();
    const betsRepository = new BetsRepository();
    const game = await findById.execute(game_id);
    game.match_score = match_score;
    game.status = status;

    await repository.changeMatchScore(game);

    // lista os palpites do game
    const bets = await betsRepository.listBetsOnGame(game_id);

    // Atualizar pontos de todos os participantes
    bets.forEach(async (bet) => {
      const points = checkResult(match_score, bet.bet);
      const score = bet.player.score + points;
      const { player } = bet;
      player.score = score;
      await playersRepository.changeScore(player);
    });
  }
}
