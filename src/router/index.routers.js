import{ Router } from "express";
import routerPersonaje from "./personajes.routers.js";
import routerPlaneta from "./planetas.routers.js";
import routerPokemon from "./pokemon.routers.js";
const routerIndex = Router();

routerIndex.use("/api",routerPersonaje)
routerIndex.use("/api",routerPlaneta)
routerIndex.use("/api",routerPokemon)

routerIndex.get("/", (req, res)=>{
    return res.json({
        data: {
            time: Date.now(),
            status: 200,
            message: "Welcome to the API of Dragon Ball",
            by : "Yeison Mestra",
            routes :{
                personajes : "/api/personaje",
                personajesUnico : "/api/personaje/unico?id=",
                planetas : "/api/planeta",
                planetasUnico : "/api/planeta/unico?id=",
                pokemon : "/api/pokemon",
                pokemonUnico : "/api/pokemon/unico?id="
            }
        }
    });
})
export default routerIndex;