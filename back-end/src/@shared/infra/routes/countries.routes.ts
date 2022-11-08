import { AddCountryController } from "../../../countries/usecase/add/add-country.controller";
import { Router } from "express";

const countriesRoutes = Router();
const addCountryController = new AddCountryController();

countriesRoutes.post("/add", addCountryController.handle);

export { countriesRoutes };
