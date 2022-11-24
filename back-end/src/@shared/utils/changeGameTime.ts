export function changeGameTime(played_at: string): Number {
  // Dom 20/11 13:00
  const gt = played_at.split(" ");
  const date = gt[1].split("/");
  const time = gt[2].split(":");
  const gameTime = new Date(
    2022,
    Number(date[1]) - 1,
    Number(date[0]),
    Number(time[0]),
    Number(time[1]),
    0
  );
  return gameTime.getTime();
}
