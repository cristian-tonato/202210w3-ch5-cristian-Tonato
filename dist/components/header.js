import { Component } from '../components/component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        //new Menu('header>slot');
    }
    createTemplate() {
        return `
        <header>
          <div>
            <h1>PokeApi</h1>
            <img src="/assets/pokemon-logo.svg" alt="Pokemon Logo">
          </div>
        </header>
        `;
    }
}
