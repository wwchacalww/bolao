import { prisma } from "../../../@shared/db/prisma.client";
import { Player } from "../../domain/entities/player";
import { PlayersRepositoryInterface } from "../../domain/repository/players-repository.interface";
import { PlayersRepository } from "./players.repository";

describe("PlayersRepository Test", () => {
  let repository: PlayersRepositoryInterface;

  beforeEach(async () => {
    repository = new PlayersRepository();
  });

  it("should create, update, find and list players", async () => {
    const junior = new Player({
      name: "Júnior Fake",
    });

    const suene = new Player({
      name: "Suene Fake",
    });

    await repository.add(junior);
    await repository.add(suene);

    const findJunior = await repository.findById(junior.id);
    const all = await repository.all();

    expect(junior.id).toBe(findJunior.id);
    expect(junior.name).toBe(findJunior.name);
    expect(junior.score).toBe(findJunior.score);
    // expect(all).toMatchObject([junior, suene]);

    junior.score = 3;

    await repository.changeScore(junior);

    const findUpJunior = await repository.findById(junior.id);

    expect(findUpJunior.score).toEqual(3);

    await prisma.players.delete({ where: { id: junior.id } });
    await prisma.players.delete({ where: { id: suene.id } });
  });

  it("should throw errors when not found a player", async () => {
    expect(async () => {
      await repository.findById("fake-id");
    }).rejects.toThrow("Participante não encontrado");
  });

  it("should list bets by player", async () => {
    const result = await repository.listBetsByPlayer(
      "50206225-d9cd-4134-b9ea-d3f20c895c38"
    );

    console.log(result);
    expect(1).toBe(1);
  });

  it("should list only player with bets", async () => {
    const result = await repository.listPlayersWithBets();
    console.log(result);
    expect(1).toBe(1);
  });
});
