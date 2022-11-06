<template>
  <HeaderPage contador="4"/>
  <div class="container">
    <ProductsItems></ProductsItems>

  </div>
  <FooterPage/>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderPage from '../layouts/header.layouts.vue'
import ProductsItems from '../layouts/productsItems.layouts.vue'
import FooterPage from '../layouts/footer.layouts.vue'
export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderPage,
    ProductsItems,
    FooterPage
  }
})
</script>
