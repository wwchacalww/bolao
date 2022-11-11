import { AddBetController } from "../../../bets/usecase/add-bet/add-bet.controller";
import { Router } from "express";
import { AddPlayerController } from "../../../players/usecase/add-player/add-player.controller";
import { FindByIdPlayerController } from "../../../players/usecase/find-by-id/find-by-id-player.controller";
import { AddMassBetController } from "../../../bets/usecase/add-mass-bet/add-mass-bet-controller";

const addPlayerController = new AddPlayerController();
const addBetController = new AddBetController();
const findByIdController = new FindByIdPlayerController();
const addMassBetController = new AddMassBetController();
const playersRoutes = Router();

playersRoutes.post("/add", addPlayerController.handle);
playersRoutes.post("/bet", addBetController.handle);
playersRoutes.get("/:player_id", findByIdController.handle);
playersRoutes.post("/bets", addMassBetController.handle);

export { playersRoutes };
