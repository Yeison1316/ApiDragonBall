import { Router } from "express";
import { getPersonaje } from "../controller/personajes.controller.js";
import { getPersonajeUnico } from "../controller/personajes.controller.js";

const routerPersonaje = Router();

routerPersonaje.get("/personaje", getPersonaje)
routerPersonaje.get("/personaje/unico", getPersonajeUnico)

export default routerPersonaje;