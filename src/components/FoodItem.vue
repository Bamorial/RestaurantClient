
<script setup>



import ButtonBuy from './ButtonBuy.vue';
defineProps({
    name: String,
    description: String,
    price: String,
    image: String
})



</script>
<template>
    <div class="boxStyle flex ">
       <img src="src/assets/delfina-cocciardi-NDPBK-d-03M-unsplash.jpg" class="h-[80%] w-1/3 bg-slate-300 self-center m-3 rounded-md imageContain">
    <div class="flex flex-col justify-center  w-full">
        <div class="font-serif text-3xl mb-1  ">{{ name }}</div>
        
        <div class=" font-mono  mt-1">{{ description }}</div>
        <div class="flex justify-between">
            <div class="self-center font-semibold font-serif">{{price}}$</div>
            <ButtonBuy class=" -mt-0 mr-10 "></ButtonBuy>
            
            
        </div>
    
    </div>
    
    </div>
    <div class="h-0 w-9/12 border border-black "></div>
    </template>
  
    
