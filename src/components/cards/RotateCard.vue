<!-- goal: https://yasio.dev/ -->

<script setup>
import { onMounted, ref } from "vue";
import VanillaTilt from "vanilla-tilt";

const card = ref(null);

const startMoveState = (e) => {
  // console.log(e.clientX);
  // TODO for the y

  // original Range = end of the card - start of the card
  // desiredRange = end of the card - 0
  let originalRangeX =
    card.value.getBoundingClientRect().left +
    card.value.clientWidth -
    card.value.getBoundingClientRect().left;
  let desiredRangeX = card.value.clientWidth - 0;
  let factorX = desiredRangeX / originalRangeX;

  let originalRangeY =
    card.value.getBoundingClientRect().top +
    card.value.clientHeight -
    card.value.getBoundingClientRect().top;

  // console.log(card.value.getBoundingClientRect().top);
  let desiredRangeY = card.value.clientHeight - 0;
  let factorY = desiredRangeY / originalRangeY;

  card.value.style.boxShadow = `${
    (e.clientX -
      (card.value.getBoundingClientRect().left + card.value.clientWidth / 2)) *
    factorX *
    0.06
  }px ${
    (e.clientY -
      (card.value.getBoundingClientRect().top + card.value.clientHeight / 2) *
        factorY) *
    0.08
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
