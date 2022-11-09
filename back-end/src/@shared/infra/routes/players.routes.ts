import { AddBetController } from "../../../bets/usecase/add-bet/add-bet.controller";
import { Router } from "express";
import { AddPlayerController } from "../../../players/usecase/add-player/add-player.controller";

const addPlayerController = new AddPlayerController();
const addBetController = new AddBetController();
const playersRoutes = Router();

playersRoutes.post("/add", addPlayerController.handle);
playersRoutes.post("/bet", addBetController.handle);

export { playersRoutes };
