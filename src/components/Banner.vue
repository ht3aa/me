<script setup>
import {ref} from "vue"

const state = ref("success")

</script>


<template>

  <div class="py-1 text-center w-full text-white" :class="state === 'error' ? 'bg-red-700' :  state === 'success' ?'bg-green-700' : 'bg-blue-700'">
    <p>I'm currently online and seeks for a job. <a class="underline" href="https://t.me/ht3aa" >Telegram</a> - <a class="underline" href="https://github.com/ht3aa">Github</a> - <a class="underline" href="https://www.linkedin.com/in/hassan-tahseen-3a9b2b1b0/">Linkedin</a></p>
  </div>

</template>


<style scoped>

</style>
