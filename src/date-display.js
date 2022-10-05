import { LitElement, html } from 'lit-element';
import { isSameDate } from './date-utils';

export class DateDisplay extends LitElement {

    static get properties() {
        return {
            date: {
                hasChanged: (value, oldValue) => {
                    return !isSameDate(value, oldValue);
                }
            }
        };
    }
      get datefield() {
    return this.renderRoot?.querySelector('#datefield') ?? null;
  }

  frames = [
    {backgroundColor: '#fff'},
    {backgroundColor: '#324fff'},
    {backgroundColor: '#fff'},
  ];

  render() {
    return html`<span id="datefield">${this.date?.toLocaleDateString()}</span>`;
  }

  updated(changed) {
    if (changed.has('date')) {
      this.datefield.animate(this.frames, 1000);
    }
  }
}


customElements.define('date-display', DateDisplay);