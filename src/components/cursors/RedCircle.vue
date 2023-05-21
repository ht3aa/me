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
    @mouseenter="redCircleAnimation.startEnterState()"
    @mousemove="(e) => redCircleAnimation.startMoveState(e)"
    @mouseleave="redCircleAnimation.startLeaveState()"
    @mousedown="redCircleAnimation.startDownState()"
    @mouseup="redCircleAnimation.startUpState()"
    extraContainerClasses="cursor-none"
    title="Move and Click inside the box"
  >
    <div
      ref="outlineCircle"
      class="redCircle w-[50px] h-[50px] border-2 border-red-600 bg-[#ff00001a]"
    ></div>
    <div ref="dot" class="redCircle w-[10px] h-[10px] bg-red-600"></div>
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
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}
</style>
