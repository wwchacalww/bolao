import { prisma } from "../../../@shared/db/prisma.client";
import { Country } from "../../domain/entity/Country";
import { CountriesRepositoryInterface } from "../../domain/repository/countries-repository.interface";
import { CountriesRepository } from "./countries.repository";

describe("Countries Repository test", () => {
  let repository: CountriesRepositoryInterface;

  beforeEach(async () => {
    repository = new CountriesRepository();
  });
  it("should create a new country", async () => {
    const country = new Country({
      name: "Brasil",
      slug: "BRA",
      group: "GRUPO G",
      flag: "/src/assets/flags/Brasil.svg",
    });

    await repository.add(country);

    const find = await prisma.countries.findFirst({
      where: {
        id: country.id,
      },
    });

    expect(find?.name).toBe("Brasil");
    expect(find?.slug).toBe("BRA");
    expect(find?.group).toBe("GRUPO G");
    expect(find?.flag).toBe("/src/assets/flags/Brasil.svg");
    expect(find?.id).toBe(country.id);

    await prisma.countries.delete({
      where: { id: country.id },
    });
  });
});
