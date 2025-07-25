import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {
    // @api counter = 0;

    // handleIncrement() {
    //     this.counter++;
    // }

    // handleDecrement() {
    //     this.counter--;
    // }

    // handleMultiply(event) {
    //     const factor = event.detail;
    //     this.counter *= factor;
    // }
    _currentCount = 0;
    priorCount = 0;

    // Getter and setter for public property
    @api
    get counter() {
        return this._currentCount;
    }
    set counter(value) {
        this.priorCount = this._currentCount;
        this._currentCount = value;
    }

    handleMultiply(event) {
        const factor = event.target.dataset.factor;
        this.counter *= parseInt(factor);
    }

    @api
    maximizeCounter() {
        this.counter += 1000000;
    }
}
