import { PlayersRepository } from "../../repository/prisma/players.repository";

export class ListPlayersWithBetsUsecase {
  async execute() {
    const repository = new PlayersRepository();
    const players = await repository.listPlayersWithBets();
    let rank = 0;
    let score = 0;
    return players.map((player) => {
      if (rank === 0) {
        rank = 1;
        score = player.score;
        return {
          id: player.id,
          name: player.name,
          score: player.score,
          rank,
        };
      } else {
        rank = player.score === score ? rank : rank + 1;
        score = player.score;
        return {
          id: player.id,
          name: player.name,
          score: player.score,
          rank,
        };
      }
    });
  }
}
