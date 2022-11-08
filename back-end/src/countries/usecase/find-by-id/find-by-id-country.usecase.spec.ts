import { CountriesRepository } from "../../repository/prisma/countries.repository";
import { prisma } from "../../../@shared/db/prisma.client";
import { Country } from "../../domain/entity/Country";
import { CountriesRepositoryInterface } from "../../domain/repository/countries-repository.interface";
import { FindByIdCountryUsecase } from "./find-by-id-country.usecase";

describe("Countries Repository test", () => {
  let repository: CountriesRepositoryInterface;

  beforeEach(async () => {
    repository = new CountriesRepository();
  });

  it("should find a country by id", async () => {
    const country = new Country({
      name: "Brasil",
      slug: "BRA",
      group: "GRUPO G",
      flag: "/src/assets/flags/Brasil.svg",
    });

    const usecase = new FindByIdCountryUsecase();
    await repository.add(country);

    const find = await usecase.execute(country.id as string);

    expect(find?.name).toBe("Brasil");
    expect(find?.slug).toBe("BRA");
    expect(find?.group).toBe("GRUPO G");
    expect(find?.flag).toBe("/src/assets/flags/Brasil.svg");
    expect(find?.id).toBe(country.id);

    await prisma.countries.delete({
      where: { id: country.id },
    });
  });

  it("should throw error when not found a country by id", async () => {
    const usecase = new FindByIdCountryUsecase();

    expect(async () => {
      await usecase.execute("fake-id");
    }).rejects.toThrow("Seleção não encontrada");
  });
});
