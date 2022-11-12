type partidaProps = {
  played_at: string;
  first_slug: string;
  first_flag: string;
  second_slug: string;
  second_flag: string;
  bet: string;
  result?: string;
};

function checkResult(result: string) {
  const r = result.split("-");
  if (parseInt(r[0]) === parseInt(r[1])) {
    return 0;
  }
  if (parseInt(r[0]) > parseInt(r[1])) {
    return 1;
  }
  if (parseInt(r[0]) < parseInt(r[1])) {
    return 2;
  }
}

export function Partida(props: partidaProps) {
  const {
    played_at,
    first_flag,
    first_slug,
    second_flag,
    second_slug,
    bet,
    result = "",
  } = props;

  const b = bet.split("-");

  let bg = "bg-gray-700";
  if (bet === result) {
    bg = "bg-green-900";
  }

  if (result !== "" && bet !== result) {
    if (checkResult(result) === checkResult(bet)) {
      bg = "bg-orange-700";
    } else {
      bg = "bg-red-700";
    }
  }

  return (
    <div className="flex flex-col items-center my-2">
      <span className="text-xs text-gray-400">{played_at}</span>

      <div
        className={`flex flex-row items-center justify-center gap-2 mt-2 w-72 h-10 rounded-lg ${bg}`}
      >
        <strong className="font-bold text-white mr-2">{first_slug}</strong>
        <img src={first_flag} className="w-6 h-4" alt="" />
        <div className="w-6 h-6 rounded-md bg-white text-center border border-black">
          <strong className=" font-bold">{b[0]}</strong>
        </div>

        <span className="text-white text-xs">{result}</span>
        <div className="w-6 h-6 rounded-md bg-white text-center border border-black">
          <strong className=" font-bold">{b[1]}</strong>
        </div>
        <img src={second_flag} className="w-6 h-4" alt="" />
        <strong className="font-bold text-white ml-2">{second_slug}</strong>
      </div>
    </div>
  );
}
