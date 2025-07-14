import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'world';
    changeHandler(event){
        this.gretting = event.target.value;
    }
}