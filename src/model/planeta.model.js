import { sequelize } from "../services/db.service.js";


export const getPlanetaModel = async ()=>{
    const data = await sequelize.query("SELECT * FROM PLANETS ORDER BY ID ASC");
    return data[0];
}

export const getPlanetaUnicoModel = async (id) =>{
    const data = await sequelize.query("SELECT * FROM PLANETS WHERE ID = :ID",{
        replacements :{
            ID : id
        }
    })
    return data[0];
}