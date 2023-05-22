<script setup>
import DropDown from "./components/DropDown.vue";
</script>

<template>
  <nav class="flex justify-end">
    <DropDown
      title="Select Page"
      :items="[
        { path: '/', text: 'Home' },
        { path: '/cards', text: 'Cards' },
        { path: '/texts', text: 'Texts' },
        { path: '/hamburgers', text: 'Hamburgers' },
        { path: '/navbars', text: 'Navbars' },
        { path: '/cursors', text: 'Cursors' },
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
