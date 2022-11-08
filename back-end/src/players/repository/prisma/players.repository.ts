import { prisma } from "../../../@shared/db/prisma.client";
import { Player } from "../../domain/entities/player";
import { PlayersRepositoryInterface } from "../../domain/repository/players-repository.interface";

export class PlayersRepository implements PlayersRepositoryInterface {
  async add(player: Player): Promise<void> {
    await prisma.players.create({
      data: {
        id: player.id,
        name: player.name,
        score: player.score,
      },
    });
  }

  async findById(id: string): Promise<Player> {
    const player = await prisma.players.findFirst({
      where: { id },
    });
    if (!player) {
      throw new Error("Participante não encontrado");
    }

    return new Player({
      id: player.id,
      name: player.name,
      score: player.score,
    });
  }

  async all(): Promise<Player[]> {
    const players = await prisma.players.findMany();
    if (!players) {
      throw new Error("Nenhum participante listado");
    }

    return players.map((player) => {
      const { id, name, score } = player;
      return new Player({
        id,
        name,
        score,
      });
    });
  }
}
