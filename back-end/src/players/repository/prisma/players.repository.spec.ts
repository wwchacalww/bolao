import { prisma } from "../../../@shared/db/prisma.client";
import { Player } from "../../domain/entities/player";
import { PlayersRepositoryInterface } from "../../domain/repository/players-repository.interface";
import { PlayersRepository } from "./players.repository";

describe("PlayersRepository Test", () => {
  let repository: PlayersRepositoryInterface;

  beforeEach(async () => {
    repository = new PlayersRepository();
  });

  it("should create, find and list players", async () => {
    const junior = new Player({
      name: "Júnior",
    });

    const suene = new Player({
      name: "Suene",
    });

    await repository.add(junior);
    await repository.add(suene);

    const findJunior = await repository.findById(junior.id);
    const all = await repository.all();

    expect(junior.id).toBe(findJunior.id);
    expect(junior.name).toBe(findJunior.name);
    expect(junior.score).toBe(findJunior.score);
    expect(all).toMatchObject([junior, suene]);

    await prisma.players.delete({ where: { id: junior.id } });
    await prisma.players.delete({ where: { id: suene.id } });
  });

  it("should throw errors when not found a player", async () => {
    expect(async () => {
      await repository.findById("fake-id");
    }).rejects.toThrow("Participante não encontrado");
  });
});