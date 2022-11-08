import { v4 } from "uuid";

export type PlayerProps = {
  id?: string;
  name: string;
  score?: number;
};

export class Player {
  private _id: string;
  private _name: string;
  private _score: number;

  constructor({ id, name, score }: PlayerProps) {
    this._id = id || v4();
    this._name = name;
    this._score = score || 0;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get score() {
    return this._score;
  }

  set score(points: number) {
    this._score = points;
  }

  toJSON() {
    return {
      id: this._id,
      name: this._name,
      score: this._score,
    };
  }
}
