<template>
  <button class="h-10 w-10 bg-slate-500" ></button>
  <div class="text-center text-4xl font-bold font-serif -mt-40 mb-10">
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
      <li v-for="(item, index) in items" class="grid grid-cols-4 mb-10">
        <div class="text font-serif font-semibold text-lg">{{ item.name }}</div>
        <div
          class="flex justify-center text-sm font-mono font-semibold text-center"
        >
          <div @click="decreaseQuantity(item, index)">-</div>
          <div>{{ item.quantity }}</div>
          <div @click="increaseQuantity(item)">+</div>
        </div>
        <div class="text-sm font-mono font-semibold text-center">
          {{ item.price }}
        </div>
        <button class="chStyle" @click="deleteItem(index)">Delete</button>
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

      sum += Number(item.price) * Number(item.quantity);

    }
    return sum;
  } else {


    return 0;
  }
}
function deleteItem(index) {
  console.log(index);
  items.value.splice(index, 1);
  localStorage.setItem("basket", JSON.stringify(items));
  total = TotalPrice(items);
  console.log(items);
}
</script>
