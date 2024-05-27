<script setup>
import {ref} from "vue"

const state = ref("success")

</script>


<template>

  <div class="py-1 text-center w-full text-white" :class="state === 'error' ? 'bg-red-700' :  state === 'success' ?'bg-green-700' : 'bg-blue-700'">
    <p>I'm currently online and seeks for a job</p>
  </div>

</template>


<style scoped>

</style>
