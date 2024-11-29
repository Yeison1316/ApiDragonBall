import { getPersonajeModel,getPersonajeUnicoModel } from "../model/personaje.model.js"


export const getPersonaje = async (req, res)=> {
    try {
        let resultado = await getPersonajeModel()
        return res.json({data: {
            time : Date.now(),
            status: 200,
            message: "All characters",
        }, items: resultado})
    } catch (error) {
        return res.json({data: {
            time : Date.now(),
            status: 500,
            message: error.message
        }});
    }
}

export async function getPersonajeUnico (req, res) {
    let { id } = req.query;
    let data = await getPersonajeUnicoModel(id);
    return res.json(data);
}