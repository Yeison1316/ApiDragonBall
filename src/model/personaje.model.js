import { sequelize } from "../services/db.service.js";


export const getPersonajeModel = async ()=>{
    const data = await sequelize.query("SELECT * FROM CHARACTERS ORDER BY ID ASC");
    return data[0];
}

export const getPersonajeUnicoModel = async (id) =>{
    var res = {};
    const data = await sequelize.query("SELECT * FROM CHARACTERS WHERE ID = :I_ID",{
        replacements :{
            I_ID : id
        }
    });
    const data2 = await sequelize.query("SELECT * FROM TRANSFORMATIONS WHERE CHARACTER_ID = :I_ID",{
        replacements :{
            I_ID : id
        }
    });
    res = {...data[0][0],transformations : data2[0]};
    console.log(res);
    return res;
}