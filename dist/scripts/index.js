import { Controller } from '../components/controler.js';
import { StoreClass } from '../service/storePoke.js';
// import { PokemonList } from '../components/pokemon-list.js';
export function index() {
    StoreClass.setLastPokemon('10');
    // console.log(StoreClass.getFavorites());
    // if(StoreClass.getFavorites() === '[]'){
    //     StoreClass.setInitialFavorites();
    // }
    new Controller();
    const leftButton = document.querySelector('#left');
    const rightButton = document.querySelector('#right');
    leftButton === null || leftButton === void 0 ? void 0 : leftButton.addEventListener('click', () => {
        const index = +StoreClass.getLastPokemon();
        if (index >= 11) {
            StoreClass.setLastPokemon((index - 10).toString());
            new Controller(index - 19);
        }
    });
    rightButton === null || rightButton === void 0 ? void 0 : rightButton.addEventListener('click', () => {
        const index = +StoreClass.getLastPokemon();
        if (index <= 890) {
            StoreClass.setLastPokemon((index + 10).toString());
            new Controller(index + 1);
        }
    });
}
