//import { Component } from '../components/component.js';
import { iPokemon } from '../interface/ipokemon.js';


export class DataPokemon {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  }
  getPoke(): Promise<Array<iPokemon>> {
    return fetch(this.url).then((response) => response.json());
  }
  getNextPage(nextUrl: string): Promise<Array<iPokemon>> {
    return fetch(nextUrl).then((response) => response.json());
  }
  getPreviousPage(previousUrl: string): Promise<Array<iPokemon>> {
    if (!previousUrl) return this.getPoke();
    return fetch(previousUrl).then((response) => response.json());
  }
}
