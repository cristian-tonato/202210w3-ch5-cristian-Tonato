/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataPokemon } from '../service/dataPokemon.js';
import { Component } from '../components/component.js';
import { iPokemon } from '../interface/ipokemon.js';


export class PokeList extends Component {
  template!: string;
  pokes: any;
  api: DataPokemon;
  pokesInfo: Array<string>;
  nextInfo: Array<string>;
  nextPokes: any;
  previousInfo: Array<string>;
  previousPokes: any;
  constructor(public selector: string) {
    super();
    this.api = new DataPokemon();
    this.pokes = '';
    this.pokesInfo = [];
    this.nextInfo = [];
    this.nextPokes = '';
    this.previousInfo = [];
    this.previousPokes = '';
    this.startInitialFetch();
  }

  async startInitialFetch() {
    this.pokes = await this.api.getPoke();
    const pokesArr: Array<string> = [];

    this.pokes.results.forEach((item: iPokemon) => {
      pokesArr.push(item.url);
    });

    this.pokesInfo = await Promise.all(
      pokesArr.map((url: string) => fetch(url).then((result) => result.json()))
    );

    this.nextPageFetch();
    this.previousPageFetch();
    this.manageComponent();
  }

  async nextPageFetch() {
    this.nextPokes = await this.api.getNextPage(this.pokes.next);

    const nextPokeArr: Array<string> = [];
    this.nextPokes.results.forEach((item: iPokemon) => {
      nextPokeArr.push(item.url);
    });

    this.nextInfo = await Promise.all(
      nextPokeArr.map((url: string) =>
        fetch(url).then((result) => result.json())
      )
    );
  }

  async previousPageFetch() {
    this.previousPokes = await this.api.getPreviousPage(this.pokes.previous);
    const previousPokeArr: Array<string> = [];

    this.previousPokes.results.forEach((item: iPokemon) => {
      previousPokeArr.push(item.url);
    });

    this.previousInfo = await Promise.all(
      previousPokeArr.map((url: string) =>
        fetch(url).then((result) => result.json())
      )
    );
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render(this.selector, this.template);

    document.querySelector('.next-button')?.addEventListener('click', () => {
      this.pokes = this.nextPokes;
      this.pokesInfo = this.nextInfo;
      this.nextPageFetch();
      this.previousPageFetch();
      this.manageComponent();
    });

    document
      .querySelector('.previous-button')
      ?.addEventListener('click', () => {
        this.pokes = this.previousPokes;
        this.pokesInfo = this.previousInfo;
        this.nextPageFetch();
        this.previousPageFetch();
        this.manageComponent();
      });
  }

  createTemplate() {
    this.template = `<div class="pokes-container">`;
    this.pokesInfo.forEach((item: any) => {
      console.log('ITEM', item);
      this.template += `
      <div class="poke-card">
        <h2 class="pokes-name">${item.species.name}</h2>
        <img class="pokes-img" src="${item.sprites.other.dream_world.front_default}" alt="${item.species.name}" width="210">
      </div>`;
    });
    this.template += `</div>
    <div class="button">
      <button class="previous-button">Anterior</button>
      <button class="next-button">Siguiente</button>
    </div>`;
    return this.template;
  }
}
