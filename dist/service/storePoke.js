export class StoreClass {
    static getLastPokemon() {
        return localStorage.getItem(StoreClass.lastPokemon)
            ? localStorage.getItem(StoreClass.lastPokemon)
            : '10';
    }
    static setLastPokemon(last) {
        localStorage.setItem(StoreClass.lastPokemon, last);
    }
    static getFavorites() {
        return localStorage.getItem(StoreClass.favorites)
            ? localStorage.getItem(StoreClass.favorites)
            : '[]';
    }
    static setInitialFavorites() {
        localStorage.setItem(StoreClass.favorites, '[]');
    }
    static setFavorites(item) {
        let array = [];
        let items;
        items = JSON.parse(StoreClass.getFavorites());
        if (!items.includes(item)) {
            array.push(...items);
            array.push(item);
            localStorage.setItem(StoreClass.favorites, JSON.stringify(array));
            return true;
        }
        else {
            const newFavorites = items.filter((elem) => elem !== item);
            array = newFavorites;
            localStorage.setItem(StoreClass.favorites, JSON.stringify(array));
            return false;
        }
    }
}
StoreClass.lastPokemon = 'lastPokemon';
StoreClass.favorites = 'favorites';
