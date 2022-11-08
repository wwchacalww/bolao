import { prisma } from "../../@shared/db/prisma.client";
import { AddPlayerUsecase } from "./add-player.usecase";

describe("AddPlayerUsecase test", () => {
  it("should create a new player", async () => {
    const usecase = new AddPlayerUsecase();
    const player = await usecase.execute("Chacal");
    const find = await prisma.players.findFirst({ where: { id: player.id } });

    expect(player.id).toBe(find?.id);
    expect(player.name).toBe(find?.name);
    expect(player.score).toBe(find?.score);

    await prisma.players.delete({ where: { id: player.id } });
  });
});
