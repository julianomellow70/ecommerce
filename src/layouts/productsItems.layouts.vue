<template>
  <div class="products">
    <div class="products--items">
<Item></Item>
<Item></Item>
<Item></Item>
<Item></Item>
<Item></Item>
<Item></Item>
<Item></Item>
<Item></Item>

    </div>

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Item from '../components/product.component.vue'


export default defineComponent({
  name: 'ProductsItems',

  components: {
Item
  },

  setup() {

    return {


    }
  }
})
</script>
