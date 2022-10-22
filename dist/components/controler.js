import { DataPokemon } from '../service/dataPokemon.js';
import { PokemonList } from "../components/pokemonList.js";
export class Controller {
    constructor(start = 1) {
        this.start = start;
        const promises = [];
        this.start = start;
        for (let i = this.start; i < this.start + 10; i++) {
            promises.push(DataPokemon.getPokemon(i));
        }
        Promise.all(promises).then((array) => {
            new PokemonList('.list_container-list', array);
        });
    }
}
