import { Country } from "../../domain/entity/Country";
import { CountriesRepository } from "../../repository/prisma/countries.repository";

export type InputAddCountryDTO = {
  name: string;
  slug: string;
  group: string;
  flag: string;
};

export type OutputAddCountryDTO = {
  id?: string;
  name: string;
  slug: string;
  group: string;
  flag: string;
};
export class AddCountryUsecase {
  async execute({
    name,
    slug,
    group,
    flag,
  }: InputAddCountryDTO): Promise<OutputAddCountryDTO> {
    const repository = new CountriesRepository();
    const country = new Country({
      name,
      slug,
      group,
      flag,
    });
    await repository.add(country);

    return country.toJSON();
  }
}
