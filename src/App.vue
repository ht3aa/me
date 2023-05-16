<script setup>
import Cloud from "./components/Cloud.vue";

import DropDown from "./components/DropDown.vue";
</script>

<template>
  <nav class="flex justify-end">
    <DropDown
      title="Components"
      :items="[
        { path: '/cards', text: 'Cards' },
        { path: '/texts', text: 'Texts' },
      ]"
    />
  </nav>
  <router-view />
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
