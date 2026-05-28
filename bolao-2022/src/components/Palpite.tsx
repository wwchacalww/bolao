import { X } from "phosphor-react";
import React, { useState } from "react";

type palpiteProps = {
  game: number;
  date: string;
  first_slug: string;
  first_flag: string;
  first_country: number;
  second_slug: string;
  second_flag: string;
  second_country: number;
  group: string;
  first_get_value: (
    e: any,
    group_number: number,
    game: number,
    team: "first" | "second",
    setFirstValue: React.Dispatch<React.SetStateAction<string>>
  ) => void;
};

export function Palpite({
  game,
  date,
  group,
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

  let group_number = 0;

  switch (group) {
    case "Grupo A":
      group_number = 0;
      break;

    case "Grupo B":
      group_number = 1;
      break;

    case "Grupo C":
      group_number = 2;
      break;

    case "Grupo D":
      group_number = 3;
      break;

    case "Grupo E":
      group_number = 4;
      break;

    case "Grupo F":
      group_number = 5;
      break;

    case "Grupo G":
      group_number = 6;
      break;

    case "Grupo H":
      group_number = 7;
      break;
    case "Grupo I":
      group_number = 8;
      break;

    case "Grupo J":
      group_number = 9;
      break;

    case "Grupo K":
      group_number = 10;
      break;

    case "Grupo L":
      group_number = 11;
      break;
  }

  return (
    <div className="flex flex-col items-center mb-2">
      <span className="text-gray-400">{date}</span>
      <div className="flex flex-row items-center justify-center gap-2 mt-2 w-80 h-10 rounded-lg bg-gray-500">
        <strong className="font-bold text-white mr-2">{first_slug}</strong>
        <img src={first_flag} className="w-6 h-4" alt="" />
        <input
          type="number"
          className="w-6 h-6 rounded-md font-bold text-center"
          onChange={(evt) =>
            first_get_value(
              evt.target,
              group_number,
              game,
              "first",
              setFirstValue
            )
          }
          value={firstValue}
        />
        <X size={30} className="text-gray-700" />
        <input
          type="number"
          className="w-6 h-6 rounded-md font-bold text-center"
          onChange={(evt) =>
            first_get_value(
              evt.target,
              group_number,
              game,
              "second",
              setSecondValue
            )
          }
          value={secondValue}
        />
        <img src={second_flag} className="w-6 h-4" alt="" />
        <strong className="font-bold text-white ml-2">{second_slug}</strong>
      </div>
    </div>
  );
}
