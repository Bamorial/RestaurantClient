<script setup>
import { RouterView, loadRouteLocation, routerKey, useRoute } from "vue-router";
import ButtonR from "./ButtonR.vue";
import FoodItem from "./FoodItem.vue";
import ButtonCheckout from "./ButtonCheckout.vue";
import { reactive } from "vue";
import itemsGetter from "../ItemsGetter.js";
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";
const route = useRoute();
const id = route.params.id;
localStorage.setItem("table", route.params.table);
// const items=await itemsGetter(id)
// for(let item of items){
//   console.log(item.numeProdus)
// }
const items = ref([]);
const error = ref(null);

    // Make the GET request on component mount
    onMounted(async () => {
      try {
        // Perform the GET request
        const response = await itemsGetter(id)
        items.value=response
      }
      catch(err){
        console.log(err)
      }
    });



//console.log(nonPars)

let checkoutItems = JSON.parse(localStorage.getItem("basket"));


function AddItem(item) {
  if (!Array.isArray(checkoutItems)) {
    checkoutItems = [];
    
  }
  const existingItem = checkoutItems.find((checkoutItem) => checkoutItem.id === item.id);
  if(existingItem){

    
    existingItem.quantity++
    console.log(existingItem.quantity)

  }
  else{
    item.quantity=1;
    checkoutItems.push(item);
   

  }
  localStorage.setItem("basket", JSON.stringify(checkoutItems));


}
</script>

<template>
  <!-- <div class="flex justify-between sticky top-0 -">
    
     <img class="scale-50 -ml-20 -mt-[70px] z-10 " src="../assets/LT.svg" alt="">
      <ButtonR @click="Navigate()" imageLink="/src/assets/basket.svg" class="z-20"/>
     <img class="scale-50 -mr-20 -mt-[70px] z-10" src="../assets/RT.svg" alt="">

    </div> -->
  <ButtonCheckout
    class="m-auto -mt-40 mb-10 sticky top-4 z-20 pointer-events-auto"
  />
  <div class="flex flex-col items-center gap-10 z-20">
    <FoodItem
      @buy="AddItem(item)"
      v-for="item in items"
      :name="item.numeProdus"
      :description="item.pret"
      :price="item.pret"
    ></FoodItem>
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

<style scoped></style>
