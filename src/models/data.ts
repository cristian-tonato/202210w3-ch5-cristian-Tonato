import {PokemonModel} from "../models/pokemonModel.js"

const pokemons = [
  new PokemonModel('1', 'Pikachu', { front_default: 'slsl' }),
  new PokemonModel('2', 'Bulbasur', { front_default: 'dfdfdf' }),
  new PokemonModel('3', 'Charizard', { front_default: 'dfdfdf' }),
];
export const POKEMOS: Array<PokemonModel> =pokemons
