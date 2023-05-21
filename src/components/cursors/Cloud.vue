<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";

const lighteningImg = ref(null);
const cuteCloudImg = ref(null);
let x = 0,
  y = 0,
  endX = 0,
  endY = 0,
  delay = 8,
  startAgain = false;

const generateBurnMark = (x, y) => {
  let img = document.createElement("img");
  img.setAttribute("src", "/imgs/burnMark.png");
  img.setAttribute(
    "style",
    `left: ${x + 53}px; top:${y + -49}px; position: absolute; width: 20px;`
  );
  document.body.append(img);
};

const isElCute = (el) => {
  if (el.getAttribute("data-cute")) {
    return true;
  } else {
    return false;
  }
};

const startCuteCloudState = () => {
  if (cuteCloudImg.value.getAttribute("data-show") === "false") {
    cuteCloudImg.value.setAttribute("data-show", "true");
    lighteningImg.value.setAttribute("data-show", "false");
    lighteningImg.value.style.left = -150 + "px";
    lighteningImg.value.style.top = 0 + "px";
  }
  // cuteCloudImg.value.style.left = endX + 17 + "px";
  // cuteCloudImg.value.style.top = endY + -150 + "px";
};

const startLighteningCloudState = () => {
  if (lighteningImg.value.getAttribute("data-show") === "false") {
    lighteningImg.value.setAttribute("data-show", "true");
    cuteCloudImg.value.setAttribute("data-show", "false");
    cuteCloudImg.value.style.left = -150 + "px";
    cuteCloudImg.value.style.top = 0 + "px";
  }
  // lighteningImg.value.style.left = endX + 17 + "px";
  // lighteningImg.value.style.top = endY + -150 + "px";
};

const startEnterState = (e) => {
  lighteningImg.value.style.left = endX + 17 + "px";
  lighteningImg.value.style.top = endY + -150 + "px";
  animation(lighteningImg.value);
};

const startMoveState = (e) => {
  endX = e.pageX;
  endY = e.pageY;
  if (startAgain === true) {
    startAgain = false;
    animation(lighteningImg.value);
  }
  // if (isElCute(e.target)) {
  //   if (startAgain === true) {
  //     startAgain = false;
  //     animation(cuteCloudImg.value);
  //   }
  //   startCuteCloudState();
  // } else {
  //   if (startAgain === true) {
  //     startAgain = false;

  //     animation(lighteningImg.value);
  //   }
  //   startLighteningCloudState();
  // }
};

const animation = (el) => {
  x += (endX - x) / delay;
  y += (endY - y) / delay;

  lighteningImg.value.style.left = x + 17 + "px";
  lighteningImg.value.style.top = y + -150 + "px";

  let id = requestAnimationFrame(animation);
  // * it's something better than setInterval()
  if (Math.round(x) === endX && endX !== 0) {
    cancelAnimationFrame(id);
    startAgain = true;
  }
};

const startClickState = () => {
  if (
    lighteningImg.value.getAttribute("data-show") === "true" &&
    lighteningImg.value.getAttribute("src").includes("lightening.png")
  ) {
    lighteningImg.value.setAttribute("src", "imgs/lightening.gif");

    setTimeout(() => {
      generateBurnMark(x, y);
      lighteningImg.value.setAttribute("src", "imgs/lightening.png");
    }, 1000);
  }
};

const startLeaveState = () => {
  lighteningImg.value.setAttribute("data-show", "false");
  lighteningImg.value.style.left = -150 + "px";
  lighteningImg.value.style.top = 0 + "px";
  cuteCloudImg.value.setAttribute("data-show", "false");
  cuteCloudImg.value.style.left = -150 + "px";
  cuteCloudImg.value.style.top = 0 + "px";
};
</script>

<template>
  <Container
    @mouseenter="startEnterState"
    @mousemove="startMoveState"
    @mouseleave="startLeaveState"
    @click="startClickState"
    title="Move and Click inside the box"
  >
    <div class="text-center">
      <img
        data-show="false"
        ref="lighteningImg"
        class="cloud bounce"
        src="/imgs/lightening.png"
        alt="cloud"
      />
      <img
        data-show="false"
        ref="cuteCloudImg"
        class="cloud"
        src="/imgs/cuteCloud.gif"
        alt="cloud"
      />
      <button data-cute="true" class="py-1 px-4 bg-blue-600 text-white">
        hove on me
      </button>
    </div>
  </Container>
</template>

<style scoped>
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
