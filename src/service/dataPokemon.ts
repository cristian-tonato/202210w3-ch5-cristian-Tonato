import { iPokemon } from "../interface/ipokemon";
import {Component } from "../components/component.js";


export class DataPokemon{
  static getPokemon(i: number): Promise<import("../models/pokemonModel").PokemonModel> {
    throw new Error('Method not implemented.');
  }
  url: string;
  constructor(){
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }
  getPokemon(id: number): Promise<iPokemon>{
    return fetch(this.url + `${id}`).then((resp)=>{
      return resp.json();
    })
  }
}
