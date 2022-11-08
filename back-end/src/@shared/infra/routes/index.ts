import { Router } from "express";
import { countriesRoutes } from "./countries.routes";
import { gamesRoutes } from "./games.routes";

const routes = Router();

routes.use("/countries", countriesRoutes);
routes.use("/games", gamesRoutes);

export { routes };
