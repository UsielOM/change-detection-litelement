import { LitElement, html } from 'lit-element';
import './date-display';
export class MyElements extends LitElement {
    static get properties() {
        return {
            date: {},
        };
    }


    render() {
        return html `
        <p>Choose a date: 
            <input type="date" @change=${this._dateChanged}></p>
            <p> <button @click=${this._chooseToday}>Choose Today</button> </p>
           
        
        `;
    }
    _dateChanged(e) {
        const utcDate = e.target.valuesAsDate;
        if (utcDate) {
            this.date = localDateFromUTC(utcDate);
        }
    }
    _chooseToday() {
        this.date = new Date();
    }


}
customElements.define('my-elements', MyElements);