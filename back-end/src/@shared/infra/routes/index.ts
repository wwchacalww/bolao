import { Router } from "express";
import { countriesRoutes } from "./countries.routes";

const routes = Router();

routes.use("/countries", countriesRoutes);

export { routes };
