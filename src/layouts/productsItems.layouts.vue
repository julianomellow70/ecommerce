<template>
  <div class="products">
    <div class="products--items">
      <Item v-for="product in products" :key="product.id" :title=product.title :src=product.image :price=product.price
        :id=product.id />
    </div>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'

import { defineComponent, } from 'vue'
import Item from '../components/product.component.vue'


export default defineComponent({
  name: 'ProductsItems',
  components: {
    Item
  },
  mounted() {
    //buscando todos os itens
    api.get(api.get('https://fakestoreapi.com/products')
      .then((response) => {
        let items = response.data;
        this.products = items;
        console.log(this.products[0])

      }).catch((err) => {
        console.error(err)
      })
    )
  },
  data() {
    return {
      products: [],
      title: 'titulo'
    }
  },
 
})
</script>
