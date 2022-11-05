<template>
  <div class="navbar">
    <div class="container items">
      <a href="#">
        <div class="logo">
          <div>GOOD</div>
          <div>GOOD</div>
        </div>
      </a>

      <div class="search">
        <input class="search--input" type="text" placeholder="Busque aqui">
      </div>
      <div class="bag">
        <a href="/bag">
          <div>
            <span>
              <img src="../../public/icons/shopping-bag.svg" alt="">
            </span>
          </div>
          <div class="bag--contador">
            {{ contador }}
          </div>
        </a>


      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'HeaderPage',
  props: {
    contador: {
      type: String
    }
  },

  components: {

  },

  setup() {

    return {


    }
  }
})
</script>
