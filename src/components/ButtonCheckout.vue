<template>
    <RouterLink ontouchstart=""  :to="{path:'checkout'}"  class="buttonStyle flex justify-center items-center active:shadow-inner active:translate-x-1 active:translate-y-1">
        <img class="  h-[25px]  w-[25px]  " src="../assets/basket.svg" alt="">

</RouterLink>
    </template>
    <script setup>
    defineProps({
        trigger: Boolean
    })


    </script>