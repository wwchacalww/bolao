import { PlayersRepository } from "../../repository/prisma/players.repository";

export class ListLinksUsecase {
  async execute(group: string) {
    const repository = new PlayersRepository();
    const players = await repository.all();

    return players.map((player) => {
      return {
        player: player.name,
        link: `https://bolao.chacal.dev/palpites/${group}/${player.id}`,
      };
    });
  }
}
