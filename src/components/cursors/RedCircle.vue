<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";
import { addClassTo, moveElTo, removeClassFrom } from "./helpers";

const dot = ref(null);
const outlineCircle = ref(null);

let endX = 0,
  endY = 0,
  delay = 8,
  startAgain = false, // to stop when cursor stop move and start when cursor move
  _x = 0,
  _y = 0;

const startEnterState = (cursor, outlineCircle) => {
  addClassTo(cursor, "opc-1");
  addClassTo(outlineCircle, "opc-1");
  animation(outlineCircle);
};

const startMoveState = (e, dot, outlineCircle) => {
  endX = e.pageX;
  endY = e.pageY;
  moveElTo(dot, [endX, endY]);

  if (startAgain === true) {
    startAgain = false;
    animation(outlineCircle);
  }
};

const startUpState = (outlineCircle) => {
  removeClassFrom(outlineCircle, "bg-1");
};
const startDownState = (outlineCircle) => {
  addClassTo(outlineCircle, "bg-1");
};

const startLeaveState = (dot, outlineCircle) => {
  removeClassFrom(dot, "opc-1");
  removeClassFrom(outlineCircle, "opc-1");
};

const animation = (el) => {
  _x += (endX - _x) / delay;
  _y += (endY - _y) / delay;

  moveElTo(el, [_x, _y]);

  let id = requestAnimationFrame(() => animation(el));
  // * it's something better than setInterval()
  if (Math.round(_x) === endX && endX !== 0) {
    cancelAnimationFrame(id);
    startAgain = true;
  }
};
</script>

<template>
  <Container
    @mouseenter="startEnterState(dot, outlineCircle)"
    @mousemove="(e) => startMoveState(e, dot, outlineCircle)"
    @mouseleave="startLeaveState(dot, outlineCircle)"
    @mousedown="startDownState(outlineCircle)"
    @mouseup="startUpState(outlineCircle)"
    extraContainerClasses="cursor-none"
    title="Move and Click inside the box"
  >
    <div ref="outlineCircle" class="dot-outline"></div>
    <div ref="dot" class="dot"></div>
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
  background: red;
}

.dot-outline {
  width: 50px;
  height: 50px;
  border: 2px solid red;
  background-color: rgba(255, 0, 0, 0.1);
}

.opc-1 {
  opacity: 1;
}

.bg-1 {
  background-color: red;
} /*# sourceMappingURL=style.css.map */
</style>
