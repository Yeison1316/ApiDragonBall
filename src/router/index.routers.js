import{ Router } from "express";
import routerPersonaje from "./personajes.routers.js";
import routerPlaneta from "./planetas.routers.js";
const routerIndex = Router();

routerIndex.use("/api",routerPersonaje)
routerIndex.use("/api",routerPlaneta)

routerIndex.get("/", (req, res)=>{
    return res.json({data: "Hola mundo"});
})
export default routerIndex;