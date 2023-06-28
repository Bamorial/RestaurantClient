
<script setup>


import ButtonR from './ButtonR.vue';
defineProps({
    title: String
})



</script>
<template>
    <div class="boxStyle flex ">
       <div class="h-2/3 w-1/3 bg-slate-300 self-center m-3 rounded-md">IMG</div>
    <div class="flex flex-col justify-center  w-full">
        <div class="font-serif text-3xl mb-1  ">{{ title }}</div>
        
        <div class=" font-mono  mt-1">salata, castraveti, chifla,burger</div>
        <div class="flex justify-between">
            <div class="self-center font-semibold font-serif">25$</div>
            <ButtonR class="scale-75 mt-0 mr-10  "></ButtonR>
            
        </div>
    
    </div>
    
    </div>
    <div class="h-0 w-9/12 border border-black "></div>
    </template>
  
    
