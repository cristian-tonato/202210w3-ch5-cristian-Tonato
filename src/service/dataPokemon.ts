import { iPokemon } from "../interface/ipokemon";
import {Component } from "../components/component.js";


export class DataPokemon{
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
