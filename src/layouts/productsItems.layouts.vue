<template>
  <div class="products">
    <div>Counter : <b>{{ numberBagItems }}</b></div>
    <div class="products--items">
      <Item v-for="product in products" :key="product.id" :title=product.title :src=product.image :price=product.price
        :id=product.id />
    </div>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'
import { computed } from 'vue';
import { useBagStore } from 'src/stores/bag'
import { defineComponent, } from 'vue'
import Item from '../components/product.component.vue'


export default defineComponent({
  name: 'ProductsItems',

  setup() {
    const store = useBagStore();

    // Option 2: use computed and functions to use the store
    const numberBagItems = computed(() => store.numberBagItems);
    const bagItems = computed(() => store.bagItems);
    const addItemsBag = () => store.addItemsBag(); // use action
    const removeItemsBag = () => store.removeItemsBag();

    return {
      numberBagItems,
      bagItems,
      addItemsBag,
      removeItemsBag
    }
  },
  computed: {


  },
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
  created() {

  },
  methods: {

  }
})
</script>
