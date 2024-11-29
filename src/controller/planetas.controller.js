import { getPlanetaModel,getPlanetaUnicoModel } from "../model/planeta.model.js"
export const getPlaneta = async (req, res)=> {
    try {
        const data = await getPlanetaModel();
        return res.json({data: {
            time : Date.now(),
            status: 200,
            message: "All planets"},items: data})    
    }catch (error) {
        return res.json({data: {
            time : Date.now(),
            status: 500,
            message: error.message
        }})
    }
   
}

export async function getPlanetaUnico (req, res) {
    try {
        let { id_planeta } = req.params;
        const data = await getPlanetaUnicoModel(id_planeta);
        return res.json({data: {
            time : Date.now(),
            status: 200,
            message: "planet "+id_planeta },items: data})
    } catch (error) {
        return res.json({data: {
            time : Date.now(),
            status: 500,
            message: error.message
        }})
    }

}

export default {
    getPlaneta,
    getPlanetaUnico
}