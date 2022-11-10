import { X } from "phosphor-react";
import React, { useState } from "react";

type palpiteProps = {
  game: string;
  date: string;
  first_slug: string;
  first_flag: string;
  first_country: number;
  second_slug: string;
  second_flag: string;
  second_country: number;
  first_get_value: (
    e: any,
    game: string,
    team: "first" | "second",
    setFirstValue: React.Dispatch<React.SetStateAction<string>>
  ) => any;
};

export function Palpite({
  game,
  date,
  first_slug,
  first_flag,
  first_country,
  second_slug,
  second_flag,
  second_country,
  first_get_value,
}: palpiteProps) {
  const [firstValue, setFirstValue] = useState(
    first_country === 99 ? "" : String(first_country)
  );
  const [secondValue, setSecondValue] = useState(
    second_country === 99 ? "" : String(second_country)
  );

  return (
    <div className="flex flex-col items-center mb-2">
      <span className="text-gray-400">{date}</span>
      <div className="flex flex-row items-center justify-center gap-2 mt-2 w-80 h-10 rounded-lg bg-gray-500">
        <strong className="font-bold text-white mr-2">{first_slug}</strong>
        <img src={first_flag} className="w-6 h-4" alt="" />
        <input
          type="text"
          className="w-6 h-6 rounded-md font-bold text-center"
          onChange={(evt) =>
            first_get_value(evt.target, game, "first", setFirstValue)
          }
          value={firstValue}
        />
        <X size={30} className="text-gray-700" />
        <input
          type="text"
          className="w-6 h-6 rounded-md font-bold text-center"
          onChange={(evt) =>
            first_get_value(evt.target, game, "second", setSecondValue)
          }
          value={secondValue}
        />
        <img src={second_flag} className="w-6 h-4" alt="" />
        <strong className="font-bold text-white ml-2">{second_slug}</strong>
      </div>
    </div>
  );
}
