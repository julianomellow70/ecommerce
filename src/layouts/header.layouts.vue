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
            {{ numberBagItems }}
          </div>
        </a>


      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { computed } from 'vue';
import { useBagStore } from 'src/stores/bag'

export default defineComponent({
  name: 'HeaderPage',
  data(){
    return {
    }
  },
  methods: {

  },
  components: {

  },
  setup() {
    const store = useBagStore();

    // Option 2: use computed and functions to use the store
    const numberBagItems = computed(() => store.numberBagItems);
    const bagItems = computed(() => store.bagItems);
    const addItemsBag = () => store.addItemsBag(); // use action
    const removeItemsBag = () => store.removeItemsBag();

    return {
      numberBagItems,
      bagItems,
      addItemsBag,
      removeItemsBag
    }
  }

})
</script>
