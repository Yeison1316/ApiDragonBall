import { Router } from "express";
import planetasController from "../controller/planetas.controller.js";

const routerPlaneta = Router();

routerPlaneta.get("/planeta", planetasController.getPlaneta)
routerPlaneta.get("/planeta/:id_planeta", planetasController.getPlanetaUnico)

export default routerPlaneta;