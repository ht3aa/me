<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";

// defineProps({
//   src: String,
//   title: String,
//   description: String,
//   ctaText: String,
//   ctaUrl: String,
// });

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
  <div
    ref="container"
    class="mx-auto my-32"
  >
    <div
      ref="card"
      class="move flex md:flex-row flex-col shadow-lg"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.move {
  transition: all 0.2s linear;
}
</style>
