import { Country } from "countries/domain/entity/Country";
import { v4 } from "uuid";

export type StatusType = "não jogado" | "em andamento" | "concluído";

export type GameProps = {
  id?: string;
  played_at: string;
  first_country: Country;
  second_country: Country;
  group: string;
  match_score?: string;
  status?: StatusType;
};

export class Game {
  private _id: string;
  private _played_at: string;
  private _first_country: Country;
  private _second_country: Country;
  private _group: string;
  private _match_score?: string;
  private _status?: StatusType;

  constructor({
    id,
    played_at,
    first_country,
    second_country,
    group,
    match_score,
    status,
  }: GameProps) {
    this._id = id || v4();
    this._played_at = played_at;
    this._first_country = first_country;
    this._second_country = second_country;
    this._group = group;
    this._status = status || "não jogado";
    this._match_score = match_score || "";
  }

  get id() {
    return this._id;
  }

  get played_at() {
    return this._played_at;
  }

  get first_country() {
    return this._first_country;
  }

  get second_country() {
    return this._second_country;
  }

  get group() {
    return this._group;
  }

  get match_score() {
    return this._match_score || "";
  }

  set match_score(prop: string) {
    this._match_score = prop;
  }

  get status() {
    return this._status || "não jogado";
  }

  set status(prop: StatusType) {
    this._status = prop;
  }

  result() {
    if (this.status === "não jogado" || this.status === "em andamento") {
      return null;
    }
    if (this.match_score === "") {
      return null;
    }

    const goal = this.match_score.split("-");
    if (parseInt(goal[0]) > parseInt(goal[1])) {
      return this.first_country.name + " venceu";
    }

    if (parseInt(goal[1]) > parseInt(goal[0])) {
      return this.second_country.name + " venceu";
    }

    if (parseInt(goal[0]) === parseInt(goal[1])) {
      return (
        this.first_country.name + " empatou com " + this.second_country.name
      );
    }
  }

  toJSON() {
    return {
      id: this._id,
      played_at: this._played_at,
      first_country: this._first_country,
      second_country: this._second_country,
      group: this._group,
      match_score: this._match_score,
      status: this.status,
      result: this.result(),
    };
  }
}
