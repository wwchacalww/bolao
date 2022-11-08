import { prisma } from "../../../@shared/db/prisma.client";
import { CountriesRepositoryInterface } from "countries/domain/repository/countries-repository.interface";
import { Country } from "../../domain/entity/Country";

export class CountriesRepository implements CountriesRepositoryInterface {
  async add(country: Country): Promise<void> {
    await prisma.countries.create({
      data: country.toJSON(),
    });
  }
}
