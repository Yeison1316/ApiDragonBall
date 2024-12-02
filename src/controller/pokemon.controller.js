import { getPokemonModel, getPokemonUnicoModel } from "../model/pokemon.model.js";


export const getPokemon = async (req, res) => {
    try {
        const data = await getPokemonModel();

        const results = data.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            abilities: pokemon.abilities, 
            stats: pokemon.stats.map(stat => ({
                statName: stat.statName,
                baseStat: stat.baseStat,
            })),
        }));

        return res.json({
            time: Date.now(),
            status: 200,
            message: "All pokemons",
            results,
        });
    } catch (error) {
        return res.status(500).json({
            time: Date.now(),
            status: 500,
            message: error.message,
        });
    }
};
export const getPokemonUnico = async (req, res) => {
    const { id } = req.params;
    console.log('ID = '+id);
    try {
        const data = await getPokemonUnicoModel(id);

        if (!data) {
            return res.status(404).json({
                time: Date.now(),
                status: 404,
                message: "Pokemon not found",
            });
        }
        return res.json({
            time: Date.now(),
            status: 200,
            message: "Pokemon fetched successfully",
            result: data,
        });
    } catch (error) {
        return res.status(500).json({
            time: Date.now(),
            status: 500,
            message: error.message,
        });
    }
};


export default {
    getPokemon,
    getPokemonUnico
}