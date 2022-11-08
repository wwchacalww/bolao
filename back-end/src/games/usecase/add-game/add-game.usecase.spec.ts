import { prisma } from "../../../@shared/db/prisma.client";
import { Country } from "../../../countries/domain/entity/Country";
import { AddGameUsecase } from "./add-game.usecase";

describe("AddGameUsacase test", () => {
  it("should create a game", async () => {
    const usecase = new AddGameUsecase();
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

    const result = await usecase.execute({
      played_at: "Dom 20/11 13:00",
      first_country,
      second_country,
    });
    const find = await prisma.games.findFirst({ where: { id: result.id } });

    expect(find?.id).toBe(result.id);
    expect(find?.played_at).toBe("Dom 20/11 13:00");
    expect(find?.first_country_id).toBe(first_country.id);
    expect(find?.second_country_id).toBe(second_country.id);
    expect(find?.status).toBe("não jogado");
    expect(find?.result).toBeNull();
    expect(find?.match_score).toBeNull();

    await prisma.games.delete({ where: { id: result.id } });
  });
});
