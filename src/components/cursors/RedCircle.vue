<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";
import { RedCircleAnimation } from "./animations";

const dot = ref(null);
const outlineCircle = ref(null);
const redCircleAnimation = ref(null);

onMounted(() => {
  redCircleAnimation.value = new RedCircleAnimation(
    dot.value,
    outlineCircle.value
  );
});
</script>

<template>
  <Container
    extra-container-classes="cursor-none"
    title="Move and Click inside the box"
    @mouseenter="redCircleAnimation.startEnterState(dot, outlineCircle)"
    @mousemove="(e) => redCircleAnimation.startMoveState(e, dot, outlineCircle)"
    @mouseleave="redCircleAnimation.startLeaveState(dot, outlineCircle)"
    @mousedown="redCircleAnimation.startDownState()"
    @mouseup="redCircleAnimation.startUpState()"
    @mouseover="(e) => redCircleAnimation.startOverState(e)"
  >
    <div
      ref="outlineCircle"
      class="redCircle w-[50px] h-[50px] border-2 border-red-600 bg-[#ff00001a]"
    />
    <div
      ref="dot"
      class="redCircle w-[10px] h-[10px] bg-red-600"
    />
    <button class="cursor-none py-1 px-4 bg-blue-600 text-white">
      hover on me
    </button>
  </Container>
</template>

<style scoped>
.redCircle {
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}
</style>
