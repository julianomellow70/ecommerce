<template>
  <div class="products-items--item">
         <img class="products-items-item--image" src="../../public/images/hd-externo.jpg" alt="">
         <div class="products-items-item--price">
           R$ 750,58
         </div>
         <div class="products-items-item--name">
           Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
         </div>
         <button class="products-items-item--btn">Adicionar ao carrinho</button>
       </div>
 </template>

 <script>
 import { defineComponent } from 'vue'

 export default defineComponent({
   name: 'ProductItem',
 })
 </script>
