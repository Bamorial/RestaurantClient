<template>

  <div class="border border-2 border-black bg-[#FFFCF3] m-10 rounded-lg text-center text-4xl font-bold font-serif -mt-40 mb-10">
    Nota dumneavoastră
  </div>
  <div class="text-center text-2xl font-semibold font-mono mb-10">
    Total: {{ total }}
  </div>
  <div class="m-auto min-h-screen checkStyle flex mb-6 overflow-clip">
    <ul class="w-full m-10">
      <li class="grid grid-cols-4 mb-10">
        <div class="text font-mono font-semibold text-sm">Nume</div>
        <div class="text-sm font-mono font-semibold text-center">Cantitate</div>
        <div class="text-sm font-mono font-semibold text-center">Pret</div>
      </li>
      <li v-for="(item, index) in items" class="grid grid-cols-4 mb-10 gap-3">
        <div class="text font-serif font-semibold text-[15px] -ml-6 ">{{ item.numeProdus }}</div>
        <div
          class="flex justify-center gap-2  text-sm font-mono font-semibold text-center"
        >
          <button ontouchstart=""  class="border border-black littleShadow h-6 rounded-lg w-6 active:shadow-inner active:translate-x-1 active:translate-y-1" @click="decreaseQuantity(item, index)">-</button>
          <div class="text-center " >{{ item.quantity }}</div>
          <button ontouchstart=""  class="border border-black littleShadow h-6 rounded-lg w-6 active:shadow-inner active:translate-x-1 active:translate-y-1" @click="increaseQuantity(item)">+</button>
        </div>
        <div class="text-sm font-mono font-semibold text-center">
          {{ item.pret * item.quantity }}
        </div>
        <button ontouchstart="" class="chStyle active:shadow-none active:translate-x-1 active:translate-y-1 " @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
const items = ref(JSON.parse(localStorage.getItem("basket") || []));
let total = ref(TotalPrice(items));
function decreaseQuantity(item, index) {
  item.quantity--;
  total = TotalPrice(items);
  localStorage.setItem("basket", JSON.stringify(items.value));
  if (item.quantity <= 0) {
    deleteItem(index);

  }
}



function increaseQuantity(item) {
  item.quantity++;
  total = TotalPrice(items);
  localStorage.setItem("basket", JSON.stringify(items.value));
}

function TotalPrice(items) {
  let sum = 0;
  if (Array.isArray(items.value)) {

    for (let item of items.value) {

      sum += Number(item.pret) * Number(item.quantity);

    }
    return sum;
  } else {


    return 0;
  }
}
function deleteItem(index) {
  console.log(index);
  items.value.splice(index, 1);
  items.value.quantity=1;
  console.log(items.value.quantity)
  localStorage.setItem("basket", JSON.stringify(items));
  total = TotalPrice(items);
  console.log(items);
}
</script>
