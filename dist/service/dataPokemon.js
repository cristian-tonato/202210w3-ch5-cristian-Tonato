export class DataPokemon {
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }
    getPokemon(id) {
        return fetch(this.url + `${id}`).then((resp) => {
            return resp.json();
        });
    }
}
