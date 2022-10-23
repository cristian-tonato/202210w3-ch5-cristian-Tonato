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
            <h1><img src="./pokemon-logo.svg" alt="" srcset=""></h1>
          </div>
        </header>
        `;
  }
}
