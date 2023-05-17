<!-- goal: https://yasio.dev/ -->

<script setup>
import { onMounted, ref } from "vue";
import VanillaTilt from "vanilla-tilt";
defineProps({
  src: String,
  title: String,
  description: String,
  ctaText: String,
  ctaUrl: String,
});

const card = ref(null);

onMounted(() => {
  // docs = https://micku7zu.github.io/vanilla-tilt.js/
  VanillaTilt.init(card.value, {
    max: 25,
    speed: 400,
    perspective: 1000,
    transition: true,
  });
  let motionSpaceRate = 0.09;
  let cardLeft =
    card.value.getBoundingClientRect().x + card.value.clientWidth / 2;
  let cardTop =
    card.value.getBoundingClientRect().top + card.value.clientHeight / 2;
  card.value.addEventListener("mousemove", (e) => {
    let x = (e.clientX - cardLeft) * motionSpaceRate;
    let y = (e.clientY - cardTop) * motionSpaceRate;

    card.value.style.boxShadow = `${x}px ${y}px 5px rgb(180, 180, 180)`;
  });
  card.value.addEventListener("mouseleave", (e) => {
    card.value.style.boxShadow = `2px 2px 5px rgb(180, 180, 180)`;
  });
});
</script>

<template>
  <div
    ref="card"
    class="customShadow move flex md:flex-row flex-col bg-gray-100"
  >
    <img
      class="md:w-1/3 w-full md:h-auto h-[200px] object-cover object-left-top"
      :src="src"
      alt=""
    />
    <div class="w-10/12 py-3 px-5 flex flex-col justify-between">
      <div>
        <h3 class="text-2xl">{{ title }}</h3>
        <p class="text-md">{{ description }}</p>
      </div>
      <div class="md:mt-0 mt-5">
        <button
          data-cute="true"
          class="mt-auto px-2 py-1 bg-blue-700 text-white cursor-pointer hover:bg-blue-800"
        >
          <a data-cute="true" :href="ctaUrl">{{ ctaText }}</a>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.customShadow {
  box-shadow: 2px 2px 5px rgb(180, 180, 180);
}
</style>
