import { sequelize } from "../services/db.service.js";



export const getPokemonModel = async () =>{
    const data = await sequelize.query("SELECT p.id,p.name, p.image, json_agg(DISTINCT a.ability_name) AS abilities, json_agg(DISTINCT jsonb_build_object('statName', s.stat_name,'baseStat', s.base_stat)) AS stats FROM Pokemon p LEFT JOIN Ability a ON p.id = a.pokemon_id LEFT JOIN Stats s ON p.id = s.pokemon_id GROUP BY p.id, p.name, p.image ORDER BY p.id ASC");
    return data[0];
}

export const getPokemonUnicoModel = async (id) => {
    console.log(id);
    const data = await sequelize.query(
        `
        SELECT 
            p.id, 
            p.name, 
            p.image, 
            JSON_AGG(
                JSON_BUILD_OBJECT('abilityName', a.ability_name)
            ) AS abilities,
            JSON_AGG(
                JSON_BUILD_OBJECT('statName', s.stat_name, 'baseStat', s.base_stat)
            ) AS stats
        FROM POKEMON p
        LEFT JOIN ABILITIES a ON p.id = a.pokemon_id
        LEFT JOIN STATS s ON p.id = s.pokemon_id
        WHERE p.id = :ID_POKEMON
        GROUP BY p.id, p.name, p.image
        `,
        {
            replacements: {
                ID_POKEMON: id,
            },
        }
    );
    return data[0];
};

