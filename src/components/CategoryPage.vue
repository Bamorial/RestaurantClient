<template>
 <div class="flex flex-col items-center gap-10 z-20 ">

    <Item v-for="item in items" :name="item.name" :description="item.description" />




</div>

</template>


<script setup>

import Item from './Item.vue';


const items=[{
    name: "Burger",
    description:"pentru animalul din tine"
},
{
    name: "Pizza",
    description:"sooo Jucy"
},
{
    name: "Desert",
    description:"sugar sugar"
},
{
    name: "Bauturi",
    description:"cu masura"
}
]

</script>