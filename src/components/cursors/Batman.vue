<script setup>
import Container from "../Container.vue";
import { onMounted, ref } from "vue";
import { addClassTo, moveElTo, removeClassFrom, show, hide } from "./helpers";
import { BatmanAnimation } from "./animations";

const dot = ref(null);
const outlineCircle = ref(null);
const batman = ref(null);
const batmanAnimation = ref(null);

onMounted(() => {
  batmanAnimation.value = new BatmanAnimation(
    dot.value,
    outlineCircle.value,
    batman.value
  );
});
</script>

<template>
  <Container
    @mouseenter="batmanAnimation.startEnterState(dot, outlineCircle)"
    @mousemove="(e) => batmanAnimation.startMoveState(e, dot, outlineCircle)"
    @mouseleave="batmanAnimation.startLeaveState(dot, outlineCircle)"
    @click="batmanAnimation.startClickState()"
    extraContainerClasses="cursor-none"
    title="Click inside the box"
  >
    <div ref="outlineCircle" class="Batman w-[170px]">
      <img
        src="/imgs/source-cutout.png"
        ref="batman"
        alt="batman"
        id="batman"
      />
    </div>
    <div ref="dot" class="Batman w-[10px] h-[10px] bg-[#af2c2c]"></div>
  </Container>
</template>

<style scoped>
.Batman {
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
