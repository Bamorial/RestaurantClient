<template>
    <div class="text-center text-4xl font-bold font-serif -mt-40 mb-10">Nota dumneavoastră</div>
     <div class=" m-auto min-h-screen checkStyle flex mb-6 overflow-clip ">
        <ul class="w-full m-10">
            <li class="grid grid-cols-4 mb-10">
                <div class="text font-mono font-semibold text-sm ">Nume</div>
                <div class="text-sm font-mono font-semibold text-center">Cantitate</div>
                <div class="text-sm font-mono font-semibold text-center">Pret</div>
            </li>
            <li v-for="(item, index) in items" class="grid grid-cols-4 mb-10">
                <div class="text font-serif font-semibold text-lg ">{{ item.name }}</div>
                <div class="text-sm font-mono font-semibold text-center">1</div>
                <div class="text-sm font-mono font-semibold text-center">{{ item.price }}</div>
                <button class="chStyle" @click="deleteItem(index)">Delete</button>
            </li>

        </ul>

     </div>
</template>
<script setup>
import { ref } from 'vue';
const items=ref(JSON.parse(localStorage.getItem('basket') || []))


function deleteItem(index){
    console.log(index)
    items.value.splice(index,1)
    localStorage.setItem('basket',JSON.stringify(items))
    console.log(items)
}

</script>