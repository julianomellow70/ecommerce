<template>
  <HeaderPage contador="4" />
  <div class="container">
    <h1 class="titleBagItems">Minha sacola</h1>
    <div class="bagitemsHead">
      <div class="bagitems--columnName">Item</div>
      <div class="bagitems--columnName">Valor</div>
    </div>
    <div class="bagitems">
      <div class="bagitems--item" v-for="item in bagItems.data" :key="item.id">
        <div>
          <img class="bagitems-item--image" :src="item.image" alt="">
          <div class="bagitems-item--title">{{ item.title }}
          </div>
          <button class="bagitems-item--btn" @click="removeItemsBag(item.id)">Remover</button>
        </div>
        <div class="bagitems-item--price">
          ${{ item.price }}
        </div>
      </div>
    </div>
    <div class="boxTotal">
      <div>Valor total <b>$ {{ totalPrice }}</b></div>
    </div>
    <div class="bagbtn">
      <a href="/payment"> <button class="bagbtn--finalizarcompra">Finalizar compra</button></a>
      <a href="/"><button class="bagbtn--continuarcomprando">Continuar comprando</button></a>

    </div>
  </div>
  <FooterPage />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderPage from '../layouts/header.layouts.vue'
import FooterPage from '../layouts/footer.layouts.vue'
import { computed } from 'vue';
import { useBagStore } from 'src/stores/bag'

export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderPage,
    FooterPage
  },
  setup() {
    const store = useBagStore();

    // Option 2: use computed and functions to use the store
    const numberBagItems = computed(() => store.numberBagItems);
    const bagItems = computed(() => store.bagItems);
    const totalPrice = computed(() => store.totalPrice);
    const addItemsBag = () => store.addItemsBag(); // use action
    const removeItemsBag = (id) => store.removeItemsBag(id);
    const clearStates = () => store.clearStates();

    return {
      numberBagItems,
      bagItems,
      totalPrice,
      clearStates,
      addItemsBag,
      removeItemsBag
    }
  }
})
</script>
