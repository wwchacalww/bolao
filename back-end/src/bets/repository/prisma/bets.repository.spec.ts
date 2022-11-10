import { prisma } from "../../../@shared/db/prisma.client";
import { Bet } from "../../domains/entity/bet";
import { BetsRepositoryInterface } from "../../domains/repository/bet-repository.interface";
import { Country } from "../../../countries/domain/entity/Country";
import { Game } from "../../../games/domain/entity/game";
import { Player } from "../../../players/domain/entities/player";
import { BetsRepository } from "./bets.repository";

describe("Bets repository test", () => {
  let repository: BetsRepositoryInterface;
  beforeEach(async () => {
    repository = new BetsRepository();
  });

  it("should create a new bet", async () => {
    const first_country = new Country({
      id: "e2af9485-c1d8-4f99-8d80-eb24ac09a514",
      name: "Equador",
      slug: "EQU",
      group: "Grupo A",
      flag: "flag",
    });

    const second_country = new Country({
      id: "470c409b-ab05-495d-9024-2bb4ac83fb5f",
      name: "Catar",
      slug: "CAT",
      group: "Grupo A",
      flag: "flag",
    });

    const game = new Game({
      id: "b114920c-cf0e-42bb-9b9c-0b7ae9172df9",
      played_at: "Dom 20/11 13:00",
      first_country,
      second_country,
      group: "Grupo A",
    });

    const player = new Player({
      id: "97ff1dfc-0691-4d2a-9491-5c2e8cecb796",
      name: "Júnior",
    });

    const bet = new Bet({
      player,
      game,
      bet: "1-2",
    });

    await repository.add(bet);
    const find = await prisma.bets.findFirst({ where: { id: bet.id } });

    expect(bet.id).toBe(find?.id);
    expect(bet.player.id).toBe(find?.player_id);
    expect(find?.bet).toBe("1-2");

    await prisma.bets.delete({ where: { id: bet.id } });
  });

  it("should create a many new bets", async () => {
    const first_country = new Country({
      id: "e2af9485-c1d8-4f99-8d80-eb24ac09a514",
      name: "Equador",
      slug: "EQU",
      group: "Grupo A",
      flag: "flag",
    });

    const second_country = new Country({
      id: "470c409b-ab05-495d-9024-2bb4ac83fb5f",
      name: "Catar",
      slug: "CAT",
      group: "Grupo A",
      flag: "flag",
    });

    const game = new Game({
      id: "b114920c-cf0e-42bb-9b9c-0b7ae9172df9",
      played_at: "Dom 20/11 13:00",
      first_country,
      second_country,
      group: "Grupo A",
    });

    const player = new Player({
      id: "97ff1dfc-0691-4d2a-9491-5c2e8cecb796",
      name: "Júnior",
    });

    const bet = new Bet({
      player,
      game,
      bet: "1-2",
    });

    const aposta = new Bet({
      player,
      game,
      bet: "3-2",
    });

    await repository.addMassBets({
      player_id: "97ff1dfc-0691-4d2a-9491-5c2e8cecb796",
      bets: [
        {
          game_id: "b114920c-cf0e-42bb-9b9c-0b7ae9172df9",
          bet: "1-2",
        },
        {
          game_id: "b114920c-cf0e-42bb-9b9c-0b7ae9172df9",
          bet: "1-2",
        },
      ],
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const findAposta = await prisma.bets.findFirst({
      where: { id: aposta.id },
    });
    const findOutraAposta = await prisma.bets.findFirst({
      where: { id: bet.id },
    });

    expect(aposta.id).toBe(findAposta.id);
    expect(aposta.player.id).toBe(findAposta?.player_id);
    expect(findAposta?.bet).toBe("3-2");

    expect(bet.id).toBe(findOutraAposta?.id);
    expect(bet.player.id).toBe(findOutraAposta?.player_id);
    expect(findOutraAposta?.bet).toBe("1-2");

    await prisma.bets.delete({ where: { id: bet.id } });
    await prisma.bets.delete({ where: { id: aposta.id } });
  });
});
