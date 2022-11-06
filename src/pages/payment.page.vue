<template>
  <HeaderPage contador="4" />
  <div class="container">
    <h1 class="titlePayment">Pagamento</h1>
    <Form>
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
          <select class="formItems-item--input" name="parcelamento" id="parcelamento">
            <option value="1" selected>1x</option>
            <option value="2" selected>2x</option>
            <option value="3" selected>3x</option>
            <option value="4" selected>4x</option>
            <option value="5" selected>5x</option>
          </select>
        </div>
      </div>
    </Form>
    <div class="btnPayment">
      <a href="/payment/success">
        <button class="btnPayment--finalizar">Finalizar compra</button>
      </a>
      <a href="/">
        <button class="btnPayment--cancelar">Cancelar compra</button>
      </a>
    </div>
  </div>
  <FooterPage />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderPage from '../layouts/header.layouts.vue'
import FooterPage from '../layouts/footer.layouts.vue'
export default defineComponent({
  name: 'PaymentPage',
  components: {
    HeaderPage,
    FooterPage
  }
})
</script>
