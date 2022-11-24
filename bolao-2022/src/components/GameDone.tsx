type GameDoneProps = {
  played_at: string;
  first_slug: string;
  first_flag: string;
  second_slug: string;
  second_flag: string;
  match_score: string;
  result: string;
  status: string;
};
export function GameDone({
  played_at,
  first_slug,
  first_flag,
  second_slug,
  second_flag,
  match_score,
  result,
}: GameDoneProps) {
  const res = match_score.split("-");
  return (
    <div className="flex flex-col items-center my-2">
      <span className="text-xs text-gray-400">{played_at}</span>
      <div
        className={`flex flex-col items-center justify-center gap-2 mt-2 w-80 h-16 rounded-lg bg-green-700`}
      >
        <div className={`flex flex-row items-center justify-center gap-2 mt-2`}>
          <strong className="font-bold text-white mr-2">{first_slug}</strong>
          <img src={first_flag} className="w-6 h-4" alt="" />
          <div className="w-6 h-6 rounded-md bg-white text-center border border-black">
            <strong className=" font-bold">{res[0]}</strong>
          </div>

          <span className="text-white text-xs">-</span>
          <div className="w-6 h-6 rounded-md bg-white text-center border border-black">
            <strong className=" font-bold">{res[1]}</strong>
          </div>
          <img src={second_flag} className="w-6 h-4" alt="" />
          <strong className="font-bold text-white ml-2">{second_slug}</strong>
        </div>

        <span className="text-xs text-white">Jogo concluído, {result}</span>
      </div>
    </div>
  );
}
