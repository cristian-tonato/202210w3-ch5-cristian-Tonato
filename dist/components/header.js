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
            <h1><img src="./pokemon-logo.svg" alt="" srcset=""></h1>
          </div>
        </header>
        `;
    }
}
