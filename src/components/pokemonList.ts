import { Component } from "../components/component.js";
import { PokemonModel } from "../models/pokemonModel.js";
import { DataPokemon } from "../service/dataPokemon.js";
import {iPokemon } from "../interface/ipokemon.js";
import { Controller } from "./itemPokemon.js";


export class PokemonList extends Component implements IPokemon {
  pokemons!: Array<PokemonModel>;
  storeService: DataPokemon;
  pokeArray: PokemonModel[];
  favorites;
  constructor(public selector: string, pokeArray: Array<PokemonModel>) {
    super();
    this.storeService = new DataPokemon();
    this.pokeArray = pokeArray;

    this.favorites = JSON.parse(StoreClass.getFavorites());

    this.updateComponent();
  }
  createTemplate() {
    let html = `
        
        <ul class="list__container-list">`;

    this.pokeArray.forEach((item, favorites) => {
      html += new ItemPokemon('', item, this.favorites).template;
    });

    html += `</ul>`;
    return html;
  }
  private manageComponent() {
    document
      .querySelectorAll('.add-fav img')
      .forEach((item) =>
        item.addEventListener('click', this.handlerButton.bind(this))
      );
    document
      .querySelectorAll('[type=checkbox]')
      .forEach((item) =>
        item.addEventListener('change', this.handlerChange.bind(this))
      );
  }
  updateComponent() {
    this.template = this.createTemplate();
    this.render(this.selector);
    this.manageComponent();

    // new AddTask('slot.addTask', this.addTask.bind(this));
  }
  handlerButton(ev: Event) {
    const elem: any = <HTMLElement>ev.target;
    console.log(typeof elem);
    const favId = elem.dataset.id;

    let result = false;
    if (favId) {
      result = StoreClass.setFavorites(+favId);
    }

    if (!!result) {
      elem.innerHTML = 'favorito';
      elem.src = './assets/favorite.png';
      elem.setAttribute('alt', 'yellow star');
    } else {
      elem.innerHTML = 'np favorito';
      elem.src = './assets/no-favorite.png';
      elem.setAttribute('alt', 'white star');
    }
  }

  private handlerChange(ev: Event) {}
}
