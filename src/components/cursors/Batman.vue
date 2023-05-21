<script setup>
import Container from "../Container.vue";
import { onMounted, ref } from "vue";
import { addClassTo, moveElTo, removeClassFrom } from "./helpers";

const $dot = ref(null);
const $dotOutline = ref(null);
const $Batman = ref(null);
let endX = 0,
  endY = 0,
  delay = 8,
  startAgain = false, // to stop when cursor stop move and start when cursor move
  _x = 0,
  _y = 0;

const startEnterState = (e) => {
  $dot.value.classList.toggle("opc-1");
  $dotOutline.value.classList.toggle("opc-1");
  $Batman.value.setAttribute("src", "/imgs/source-cutout.png");
  animation();
};

const startMoveState = (e) => {
  endX = e.pageX;
  endY = e.pageY;
  $dot.value.style.left = endX + "px";
  $dot.value.style.top = endY + "px";
  if (startAgain === true) {
    startAgain = false;
    animation();
  }
};

const startLeaveState = (e) => {
  $dot.value.classList.toggle("opc-1");
  $dotOutline.value.classList.toggle("opc-1");
};

const startClickState = (e) => {
  if ($Batman.value.getAttribute("src") === "/imgs/source-cutout.png") {
    $Batman.value.setAttribute("src", "/imgs/source.gif");
    setTimeout(() => {
      $Batman.value.setAttribute("src", "/imgs/source-cutout.png");
    }, 6000);
  }
};

const animation = (e) => {
  _x += (endX - _x) / delay;
  _y += (endY - _y) / delay;

  $dotOutline.value.style.left = _x + 0 + "px";
  $dotOutline.value.style.top = _y + 0 + "px";

  let id = requestAnimationFrame(animation);

  // * it's something better than setInterval()
  if (Math.round(_x) === endX && endX !== 0) {
    cancelAnimationFrame(id);
    startAgain = true;
  }
};
</script>

<template>
  <Container
    @mouseenter="startEnterState"
    @mousemove="startMoveState"
    @mouseleave="startLeaveState"
    @click="startClickState"
    extraContainerClasses="cursor-none"
    title="Click inside the box"
  >
    <div ref="$dotOutline" class="dot-outline">
      <img ref="$Batman" alt="batman" id="batman" />
    </div>
    <div ref="$dot" class="dot"></div>
  </Container>
</template>

<style scoped>
.dot,
.dot-outline {
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

.dot {
  width: 10px;
  height: 10px;
  background: #af2c2c;
}

.dot-outline {
  width: 170px;
}

.opc-1 {
  opacity: 1;
}
</style>
