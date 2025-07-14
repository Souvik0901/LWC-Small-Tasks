import { LightningElement } from 'lwc';

export default class BikeCard extends LightningElement {
    name = 'Electra X4';
    description = ' A Sweet bike build for confort';
    category = 'Mountain';
    material = 'Steel';
    price = '$450';
    pictureUrl = 'https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/electrax4.jpg'
}