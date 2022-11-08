import { Country } from "../../../countries/domain/entity/Country";
import { Game } from "../../../games/domain/entity/game";
import { Player } from "../../../players/domain/entities/player";
import { Bet } from "./bet";

describe("Bet Entity Unit Test", () => {
  it("should create a new bet", () => {
    const first_country = new Country({
      name: "Equador",
      slug: "EQU",
      group: "Grupo A",
      flag: "flag",
    });

    const second_country = new Country({
      name: "Catar",
      slug: "CAT",
      group: "Grupo A",
      flag: "flag",
    });

    const game = new Game({
      played_at: "Dom 20/11 13:00",
      first_country,
      second_country,
    });

    const player = new Player({ name: "Chacal" });

    const bet = new Bet({
      player,
      game,
      bet: "1-2",
    });

    expect(bet.id).toBeDefined();
    expect(bet.player).toStrictEqual(player);
    expect(bet.bet).toBe("1-2");
  });
});
