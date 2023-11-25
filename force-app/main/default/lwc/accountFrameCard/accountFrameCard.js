import { LightningElement } from 'lwc';

export default class AccountFrameCard extends LightningElement {
    searchText='';
    searchAccountEventHandler(event){
        this.searchText=event.detail;
        console.log(this.searchText);
    }
}