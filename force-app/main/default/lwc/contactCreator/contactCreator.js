import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { LightningElement } from 'lwc';
import Email from '@salesforce/schema/Contact.Email';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [FirstName, LastName, Email];
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Contact Created',
            message: 'New Contact Id: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}