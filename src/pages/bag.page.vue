<template>
  <HeaderPage contador="4" />
  <div class="container">
    <h1 class="titleBagItems">Minha sacola</h1>
    <div class="bagitemsHead">
      <div class="bagitems--columnName">Item</div>
      <div class="bagitems--columnName">Valor</div>
    </div>
    <div class="bagitems">
      <div class="bagitems--item">
        <div>
          <img class="bagitems-item--image" src="../../public/images/hd-externo.jpg" alt="">
          <div class="bagitems-item--title">Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
          </div>
          <button class="bagitems-item--btn">Remover</button>
        </div>
        <div class="bagitems-item--price">
          R$ 750,00
        </div>
      </div>
      <div class="bagitems--item">
        <div>
          <img class="bagitems-item--image" src="../../public/images/hd-externo.jpg" alt="">
          <div class="bagitems-item--title">Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
          </div>
          <button class="bagitems-item--btn">Remover</button>

        </div>
        <div class="bagitems-item--price">
          R$ 750,00
        </div>
      </div>
      <div class="bagitems--item">
        <div>
          <img class="bagitems-item--image" src="../../public/images/hd-externo.jpg" alt="">
          <div class="bagitems-item--title">Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
          </div>
          <button class="bagitems-item--btn">Remover</button>

        </div>
        <div class="bagitems-item--price">
          R$ 750,00
        </div>
      </div>
      <div class="bagitems--item">
        <div>
          <img class="bagitems-item--image" src="../../public/images/hd-externo.jpg" alt="">
          <div class="bagitems-item--title">Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
          </div>
          <button class="bagitems-item--btn">Remover</button>

        </div>
        <div class="bagitems-item--price">
          R$ 750,00
        </div>
      </div>
    </div>
    <div class="boxTotal">
      <div>Valor total <b>R$ 1450,00</b></div>
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
export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderPage,
    FooterPage
  }
})
</script>
