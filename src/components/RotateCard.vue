<!-- goal: https://yasio.dev/ -->
<!-- https://codepen.io/AbubakerSaeed/pen/rNNdvqz -->
<script setup>
import { onMounted, ref } from "vue";

defineProps({
  src: String,
  title: String,
  description: String,
  ctaText: String,
  ctaUrl: String,
});

const card = ref(null);

onMounted(() => {
  let motionSpaceRate = 0.07;

  let cardLeft =
    card.value.getBoundingClientRect().x + card.value.clientWidth / 2;
  let cardTop =
    card.value.getBoundingClientRect().top + card.value.clientHeight / 2;

  card.value.addEventListener("mousemove", (e) => {
    let x = (e.clientX - cardLeft) * motionSpaceRate;
    let y = (e.clientY - cardTop) * motionSpaceRate;
    console.log(x, y);
    card.value.style.transform = `rotateX(${y * 1.2}deg) rotateY(${
      x * 1.2
    }deg)`;
    card.value.style.boxShadow = `${x * 1.2}px ${
      y * 1.2
    }px 5px rgb(120, 120, 120)`;
  });

  card.value.addEventListener("mouseleave", () => {
    card.value.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.value.style.boxShadow = `2px 2px 5px rgb(120, 120, 120)`;
  });
});
</script>

<template>
  <div
    ref="card"
    class="test mx-auto my-20 move w-[550px] flex md:flex-row flex-col bg-gray-100"
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
.test {
  transform-style: preserve-3d;
  transform: perspective(200rem);
  position: relative;
  transition: all 0.2s linear;
  box-shadow: 2px 2px 5px rgb(120, 120, 120);
}
</style>
