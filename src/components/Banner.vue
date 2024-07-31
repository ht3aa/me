<script setup>
import { ref } from "vue"

const state = ref("")

</script>


<template>

  <div class="py-1 text-center w-full text-white"
    :class="state === 'error' ? 'bg-red-700' : state === 'success' ? 'bg-green-700' : 'bg-blue-700'">
    <p>I'm currently Working as Full-stack Programmer at <a class="underline" href="https://ta3leem.iq/">Ta3leem</a></p>
  </div>

</template>


<style scoped></style>
