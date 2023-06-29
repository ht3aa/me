<!-- goal: https://yasio.dev/ -->

<script setup>
import { onMounted, ref } from "vue";
import VanillaTilt from "vanilla-tilt";

const card = ref(null);

const desiredRange = 25;
const startMoveState = (e) => {
  let minX =
    card.value.getBoundingClientRect().left + card.value.clientWidth / 2;
  let maxX = card.value.clientWidth + minX;

  let originalRangeX = maxX - minX;
  let factorX = desiredRange / originalRangeX;

  let minY =
    card.value.getBoundingClientRect().top + card.value.clientHeight / 2;
  let maxY = card.value.clientHeight + minY;
  let originalRangeY = maxY - minY;
  let factorY = desiredRange / originalRangeY;

  card.value.style.boxShadow = `${(e.clientX - minX) * factorX}px ${
    (e.clientY - minY) * factorY
  }px 5px rgb(180, 180, 180)`;
};

const startLeaveState = () => {
  card.value.style.boxShadow = `2px 2px 5px rgb(180, 180, 180)`;
};

onMounted(() => {
  // docs = https://micku7zu.github.io/vanilla-tilt.js/
  VanillaTilt.init(card.value, {
    max: 25,
    speed: 400,
    perspective: 2000,
    transition: true,
  });
});
</script>

<template>
  <div
    ref="card"
    class="customShadow bg-[#ffffff99]"
    @mousemove="startMoveState"
    @mouseleave="startLeaveState"
  >
    <slot />
  </div>
</template>

<style scoped>
.customShadow {
  box-shadow: 2px 2px 5px rgb(180, 180, 180);
}
</style>
