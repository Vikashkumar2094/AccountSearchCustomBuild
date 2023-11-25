import { LightningElement } from 'lwc';

export default class AccountFrame extends LightningElement {
searchText='';
    accountChangeHandler(event){
        this.searchText=event.target.value;
    }

    searchClickHandler(){
        const event= new CustomEvent('searchaccountevent',{detail:this.searchText});
        this.dispatchEvent(event);
    }
}