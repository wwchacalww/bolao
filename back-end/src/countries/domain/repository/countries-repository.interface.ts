import { Country } from "../entity/Country";

export interface CountriesRepositoryInterface {
  add(country: Country): Promise<void>;
}
