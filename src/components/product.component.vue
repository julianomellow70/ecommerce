<template>
  <div class="products-items--item">
    <img :src="src" class="products-items-item--image" alt="">
    <div class="products-items-item--price">
      ${{ price }}
    </div>
    <div class="products-items-item--name">
      {{ title }}
    </div>

    <button v-on:click="addBag(id, title, src, price)" class="products-items-item--btn">Adicionar ao carrinho</button>
  </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductItem',
  props: {
    title: String,
    price: String,
    src: String,
    id: Int16Array
  },
  methods: {
    addBag(id, title, image, price) {
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

      this.addContadorItems();

    }
  },
  inject:['contador','addContadorItems'],
  created() {

  }
})



</script>


