export class DataPokemon {
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }
    static getPokemon(i) {
        throw new Error('Method not implemented.');
    }
    getPokemon(id) {
        return fetch(this.url + `${id}`).then((resp) => {
            return resp.json();
        });
    }
}
