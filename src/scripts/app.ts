import { index } from '../scripts/index.js';
import { misPokemon } from '../scripts/pokemonButton.js';
//import { detalles } from '../scripts/detalles.js';

(() => {
  const path = location.pathname.split('/');

  if (path[path.length - 1] === '' || path[path.length - 1] === 'index.html') {
    document.addEventListener('DOMContentLoaded', index);
  } else (path[path.length - 1] === 'mis-pokemon.html') 
    document.addEventListener('DOMContentLoaded', misPokemon);
  }
)();
