<script setup>
import MacNav from "./components/navbars/MacNav.vue";
import v1Hamburger from "./components/hamburger/v1Hamburger.vue";
</script>

<template>
  <nav
    class="wrapper bg-white py-2 top-2 left-0 right-0 shadow-xl px-5 flex items-center justify-between rounded-xl fixed z-[999]"
  >
    <img
      class="w-[60px]"
      src="/imgs/logo.png"
      alt="Logo"
    >
    <div class="w-1/2 hidden md:block">
      <MacNav />
    </div>

    <a
      class="hidden md:inline"
      href="mailto:t.d.cc.hassan@gmail.com"
    >
      <button class="text-base">Contact Me</button>
    </a>
    <v1-hamburger />
  </nav>
  <div class="w-full h-[500px] absolute overflow-hidden z-10">
    <div
      class="absolute right-[-150px] top-[-120px] w-[500px] h-[500px] bgSecondaryColor rounded-full"
    />
  </div>

  <div
    class="w-full h-[1000px] absolute bottom-[-1200px] left-0 overflow-hidden z-10"
  >
    <div
      class="absolute bottom-[180px] left-[-60px] w-[100px] h-[500px] bgSecondaryColor rotate-[45deg] rounded-[150px]"
    />
    <div
      class="absolute bottom-[120px] left-[90px] w-[100px] h-[600px] bgSecondaryColor rotate-[45deg] rounded-[150px]"
    />
    <div
      class="absolute bottom-[-200px] left-[-20px] w-[100px] h-[700px] bgSecondaryColor rotate-[45deg] rounded-[150px]"
    />
  </div>

  <div class="relative z-40">
    <router-view />
  </div>
</template>
