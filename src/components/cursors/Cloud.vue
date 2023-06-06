<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";
import { CloudAnimation } from "./animations";

const lighteningImg = ref(null);
const cloudAnimation = ref(null);
const dot = ref(null);

onMounted(() => {
  cloudAnimation.value = new CloudAnimation(dot.value, lighteningImg.value);
});
</script>

<template>
  <Container
    extra-container-classes="cursor-none"
    title="Move and Click inside the box"
    @mouseenter="cloudAnimation.startEnterState(dot, lighteningImg, [17, -150])"
    @mousemove="
      (e) => cloudAnimation.startMoveState(e, dot, lighteningImg, [17, -150])
    "
    @mouseleave="cloudAnimation.startLeaveState(lighteningImg, dot)"
    @mouseover="(e) => cloudAnimation.startOverState(e)"
    @click="cloudAnimation.startClickState()"
  >
    <img
      ref="lighteningImg"
      class="cloud bounce"
      src="/imgs/lightening.png"
      alt="cloud"
    >
    <div
      ref="dot"
      class="redCircle w-[10px] h-[10px] bg-yellow-300"
    />
    <button class="py-1 px-4 bg-blue-600 text-white">
      hove on me
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
.cloud {
  width: 120px;
  position: absolute;
  left: -150px;
  transition: all 0.1s linear;
  z-index: 9999;
}

.bounce {
  animation: bounce 1s linear infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(7px);
  }
}
</style>
