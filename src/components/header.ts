import { Component } from '../components/component.js';

export class Header extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
    //new Menu('header>slot');
  }
  createTemplate() {
    return `
        <header>
          <div>
            <h1><img src="./img/International_Pokémon_logo.svg.png" alt=""></h1>
          </div>
          <div class="menu">
        <ul class ="menu_home">
        <nav class= "menu_item">
        <a class = "home" href="">HOME</a>
        <a class ="favorites" href="">FAVORITES</a>
        </nav>
        </ul>
          </div>
        </header>
        `;
  }
}
