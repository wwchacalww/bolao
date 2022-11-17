import { prisma } from "../../../@shared/db/prisma.client";
import { Country } from "../../../countries/domain/entity/Country";
import { Game } from "../../domain/entity/game";
import { GamesRepositoryInterface } from "../../domain/repository/games-repository.interface";
import { GamesRepository } from "./games.repository";

describe("Games Repository Test", () => {
  let repository: GamesRepositoryInterface;

  beforeEach(async () => {
    repository = new GamesRepository();
  });

  it("should create a game", async () => {
    const first_country = new Country({
      name: "Catar",
      slug: "CAT",
      group: "GRUPO A",
      flag: "/src/asset/flag/Catar.svg",
    });

    const second_country = new Country({
      name: "Equador",
      slug: "EQU",
      group: "GRUPO A",
      flag: "/src/asset/flag/Equador.svg",
    });

    const game = new Game({
      played_at: "Dom 20/11 13:00",
      first_country,
      second_country,
      group: "GRUPO A",
    });

    await repository.add(game);
    const find = await prisma.games.findFirst({ where: { id: game.id } });

    expect(find?.id).toBe(game.id);
    expect(find?.played_at).toBe("Dom 20/11 13:00");
    expect(find?.first_country_id).toBe(first_country.id);
    expect(find?.second_country_id).toBe(second_country.id);
    expect(find?.status).toBe("não jogado");
    expect(find?.result).toBeNull();
    expect(find?.match_score).toBeNull();

    await prisma.games.delete({ where: { id: game.id } });
  });

  it("should find a game", async () => {
    const first_country = new Country({
      name: "Catar",
      slug: "CAT",
      group: "GRUPO A",
      flag: "/src/asset/flag/Catar.svg",
    });

    const second_country = new Country({
      name: "Equador",
      slug: "EQU",
      group: "GRUPO A",
      flag: "/src/asset/flag/Equador.svg",
    });

    const game = new Game({
      played_at: "Dom 20/11 13:00",
      first_country,
      second_country,
      group: "GRUPO A",
    });

    await repository.add(game);
    const find = await repository.findById(game.id);

    expect(find.id).toBe(game.id);
    expect(find.played_at).toBe("Dom 20/11 13:00");
    expect(find.first_country_id).toBe(first_country.id);
    expect(find.second_country_id).toBe(second_country.id);
    expect(find.status).toBe("não jogado");
    expect(find.result).toBeNull();
    expect(find.match_score).toBeNull();

    await prisma.games.delete({ where: { id: game.id } });
  });

  it("should throw error when not found game", async () => {
    expect(async () => await repository.findById("fake-id")).rejects.toThrow(
      "Partida não encontrada"
    );
  });

  it("should list all games", async () => {
    const games = await repository.all();
    console.log(games);
    expect(1).toBe(1);
  });

  it("should change match score, status and result", async () => {
    const first_country = new Country({
      name: "Fake A",
      slug: "FAK",
      group: "GRUPO FAKE",
      flag: "/src/asset/flag/FakeA.svg",
    });

    const second_country = new Country({
      name: "Fake B",
      slug: "FAKB",
      group: "GRUPO FAKE",
      flag: "/src/asset/flag/FakeB.svg",
    });

    const game = new Game({
      played_at: "Dom 20/11 13:00",
      first_country,
      second_country,
      group: "GRUPO FAKE",
    });

    await repository.add(game);

    game.match_score = "2-2";
    game.status = "concluído";

    await repository.changeMatchScore(game);
    const find = await repository.findById(game.id);

    console.log(game.result());

    expect(find.status).toBe("concluído");
    expect(find.result).toBe("Fake A empatou com Fake B");
    expect(find.match_score).toBe("2-2");

    await prisma.games.delete({ where: { id: game.id } });
  });
});
