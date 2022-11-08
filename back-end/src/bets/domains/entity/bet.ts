import { Game } from "../../../games/domain/entity/game";
import { Player } from "../../../players/domain/entities/player";
import { v4 } from "uuid";

export type BetProps = {
  id?: string;
  player: Player;
  game: Game;
  bet: string;
};

export class Bet {
  private _id: string;
  private _player: Player;
  private _game: Game;
  private _bet: string;
  private _result: number;

  constructor({ id, player, game, bet }: BetProps) {
    this._id = id || v4();
    this._player = player;
    this._game = game;
    this._bet = bet;
    this._result = 0;
  }

  get id() {
    return this._id;
  }

  get player() {
    return this._player;
  }

  get game() {
    return this._game;
  }

  get bet() {
    return this._bet;
  }

  set bet(prop: string) {
    this._bet = prop;
  }

  get result() {
    return this._result;
  }

  set result(res: number) {
    this._result = res;
  }

  toJSON() {
    return {
      id: this._id,
      player: this._player.toJSON(),
      game: this._game.toJSON(),
      bet: this._bet,
      result: this._result,
    };
  }
}
