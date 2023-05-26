<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";

defineProps({
  src: String,
  title: String,
  description: String,
  ctaText: String,
  ctaUrl: String,
});

const container = ref(null);
const card = ref(null);

onMounted(() => {
  let motionSpaceRate = 0.07;

  container.value.addEventListener("mousemove", (e) => {
    let containerLeft =
      container.value.getBoundingClientRect().x +
      container.value.clientWidth / 2;
    let containerTop =
      container.value.getBoundingClientRect().top +
      container.value.clientHeight / 2;
    let x = (e.clientX - containerLeft) * motionSpaceRate;
    let y = (e.clientY - containerTop) * motionSpaceRate;

    card.value.style.transform = `translate(${x}px, ${y}px)`;
  });
  container.value.addEventListener("mouseleave", () => {
    card.value.style.transform = `translate(0px, 0px)`;
  });
});
</script>

<template>
  <Container
    title="move mouse around the Card"
    extraContainerClasses="col-span-2"
    extraParentClasses="w-[60%] mx-auto"
  >
    <div ref="container">
      <div
        ref="card"
        class="move flex md:flex-row flex-col bg-gray-100 shadow-lg"
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
    </div>
  </Container>
</template>

<style scoped>
.move {
  transition: all 1s linear;
}
</style>
