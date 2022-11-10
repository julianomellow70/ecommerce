<template>
  <HeaderPage contador="4" />
  <div class="container">
    <h1 class="titlePayment">Pagamento</h1>
    <Form action="/payment/success">
      <div class="formItems">
        <div class="formItems--item">
          <label class="formItems-item--label" for="nome">Nome do cartão</label>
          <input class="formItems-item--input" id="nome" type="text" placeholder="Ex. JULIANO MELLO" required>
        </div>
        <div class="formItems--item">
          <label class="formItems-item--label" for="num">Número do cartão</label>
          <input class="formItems-item--input" id="num" type="text" placeholder="Ex. 5512 6997 8069 1837" required>
        </div>
        <div class="formItems--item">
          <label class="formItems-item--label" for="cod">Código de segurança</label>
          <input class="formItems-item--input" id="cod" type="text" placeholder="Ex. 000" required>
        </div>
        <div class="formItems--item">
          <label class="formItems-item--label" for="ano">Ano de vencimento</label>
          <input class="formItems-item--input" id="ano" type="text" placeholder="Ex. 2022" required>
        </div>
        <div class="formItems--item">
          <label class="formItems-item--label" for="parcelamento">Parcelamento</label>
          <select :disabled="isDisabled" class="formItems-item--input" name="parcelamento" id="parcelamento">
            <option value="1" selected>{{ isDisabled ? "Você não pode parcelar compras menores que $50" : "1" }}</option>
            <option value="2">2x</option>
            <option value="3">3x</option>
            <option value="4">4x</option>
            <option value="5">5x</option>
          </select>
        </div>
      </div>
      <div class="btnPayment">
        <a href="/payment/success">
          <button type="submit" class="btnPayment--finalizar">Finalizar compra</button>
        </a>
        <a href="/">
          <button type="button" class="btnPayment--cancelar" @click="clearStates">Cancelar compra</button>
        </a>
      </div>
    </Form>

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
  name: 'PaymentPage',
  components: {
    HeaderPage,
    FooterPage
  },
  computed: {
    isDisabled() {
      console.log(this.totalPrice <= 50);
      return this.totalPrice <= 50;
    }
  },
  setup() {
    const store = useBagStore();

    // Option 2: use computed and functions to use the store
    const numberBagItems = computed(() => store.numberBagItems);
    const bagItems = computed(() => store.bagItems);
    const totalPrice = computed(() => store.totalPrice);
    const addItemsBag = () => store.addItemsBag(); // use action
    const removeItemsBag = (id) => store.removeItemsBag(id);
    const clearStates = (id) => store.clearStates(id);

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
