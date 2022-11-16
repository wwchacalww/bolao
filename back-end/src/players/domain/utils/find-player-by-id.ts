import { Player } from "../entities/player";

export function findPlayerById(players: Player[], id: string) {
  const country = players.filter((play) => play.id === id);
  return country[0];
}
