<template>
  <slot />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContextItems',
  data() {
    return {
      contador: 4
    }
  },
  provide() {
    return {
      addContadorItems: this.addContadorItems,
      contador: this.contador
    }
  },
  methods: {
    addContadorItems() {
      this.contador=8;
    }
  }


})
</script>
