<script setup>
import DropDown from "./components/DropDown.vue";
import MacNav from "./components/navbars/MacNav.vue";
</script>

<template>
  <nav
    class="w-[95%] bg-white mx-auto top-0 left-0 right-0 mt-5 shadow-xl px-5 flex items-center justify-between rounded-xl fixed z-[9999]"
  >
    <img class="w-[60px]" src="/imgs/logo.png" alt="Logo" />
    <div class="w-1/2">
      <MacNav />
    </div>
    <button class="customRounded btnSmallFont">Contact Me</button>
  </nav>
  <div class="w-full h-[500px] absolute overflow-hidden z-10">
    <div
      class="absolute right-[-150px] top-[-120px] w-[500px] h-[500px] bg-[#228BE633] rounded-full"
    ></div>
  </div>
  <div class="w-[95%] mx-auto relative z-40">
    <router-view />
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
