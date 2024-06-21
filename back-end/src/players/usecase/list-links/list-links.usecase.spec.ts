import { ListLinksUsecase } from "./list-links.usecase";

describe("List links", () => {
  test("List links", async () => {
    const usecase = new ListLinksUsecase();
    const links = await usecase.execute("semi");
    console.log(links);
  });
});
