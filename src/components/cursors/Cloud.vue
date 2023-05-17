<script setup>
import { onMounted, ref } from "vue";

const container = ref(null);
const lighteningImg = ref(null);
const cuteCloudImg = ref(null);

const generateBurnMark = (x, y) => {
  let img = document.createElement("img");
  img.setAttribute("src", "/imgs/burnMark.png");
  img.setAttribute(
    "style",
    `left: ${x + 53}px; top:${y + -49}px; position: absolute; width: 20px;`
  );
  document.body.append(img);
};

onMounted(() => {
  let x = 0;
  let y = 0;
  container.value.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    if (e.target.getAttribute("data-cute")) {
      if (cuteCloudImg.value.getAttribute("data-show") === "false") {
        cuteCloudImg.value.setAttribute("data-show", "true");
        lighteningImg.value.setAttribute("data-show", "false");
        lighteningImg.value.style.left = -150 + "px";
        lighteningImg.value.style.top = 0 + "px";
      }
      cuteCloudImg.value.style.left = x + 17 + "px";
      cuteCloudImg.value.style.top = y + -150 + "px";
    } else {
      if (lighteningImg.value.getAttribute("data-show") === "false") {
        lighteningImg.value.setAttribute("data-show", "true");
        cuteCloudImg.value.setAttribute("data-show", "false");
        cuteCloudImg.value.style.left = -150 + "px";
        cuteCloudImg.value.style.top = 0 + "px";
      }
      lighteningImg.value.style.left = x + 17 + "px";
      lighteningImg.value.style.top = y + -150 + "px";
    }
  });

  container.value.addEventListener("click", () => {
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
  });

  container.value.addEventListener("mouseleave", () => {
    lighteningImg.value.setAttribute("data-show", "false");
    lighteningImg.value.style.left = -150 + "px";
    lighteningImg.value.style.top = 0 + "px";
    cuteCloudImg.value.setAttribute("data-show", "false");
    cuteCloudImg.value.style.left = -150 + "px";
    cuteCloudImg.value.style.top = 0 + "px";
  });
});
</script>

<template>
  <div>
    <p class="text-center font-bold">Move and click inside the box</p>
    <div
      ref="container"
      class="w-full h-[200px] flex justify-center items-center border-2 border-black"
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
    </div>
  </div>
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
