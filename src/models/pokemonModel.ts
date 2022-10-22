//cosntructor de cada pokemon


export class PokemonModel {
    constructor(
        public id: string, 
        public name: string, 
        public sprites:{
            front_default: string
        }
    ) {
        
    }
}
