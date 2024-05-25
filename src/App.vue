<script setup>
import NavBar from "./components/NavBar.vue";
import v1Hamburger from "./components/v1Hamburger.vue";
import Banner from "./components/Banner.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const darkMode = ref(false);
const route = useRoute();

function toggleDarkMode() {
  darkMode.value = !darkMode.value;

  if (darkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    console.log("hi");
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
onMounted(() => {
  if (localStorage.getItem("theme") === "dark") {
    toggleDarkMode();
  }
});
</script>

<template>
  <Banner />
  <div class="w-full h-[500px] absolute overflow-hidden z-10">
    <div
      class="absolute right-[-150px] top-[-120px] w-[500px] h-[500px] bgSecondaryColor rounded-full"
    />
  </div>

  <!-- TODO: v-if need to be deleted when you have so much podcasts -->
  <div
    v-if="route.path !== '/podcast'"
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

  <div class="relative z-40 dark:text-white">
    <nav
      class="wrapper bg-white dark:bg-[#181818] py-2 shadow-xl px-5 flex items-center justify-between rounded-xl top-[10px] sticky z-[80]"
    >
      <div class="relative navItem">
        <img class="w-[50px] rounded-full" src="/imgs/logo.png" alt="Logo" />
        <div
          class="tooltip w-max absolute left-1/2 bottom-[-40px] translate-x-[-50%] bg-white textMainColor borderMainColor shadow-lg py-1 px-4"
        >
          &lt;Hassan/Web&gt;
        </div>
      </div>
      <div class="hidden lg:block">
        <NavBar />
      </div>

      <div class="flex items-center gap-5 hover:cursor-pointer">
        <a class="hidden lg:inline" href="mailto:t.d.cc.hassan@gmail.com">
          <button class="text-base">Contact Me</button>
        </a>
        <div v-if="!darkMode" @click="toggleDarkMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>

          <div
            class="tooltip w-max absolute left-1/2 bottom-[-40px] translate-x-[-50%] bg-white textMainColor borderMainColor shadow-lg py-1 px-4"
          >
            Dark Mode
          </div>
        </div>
        <div v-else @click="toggleDarkMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
          <div
            class="tooltip w-max absolute left-1/2 bottom-[-40px] translate-x-[-50%] bg-white textMainColor borderMainColor shadow-lg py-1 px-4"
          >
            Light Mode
          </div>
        </div>
      </div>
      <v1-hamburger />
    </nav>
    <router-view />
  </div>
</template>
