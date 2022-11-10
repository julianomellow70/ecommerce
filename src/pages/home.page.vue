<template>
  <ContextItems>
    <HeaderPage>
    </HeaderPage>
    <div class="container">
      
      <ProductsItems></ProductsItems>
    </div>
    <FooterPage />
  </ContextItems>


</template>

<script>
import { defineComponent } from 'vue'
import HeaderPage from '../layouts/header.layouts.vue'
import ProductsItems from '../layouts/productsItems.layouts.vue'
import FooterPage from '../layouts/footer.layouts.vue'
import ContextItems from '../components/context.component.vue'


export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderPage,
    ProductsItems,
    FooterPage,
    ContextItems
  }
})
</script>
