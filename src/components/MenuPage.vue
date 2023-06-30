<script setup>


import { RouterView, loadRouteLocation, routerKey, useRoute } from 'vue-router';
import ButtonR from './ButtonR.vue';
import FoodItem from './FoodItem.vue';

import itemsGetter from '../ItemsGetter.js'
import { inject, onMounted } from 'vue';

const route= useRoute();
const id= route.params.id

const items=itemsGetter(id)

function Hello(){
  console.log("Hello");
}
</script>


<template>



  <!-- <div class="flex justify-between sticky top-0 -">
    
     <img class="scale-50 -ml-20 -mt-[70px] z-10 " src="../assets/LT.svg" alt="">
      <ButtonR @click="Navigate()" imageLink="/src/assets/basket.svg" class="z-20"/>
     <img class="scale-50 -mr-20 -mt-[70px] z-10" src="../assets/RT.svg" alt="">

    </div> -->
    <div class="flex flex-col items-center gap-10 z-20 ">
 <FoodItem v-for="item in items" :name="item.name" :description=item.description :price="item.price"></FoodItem>



</div>

    <!-- lista -->
<!-- <div class="flex flex-col items-center gap-10">
  <Item/>
  <Item/>
  <Item/>
  <Item/>
  <Item/>
  <Item/>
 
  <Item/>
  <Item/>
  <Item/>

</div> -->

<!-- <div class="flex justify-between sticky bottom-0 h-24  ">
    
   





    <img class=" z-10 " src="../assets/LB.svg" alt="">
    <div class=" w-full h-24 border border-t-black border-1 -ml-40 -mr-40 z-0 bg-[#FFFCF3] flex justify-center gap-10">
      <ButtonR imageLink="/src/assets/receipt-cutoff.svg"></ButtonR>
      <ButtonR imageLink="/src/assets/Subtract.svg"></ButtonR>
    </div>
    <img class=" z-10 " src="../assets/RB.svg" alt="">



 </div> -->
</template>

<style scoped>

</style>

