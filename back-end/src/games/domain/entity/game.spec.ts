import { Country } from "../../../countries/domain/entity/Country";
import { Game } from "./game";

describe("Game entity test", () => {
  it("should create a new game", () => {
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
    });

    expect(game.id).toBeDefined();
    expect(game.played_at).toBe("Dom 20/11 13:00");
    expect(game.first_country).toStrictEqual(first_country);
    expect(game.second_country).toStrictEqual(second_country);
    expect(game.status).toBe("não jogado");
    expect(game.result()).toBeNull();
    expect(game.match_score).toBe("");
  });

  it("should change match_score and status", () => {
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
    });

    expect(game.match_score).toBe("");
    expect(game.status).toBe("não jogado");

    game.match_score = "1-0";
    game.status = "em andamento";

    expect(game.match_score).toBe("1-0");
    expect(game.status).toBe("em andamento");
    expect(game.result()).toBeNull();

    game.match_score = "1-2";
    game.status = "concluído";
    expect(game.result()).toBe("Equador venceu");
  });
});
