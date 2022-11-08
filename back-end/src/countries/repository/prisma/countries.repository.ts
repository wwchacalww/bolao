import { prisma } from "../../../@shared/db/prisma.client";
import { CountriesRepositoryInterface } from "countries/domain/repository/countries-repository.interface";
import { Country } from "../../domain/entity/Country";

export class CountriesRepository implements CountriesRepositoryInterface {
  async add(country: Country): Promise<void> {
    await prisma.countries.create({
      data: country.toJSON(),
    });
  }

  async findById(id: string): Promise<Country> {
    const find = await prisma.countries.findFirst({ where: { id } });
    if (find === null) {
      throw new Error("Seleção não encontrada");
    }
    const country = new Country({
      id: find.id,
      name: find.name,
      slug: find.slug,
      group: find.group,
      flag: find.flag,
    });

    return country;
  }
}
