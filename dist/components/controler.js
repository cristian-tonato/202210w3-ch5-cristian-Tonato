import { DataPokemon } from '../service/dataPokemon.js';
import { PokeList } from "../components/pokemonList.js";
export class Controller {
    constructor(start = 1) {
        this.start = start;
        const promises = [];
        this.start = start;
        for (let i = this.start; i < this.start + 10; i++) {
            promises.push(DataPokemon.getPoke(i));
        }
        Promise.all(promises).then((array) => {
            new PokeList('.list_container-list');
        });
    }
}
