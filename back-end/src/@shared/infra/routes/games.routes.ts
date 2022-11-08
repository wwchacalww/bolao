import { Router } from "express";
import { AddGameController } from "../../../games/usecase/add-game/add-game.controller";

const addGameController = new AddGameController();
const gamesRoutes = Router();

gamesRoutes.post("/add", addGameController.handle);

export { gamesRoutes };
