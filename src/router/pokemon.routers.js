import { Router } from "express";
import pokemonController from "../controller/pokemon.controller.js";

const routerPokemon = Router();

routerPokemon.get("/pokemon", pokemonController.getPokemon);
routerPokemon.get("/pokemon/unico", pokemonController.getPokemonUnico);

export default routerPokemon;