import { Country } from "../entity/Country";

export function findCountryById(countries: Country[], id: string) {
  const country = countries.filter((ctry) => ctry.id === id);
  return country[0];
}
