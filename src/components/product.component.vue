<template>
  <div class="products-items--item">
    <img :src="src" class="products-items-item--image" alt="">
    <div class="products-items-item--price">
      ${{ price }}
    </div>
    <div class="products-items-item--name">
      {{ title }}
    </div>
    <div class="products-items--groupbtn">
      <button v-on:click="addItemsBag(id, title, src, price)" class="products-items-item--btn1">+</button>
      <div class="products-items-groupbtn--count">{{ numberBagItems }}</div>
      <button v-on:click="removeItemsBag(id)" class="products-items-item--btn2">-</button>
    </div>

  </div>
</template>

<script>

import { defineComponent } from 'vue'
import { computed } from 'vue';
import { useBagStore } from 'src/stores/bag'

export default defineComponent({
  name: 'ProductItem',
  props: {
    title: String,
    price: String,
    src: String,
    id: Int16Array
  },
  computed: {
    isDisabled() {
      return false;
    }

  },
  setup() {
    const store = useBagStore();

    // Option 2: use computed and functions to use the store
    const numberBagItems = computed(() => store.numberBagItems);
    const bagItems = computed(() => store.bagItems);
    const addItemsBag = (id, title, image, price) => store.addItemsBag(id, title, image, price); // use action
    const removeItemsBag = (id) => store.removeItemsBag(id);

    return {
      numberBagItems,
      bagItems,
      addItemsBag,
      removeItemsBag
    }
  },
  methods: {

  },
  inject: ['contador', 'addContadorItems'],
  created() {

  }
})



</script>


