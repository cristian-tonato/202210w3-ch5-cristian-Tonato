import { Component } from "../components/component.js";
//import { DataPokemon } from "../service/dataPokemon.js";
export class ItemPokemon extends Component {
    constructor(selector, item, favorites) {
        super();
        this.item = item;
        this.favorites = favorites;
        this.template = this.createTemplate();
        this.render(selector);
        this.item = item;
    }
    createTemplate() {
        return `
        <li>
            <div>${this.item.id}</div>
            <div>${this.item.name}</div>
            <div><img src="${this.item.sprites.front_default}" alt="${this.item.name}'s image"></div>
            <div><i class="add-fav" ><img data-id="${this.item.id}" src="${this.favorites.includes(+this.item.id)
            ? './assets/favorite.png'
            : './assets/no-favorite.png'}" alt="star"></i></div>
        </li>
        `;
    }
}
