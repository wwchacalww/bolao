import { parseCookies } from "nookies";
import { X } from "phosphor-react";
import { useState } from "react";
import { api } from "../services/api";
type GameProps = {
  id: string;
  played_at: string;
  first_slug: string;
  first_flag: string;
  second_slug: string;
  second_flag: string;
  match_score: string;
  result: string;
  status: string;
};

type InputChangeScore = {
  game_id: string;
  match_score: string;
  status: string;
};

export function GameProccess({
  id,
  played_at,
  first_slug,
  first_flag,
  second_slug,
  second_flag,
  match_score,
  result,
  status,
}: GameProps) {
  const [ftScore, setFtScore] = useState("0");
  const [scScore, setScScore] = useState("0");
  const [statusProps, setStatusProps] = useState(status);

  function handleChangeScore() {
    const data: InputChangeScore = {
      game_id: id,
      match_score: `${ftScore}-${scScore}`,
      status: statusProps,
    };
    const { "bolao.token": token } = parseCookies();

    api
      .put("games/change-score", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="flex flex-col items-center my-2">
      <span className="text-xs text-gray-400">{played_at}</span>
      <div
        className={`flex flex-col items-center justify-center gap-2 mt-2 w-80 h-20 rounded-lg bg-gray-500`}
      >
        <div className={`flex flex-row items-center justify-center gap-2 mt-2`}>
          <strong className="font-bold text-white mr-2">{first_slug}</strong>
          <img src={first_flag} className="w-6 h-4" alt="" />
          <input
            type="number"
            className="w-6 h-6 rounded-md font-bold text-center"
            onChange={(evt) => setFtScore(evt.target.value)}
          />
          <X size={30} className="text-gray-700" />
          <input
            type="number"
            className="w-6 h-6 rounded-md font-bold text-center"
            onChange={(evt) => setScScore(evt.target.value)}
          />
          <img src={second_flag} className="w-6 h-4" alt="" />
          <strong className="font-bold text-white ml-2">{second_slug}</strong>
        </div>

        <div className="flex flex-row gap-4">
          <select
            onChange={(evt) => setStatusProps(evt.target.value)}
            className="h-6 w-36 rounded-md text-xs border-solid border-1 border-green-800 bg-gray-300 p-1 text-center text-gray-700"
          >
            <option value="não jogado">Não jogado</option>
            <option value="em andamento">em andamento</option>
            <option value="concluído">concluído</option>
          </select>

          <button
            onClick={() => handleChangeScore()}
            className="h-6 w-16 bg-green-500 text-xs text-black font-bold rounded-lg disabled:bg-green-300"
          >
            Lançar
          </button>
        </div>
      </div>
    </div>
  );
}
