
<template>
<button class="buttonStyle mt-7 flex justify-center items-center active:shadow-inner active:translate-x-1 active:translate-y-1">
    <img class=" h-[30px]  w-[30px]" :src="imageLink" alt="">
</button>
</template>

    <script>
import { onMounted } from 'vue';

   export default
   {
    props:{
        imageLink: String,
    },
    mounted(){

    }
   }
    
    // export default{
    //     data(){
    //         imageLink: "../assets/bascket.svg"
    //     } 
    // }
    
    </script>