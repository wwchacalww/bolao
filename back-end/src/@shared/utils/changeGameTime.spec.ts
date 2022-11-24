import { changeGameTime } from "./changeGameTime";

describe("changeGameTime unit test", () => {
  it("should converte time string on timestamp", () => {
    const played_at = "Dom 20/11 13:00";
    const gameTime = changeGameTime(played_at);
    expect(gameTime).toBe(1671552000000);
  });
});
