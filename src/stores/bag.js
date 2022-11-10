import { defineStore } from 'pinia';

let storage = localStorage.getItem('bag');
storage = JSON.parse(storage);

let storageEmpty = {
  data: []
}
//verificando se existe algo na chave bag
let items = storage ? storage : storageEmpty;
let numItems = items.data.length;

let price = 0;
//somando os valores da sacola;
items.data.forEach(item => {
  price = price + item.price;
});

export const useBagStore = defineStore('bag', {
  state: () => ({
    numberBagItems: numItems,
    bagItems: items,
    totalPrice: price.toFixed(2)
  }),
  actions: {
    addItemsBag(id, title, image, price) {
      let newItem = {
        "id": id,
        "title": title,
        "image": image,
        "price": price,
      }
      let bagItems = localStorage.getItem('bag');
      bagItems = JSON.parse(bagItems);
      bagItems = bagItems ? bagItems : { data: [] };
      let dataBagItems = bagItems.data;
      dataBagItems.unshift(newItem);

      let newBagItems = {
        data: dataBagItems
      }

      localStorage.setItem('bag', JSON.stringify(newBagItems));

      let total = 0;
      //somando os valores da sacola;
      newBagItems.data.forEach(item => {
        total = total + item.price;
      });
      //mudando o valor do preço total
      this.totalPrice = total.toFixed(2);
      //mudando o meu contador de items na sacola
      this.numberBagItems++;
    },
    removeItemsBag(idItem) {


      //receber os itens do local storage
      let bagItems = localStorage.getItem('bag');
      bagItems = JSON.parse(bagItems);
      let dataBagItems = bagItems.data;

      //encontrar o item com a id informada
      // let dataFiltered = dataBagItems.filter(data => {
      // return data.id != idItem
      //})
      let dataFiltered = [];
      let isRemove = false;
      for (const item of dataBagItems) {
        if ((item.id != idItem) || (item.id == idItem && isRemove)) {
          dataFiltered.push(item)
        } else if (!isRemove) {
          isRemove = true;
        }
      }
      //se não removeu nenhum item
      if(!isRemove){
        alert("Não há item desse tipo para ser removido")
      }


      let newBag = {
        data: dataFiltered
      }

      localStorage.setItem('bag', JSON.stringify(newBag));

      let total = 0;
      //somando os valores da sacola;
      newBag.data.forEach(item => {
        total = total + item.price;
      });
      //mudando o valor do preço total
      this.totalPrice = total.toFixed(2);

      this.bagItems = newBag;
      this.numberBagItems = newBag.data.length;
    },
    clearStates(){
      localStorage.clear();
      this.numberBagItems = 0;
      this.totalPrice = 0;
      this.bagItems = { data : []}
    }
  }
})
