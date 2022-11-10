<template>
  <HeaderPage contador="4" />
  <div class="container">
    <h1 class="titlePayment">Pagamento realizado com sucesso!</h1>
    <Form>
      <div class="formItems">
        <div class="formItems--item">
          <label  class="formItems-item--label" for="nome">Nome do cartão</label>
          <input disabled="true" class="formItems-item--input" id="nome" type="text" placeholder="Ex. JULIANO MELLO" required>
        </div>
        <div class="formItems--item">
          <label class="formItems-item--label" for="num">Número do cartão</label>
          <input disabled="true" class="formItems-item--input" id="num" type="text" placeholder="Ex. 5512 6997 8069 1837" required>
        </div>
        <div class="formItems--item">
          <label class="formItems-item--label" for="cod">Código de segurança</label>
          <input disabled="true" class="formItems-item--input" id="cod" type="text" placeholder="Ex. 000" required>
        </div>
        <div class="formItems--item">
          <label class="formItems-item--label" for="ano">Ano de vencimento</label>
          <input disabled="true" class="formItems-item--input" id="ano" type="text" placeholder="Ex. 2022" required>
        </div>
        <div  class="formItems--item">
          <label class="formItems-item--label" for="parcelamento">Parcelamento</label>
          <select  :disabled="true" class="formItems-item--input" name="parcelamento" id="parcelamento">
            <option value="1" selected>{{isDisabled ? "Você não pode parcelar compras menores que $50" : "1"}}</option>
            <option value="2">2x</option>
            <option value="3">3x</option>
            <option value="4">4x</option>
            <option value="5">5x</option>
          </select>
        </div>
      </div>
    </Form>
    <div class="btnPayment">
      <a href="/">
        <button @click="clearStates" class="btnBuyMore">Comprar mais items!</button>
      </a>

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
  name: 'PaymentPage',
  components: {
    HeaderPage,
    FooterPage
  },
  computed: {
    isDisabled() {
      return this.totalPrice <= 50;
    }
  },
  setup() {
    const store = useBagStore();


    const clearStates = () => store.clearStates();

    return {
      clearStates
    }
  }
})
</script>
