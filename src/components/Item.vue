<template>
<RouterLink ontouchstart="" :to="{path: $route.fullPath+'/' + name}" append class="boxStyle flex active:shadow-inner active:translate-x-1 active:translate-y-1">
   <div class="h-2/3 w-1/3 bg-slate-300 self-center m-3 rounded-md">IMG</div>
<div class="flex flex-col justify-center items-center w-full">
    <div class="font-serif text-4xl mb-2 ">{{ name }}</div>
    <div class="h-0 border border-black w-10/12 mr-4"></div>
    <div class="font-serif text-lg mt-3">{{ description }}</div>

</div>

</RouterLink>
<div class="h-0 w-9/12 border border-black "></div>
</template>
<script setup>
import { RouterView, routeLocationKey, routerKey, routerViewLocationKey } from 'vue-router';
import { RouterLink } from 'vue-router';




defineProps({
    name:String,
    description:String

})

</script>