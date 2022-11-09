import { FindByIdGameUsecase } from "./find-by-id-game.usecase";

describe("FindByIdGameUsecase test", () => {
  it("should find a game", async () => {
    const usecase = new FindByIdGameUsecase();

    const find = await usecase.execute("b114920c-cf0e-42bb-9b9c-0b7ae9172df9");

    expect(find.id).toBe("b114920c-cf0e-42bb-9b9c-0b7ae9172df9");
    expect(find.played_at).toBe("Dom 20/11 13:00");
    expect(find.first_country.slug).toBe("EQU");
    expect(find.second_country.slug).toBe("CAT");
    expect(find.status).toBe("não jogado");
    expect(find.match_score).toBe("");
  });
});
