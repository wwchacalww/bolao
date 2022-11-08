import { Country } from "../../domain/entity/Country";
import { CountriesRepository } from "../../repository/prisma/countries.repository";

export class FindByIdCountryUsecase {
  async execute(id: string): Promise<Country> {
    const repository = new CountriesRepository();
    return await repository.findById(id);
  }
}
