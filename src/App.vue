<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Item from './components/Item.vue';
import ButtonR from './components/ButtonR.vue';
import FoodItem from './components/FoodItem.vue';
import ButtonBuy from './components/ButtonBuy.vue';


const items=[{
  name: "Burger",
  id:"1",
  price:"25",
  description:"onionzzzzz, bunzzz",
  image:"idshfos"
},
{
  name: "Club Sandwich",
  id:"11",
  price:"22",
  description:"i dunno ",
  image:"ids312hfos"
},
{
  name: "Pizza",
  id:"11",
  price:"22",
  description:"hello world",
  image:"ids312hfos"
},
{
  name: "Pizza but better",
  id:"11",
  price:"22",
  description:"hello world x2",
  image:"ids312hfos"
}
]
</script>

<template>
  <div class="flex justify-between sticky top-0 -">
    
     <img class="scale-50 -ml-20 -mt-[70px] z-10 " src="./assets/LT.svg" alt="">
      <ButtonR imageLink="src/assets/basket.svg" class="z-20"/>
     <img class="scale-50 -mr-20 -mt-[70px] z-10" src="./assets/RT.svg" alt="">

    </div>
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

<div class="flex justify-between sticky bottom-0 h-24  ">
    
    <!-- <img class="scale-50 -ml-20 -mb-[70px]" src="./assets/LB.svg" alt="">
    <div class="h-0 w-full border border-black">
      
    </div>
     
    <img class="scale-50 -mr-20 -mb-[70px]" src="./assets/RB.svg" alt=""> -->





    <img class=" z-10 " src="./assets/LB.svg" alt="">
    <div class=" w-full h-24 border border-t-black border-1 -ml-40 -mr-40 z-0 bg-[#FFFCF3] flex justify-center gap-10">
      <ButtonR imageLink="src/assets/receipt-cutoff.svg"></ButtonR>
      <ButtonR imageLink="src/assets/Subtract.svg"></ButtonR>
    </div>
    <img class=" z-10 " src="./assets/RB.svg" alt="">



 </div>
</template>

<style scoped>

</style>
<script>

</script>
