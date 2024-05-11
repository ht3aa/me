<script setup>
import {ref} from "vue"

const state = ref("error")

</script>


<template>

  <div class="absolute left-0 top-0 z-[90] py-1 text-center w-full text-white" :class="state === 'error' ? 'bg-red-700' : 'bg-green-700'">
    <p>I'm currently busy with last finals for 5th year in my BME department at University of technology</p>
  </div>

</template>


<style scoped>

</style>
