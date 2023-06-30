<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Item from './components/Item.vue';
import ButtonR from './components/ButtonR.vue';
import FoodItem from './components/FoodItem.vue';
import ButtonBuy from './components/ButtonBuy.vue';



</script>

<template>
     <div class="flex justify-between sticky top-0 pointer-events-none">
    
    <img class="scale-50 -ml-20 -mt-[70px] z-10 " src="./assets/LT.svg" alt="">
     <ButtonR @click="Navigate()" imageLink="/src/assets/basket.svg" class="z-20 pointer-events-auto"/>
    <img class="scale-50 -mr-20 -mt-[70px] z-10" src="./assets/RT.svg" alt="">

   </div>
<RouterView></RouterView>
<div class="flex justify-between sticky bottom-0 h-24  ">
    
   





    <img class=" z-10 " src="./assets/LB.svg" alt="">
    <div class=" w-full h-24 border border-t-black border-1 -ml-40 -mr-40 z-0 bg-[#FFFCF3] flex justify-center gap-10">
      <ButtonR imageLink="/src/assets/receipt-cutoff.svg"></ButtonR>
      <ButtonR imageLink="/src/assets/Subtract.svg"></ButtonR>
    </div>
    <img class=" z-10 " src="./assets/RB.svg" alt="">



 </div>
</template>

<style scoped>

</style>
<script>

</script>
