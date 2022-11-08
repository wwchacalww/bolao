import { Router } from "express";
import { AddPlayerController } from "../../../players/usecase/add-player.controller";

const addPlayerController = new AddPlayerController();
const playersRoutes = Router();

playersRoutes.post("/add", addPlayerController.handle);

export { playersRoutes };
