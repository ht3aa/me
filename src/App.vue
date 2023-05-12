<script setup>
import Cloud from "./components/Cloud.vue";
</script>

<template>
  <div class="w-[200px] h-[200px] bg-gray-200 my-[100px] mx-auto">
    click on me
  </div>
  <Cloud />
  <div
    data-cute="true"
    class="w-[200px] h-[200px] bg-gray-400 my-[100px] mx-auto"
  >
    hover on me
  </div>
</template>

<style>
@font-face {
  font-family: dubai;
  src: url("@/assets/fonts/dubai/DubaiW23-Regular.ttf");
}

body {
  font-family: dubai;
}
</style>
