<template>
  <div class="navbar">
    <div class="container items">


      <div class="logo">
        <a href="#">
          <div>GOOD</div>
          <div>GOOD</div>
        </a>
      </div>




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
            {{ numItems }}
          </div>
        </a>


      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderPage',
  inject: ['contador'],
  data(){
    return {
      numItems : this.contador
    }
  },
  methods: {

  },
  components: {

  },

  
})
</script>
