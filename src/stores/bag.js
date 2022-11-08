import { defineStore } from 'pinia';

let storage = localStorage.getItem('bag');
storage = JSON.parse(storage);

let storageEmpty = {
  data : []
}
//verificando se existe algo na chave bag
let items = storage ? storage : storageEmpty;
let numItems = items.data.length ;


export const useBagStore = defineStore('bag', {
  state: () => ({
    numberBagItems: numItems,
    bagItems: items
  }),
  actions: {
    addItemsBag () {
       this.numberBagItems++;
    },
    removeItemsBag(){
      this.numberBagItems--;
    }
  }
})
