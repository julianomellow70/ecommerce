<template>
  <HeaderPage contador="4"/>
  <div class="container">
    <h4>Página Home</h4>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderPage from '../layouts/header.layouts.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderPage
  }
})
</script>
