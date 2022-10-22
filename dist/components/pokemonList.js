import { Component } from "../components/component.js";
import { DataPokemon } from "../service/dataPokemon.js";
//import { Controler } from "../components/controler.js"
import { StoreClass } from "../service/storePoke.js";
import { ItemPokemon } from "./itemPokemon.js";
export class PokemonList extends Component {
    constructor(selector, pokeArray) {
        super();
        this.selector = selector;
        this.storeService = new DataPokemon();
        this.pokeArray = pokeArray;
        this.favorites = JSON.parse(StoreClass.getFavorites());
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
}
