import { Player } from "./player";

describe("Player entity unit test", () => {
  it("should create a new player", () => {
    const player = new Player({
      name: "Júnior",
    });

    expect(player.id).toBeDefined();
    expect(player.name).toBe("Júnior");
    expect(player.score).toBe(0);
  });
});
