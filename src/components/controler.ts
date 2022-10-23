/*import { PokemonModel } from '../models/pokemonModel.js';
import { DataPokemon } from '../service/dataPokemon.js';
import { PokeList } from "../components/pokemonList.js";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {iPokemon} from "../interface/ipokemon.js";

export class Controller {
  constructor(public start: number = 1) {
    const promises: Array<Promise<PokemonModel>> = [];
    this.start = start;
    for (let i = this.start; i < this.start + 10; i++) {
      promises.push(DataPokemon.getPoke(i));
    }
    Promise.all(promises).then((array) => {
      new PokeList('.list_container-list');
    });
  }
}
*/
