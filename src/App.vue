<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Item from './components/Item.vue';
import ButtonR from './components/ButtonR.vue';
import FoodItem from './components/FoodItem.vue';

</script>

<template>
  <div class="flex justify-between sticky top-0">
    
     <img class="scale-50 -ml-20 -mt-[70px]" src="./assets/LT.svg" alt="">
      <ButtonR/>
     <img class="scale-50 -mr-20 -mt-[70px]" src="./assets/RT.svg" alt="">

    </div>
    <div class="flex flex-col items-center gap-10">
 <FoodItem></FoodItem>
 <FoodItem></FoodItem>
 <FoodItem></FoodItem>
 <FoodItem></FoodItem>
 <FoodItem></FoodItem>
 <FoodItem></FoodItem>


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

<div class="flex justify-between sticky bottom-0 h-28 ">
    
    <!-- <img class="scale-50 -ml-20 -mb-[70px]" src="./assets/LB.svg" alt="">
    <div class="h-0 w-full border border-black">
      
    </div>
     
    <img class="scale-50 -mr-20 -mb-[70px]" src="./assets/RB.svg" alt=""> -->





    <img class=" z-10 " src="./assets/LB.svg" alt="">
    <div class=" w-full h-28 border border-t-black border-1 -ml-40 -mr-40 z-0 bg-[#FFFCF3] flex justify-center gap-10">
      <ButtonR></ButtonR>
      <ButtonR></ButtonR>
    </div>
    <img class=" z-10 " src="./assets/RB.svg" alt="">



 </div>
</template>

<style scoped>

</style>
<script>

</script>
