import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import COUNT_UPDATED_CHANNEL from '@salesforce/messageChannel/Count_Updated__c';

export default class Counts extends LightningElement {
  subscription = null;
  priorCount = 0;
  counter = 0;

  @wire(MessageContext)
  messageContext;

  connectedCallback() {
    this.subscribeToMessageChannel();
  }

  subscribeToMessageChannel() {
    if (this.subscription) return;
    this.subscription = subscribe(
      this.messageContext,
      COUNT_UPDATED_CHANNEL,
      (message) => this.handleMessage(message)
    );
  }

  handleMessage(message) {
    this.priorCount = this.counter;

    switch (message.operator) {
      case 'add':
        this.counter += message.constant;
        break;
      case 'subtract':
        this.counter -= message.constant;
        break;
      case 'multiply':
        this.counter *= message.constant;
        break;
    }
  }
}
