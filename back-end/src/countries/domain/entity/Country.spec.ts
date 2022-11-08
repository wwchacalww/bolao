import { Country } from "./Country";

describe("Country test unit", () => {
  it("should create a new country", () => {
    const country = new Country({
      name: "Brasil",
      slug: "BRA",
      group: "GRUPO G",
      flag: "/src/assets/flags/Brasil.svg",
    });

    expect(country.name).toBe("Brasil");
    expect(country.slug).toBe("BRA");
    expect(country.group).toBe("GRUPO G");
    expect(country.flag).toBe("/src/assets/flags/Brasil.svg");
    expect(country.id).toBeDefined();
  });
});
