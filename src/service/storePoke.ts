/* eslint-disable prefer-const */

export class StoreClass {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  static lastPokemon: string = 'lastPokemon';
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  static favorites: string = 'favorites';

  static getLastPokemon(): string {
    return localStorage.getItem(StoreClass.lastPokemon)
      ? <string>localStorage.getItem(StoreClass.lastPokemon)
      : '10';
  }

  static setLastPokemon(last: string) {
    localStorage.setItem(StoreClass.lastPokemon, last);
  }

  static getFavorites(): string {
    return localStorage.getItem(StoreClass.favorites)
      ? <string>localStorage.getItem(StoreClass.favorites)
      : '[]';
  }

  static setInitialFavorites() {
    localStorage.setItem(StoreClass.favorites, '[]');
  }

  static setFavorites(item: number) {
    let array = [];

    let items: Array<number>;
    items = JSON.parse(<string>StoreClass.getFavorites());

    if (!items.includes(item)) {
      array.push(...items);
      array.push(item);
      localStorage.setItem(StoreClass.favorites, JSON.stringify(array));
      return true;
    } else {
      const newFavorites = items.filter((elem) => elem !== item);
      array = newFavorites;
      localStorage.setItem(StoreClass.favorites, JSON.stringify(array));
      return false;
    }
  }
}
