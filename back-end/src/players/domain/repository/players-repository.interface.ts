import { Player } from "../entities/player";

export interface PlayersRepositoryInterface {
  add(player: Player): Promise<void>;
  findById(id: string): Promise<Player>;
  all(): Promise<Player[]>;
}
