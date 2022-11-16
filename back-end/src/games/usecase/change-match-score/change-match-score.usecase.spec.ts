import { prisma } from "../../../@shared/db/prisma.client";
import { AddBetUsecase } from "../../../bets/usecase/add-bet/add-bet.usecase";
import { Country } from "../../../countries/domain/entity/Country";
import { AddCountryUsecase } from "../../../countries/usecase/add/add-country.usecase";
import { Game } from "../../domain/entity/game";
import { Player } from "../../../players/domain/entities/player";
import { AddPlayerUsecase } from "../../../players/usecase/add-player/add-player.usecase";
import { FindByIdPlayerUsecase } from "../../../players/usecase/find-by-id/find-by-id.usecase";
import { AddGameUsecase } from "../add-game/add-game.usecase";
import { ChangeMatchScoreUsecase } from "./change-match-score.usecase";

describe("ChangeMatchScoreUsecase test", () => {
  it("should change match score and update score of players", async () => {
    const addPlayer = new AddPlayerUsecase();
    const findPlayer = new FindByIdPlayerUsecase();
    const addCountry = new AddCountryUsecase();
    const addGame = new AddGameUsecase();
    const addBet = new AddBetUsecase();
    const usecase = new ChangeMatchScoreUsecase();
    const players = [
      await addPlayer.execute("Fake Player One"),
      await addPlayer.execute("Fake Player Two"),
    ];

    const pEnts = [
      new Player({ id: players[0].id, name: "Fake Player One" }),
      new Player({ id: players[1].id, name: "Fake Player Two" }),
    ];

    const countries = [
      await addCountry.execute({
        name: "Country ONE",
        slug: "ONE",
        group: "FAKE",
        flag: "fake",
      }),
      await addCountry.execute({
        name: "Country TWO",
        slug: "TWO",
        group: "FAKE",
        flag: "fake",
      }),
    ];

    const first_country = new Country({
      id: countries[0].id,
      name: "Country ONE",
      slug: "ONE",
      group: "FAKE",
      flag: "fake",
    });

    const second_country = new Country({
      id: countries[1].id,
      name: "Country TWO",
      slug: "TWO",
      group: "FAKE",
      flag: "fake",
    });

    const game = await addGame.execute({
      first_country,
      second_country,
      played_at: "FAKE",
      group: "FAKE",
    });

    const gameEntity = new Game({
      id: game.id,
      played_at: "FAKE",
      first_country,
      second_country,
      group: "FAKE",
      match_score: game.match_score,
      status: game.status as any,
    });

    const bets = [
      await addBet.execute({
        game: gameEntity,
        player: pEnts[0],
        bet: "1-0",
      }),
      await addBet.execute({
        game: gameEntity,
        player: pEnts[0],
        bet: "3-1",
      }),
    ];

    expect(players[0].score).toEqual(0);
    expect(players[1].score).toEqual(0);

    gameEntity.match_score = "1-0";
    gameEntity.status = "em andamento";

    await usecase.execute({
      game_id: game.id,
      match_score: "1-0",
      status: "em andamento",
    });

    await new Promise((resolve) => setTimeout(resolve, 3000));

    let finds = [
      await findPlayer.execute(players[0].id),
      await findPlayer.execute(players[1].id),
    ];

    await prisma.bets.delete({ where: { id: bets[0].id } });
    await prisma.bets.delete({ where: { id: bets[1].id } });

    await prisma.games.delete({ where: { id: game.id } });

    await prisma.countries.delete({ where: { id: countries[0].id } });
    await prisma.countries.delete({ where: { id: countries[1].id } });

    await prisma.players.delete({ where: { id: players[0].id } });
    await prisma.players.delete({ where: { id: players[1].id } });

    expect(finds[0].score).toEqual(3);
    expect(finds[1].score).toEqual(1);
  });
});
