import { Component } from '../components/component.js';

export class Footer extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
  }
  createTemplate() {
    return `
        <footer>
            <address class= "name">Cristian Tonato</address>
            </footer>
        `;
  }
}
