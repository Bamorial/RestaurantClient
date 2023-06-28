<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
 <div class=" bg-slate-500">HelloWorld</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
