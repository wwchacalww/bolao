import { Router } from "express";
import { countriesRoutes } from "./countries.routes";
import { gamesRoutes } from "./games.routes";
import { playersRoutes } from "./players.routes";

const routes = Router();

routes.use("/countries", countriesRoutes);
routes.use("/games", gamesRoutes);
routes.use("/players", playersRoutes);

export { routes };
