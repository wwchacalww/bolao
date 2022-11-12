import { CaretDown } from "phosphor-react";
import { Link } from "react-router-dom";

type playerProps = {
  id: string;
  name: string;
  score: number;
  rank: number;
};
export function Player({ id, name, score, rank }: playerProps) {
  return (
    <div className="flex flex-col w-80 py-2 rounded-lg items-center justify-center bg-gray-900">
      <div className="flex flex-row w-full px-4 items-center">
        <img
          className="h-12 w-12 rounded-full"
          src={`/src/assets/fotos/${id}.jpg`}
        />

        <div className="flex flex-col pl-4 gap-1">
          <strong className="text-white font-bold text-base">{name}</strong>
          <span className="font-semibold text-gray-400 text-sm">
            {score} pontos
          </span>
        </div>

        <div className="flex justify-end w-28 text-3xl font-bold">
          <strong className="text-white"># {rank}º</strong>
        </div>
        <div className="flex justify-center items-center w-10 h-10 ml-2">
          <Link to={`/membro/${id}`}>
            <CaretDown size={32} className="text-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
