import { Component } from "../components/component.js";
import { DataPokemon } from "../service/dataPokemon.js";
export class PokemonList extends Component {
    constructor(selector, pokeArray) {
        super();
        this.selector = selector;
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
    manageComponent() {
        document
            .querySelectorAll('.add-fav img')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
        document
            .querySelectorAll('[type=checkbox]')
            .forEach((item) => item.addEventListener('change', this.handlerChange.bind(this)));
    }
    updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
        // new AddTask('slot.addTask', this.addTask.bind(this));
    }
    handlerButton(ev) {
        const elem = ev.target;
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
        }
        else {
            elem.innerHTML = 'np favorito';
            elem.src = './assets/no-favorite.png';
            elem.setAttribute('alt', 'white star');
        }
    }
    handlerChange(ev) { }
}
