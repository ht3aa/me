<script setup>
import NavBar from "./components/NavBar.vue";
import v1Hamburger from "./components/v1Hamburger.vue";
import Banner from "./components/Banner.vue";
</script>

<template>
  <Banner />
  <div class="w-full h-[500px] absolute overflow-hidden z-10">
    <div
      class="absolute right-[-150px] top-[-120px] w-[500px] h-[500px] bgSecondaryColor rounded-full"
    />
  </div>

  <div class="w-full h-[1000px] absolute bottom-[-1200px] left-0 overflow-hidden z-10">
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
    <nav
      class="wrapper bg-white py-2 shadow-xl px-5 flex items-center justify-between rounded-xl top-[10px] sticky z-[80]"
    >
      <div class="relative navItem">
        <img class="w-[50px] rounded-full" src="/imgs/logo.png" alt="Logo" />
        <div
          class="tooltip w-max absolute left-1/2 bottom-[-40px] translate-x-[-50%] bg-white textMainColor borderMainColor shadow-lg py-1 px-4"
        >
          &lt;Hassan/Web&gt;
        </div>
      </div>
      <div class="w-1/2 hidden lg:block">
        <NavBar />
      </div>

      <a class="hidden lg:inline" href="mailto:t.d.cc.hassan@gmail.com">
        <button class="text-base">Contact Me</button>
      </a>
      <v1-hamburger />
    </nav>
    <router-view />
  </div>
</template>
