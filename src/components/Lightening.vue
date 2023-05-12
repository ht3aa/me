<script setup>
import { onMounted, ref } from "vue";

const lighteningImg = ref(null);
const cuteCloudImg = ref(null);

const generateBurnMark = (x, y) => {
  let img = document.createElement("img");
  img.setAttribute("src", "src/assets/imgs/burnMark.png");
  img.setAttribute(
    "style",
    `left: ${x + 53}px; top:${y + -49}px; position: absolute; width: 20px;`
  );
  document.body.append(img);
};

onMounted(() => {
  let x = 0;
  let y = 0;
  document.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;

    if (e.target.getAttribute("data-calm")) {
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

  document.addEventListener("click", () => {
    lighteningImg.value.setAttribute("src", "src/assets/imgs/lightening.gif");

    setTimeout(() => {
      generateBurnMark(x, y);
      lighteningImg.value.setAttribute("src", "src/assets/imgs/lightening.png");
    }, 1000);
  });
});
</script>

<template>
  <img
    data-show="false"
    ref="lighteningImg"
    class="cloud w-[120px] absolute"
    style="left: -150px"
    src="@/assets/imgs/lightening.png"
    alt="lightening"
  />
  <img
    data-show="false"
    ref="cuteCloudImg"
    class="cloud w-[120px] absolute"
    style="left: -150px"
    src="@/assets/imgs/cuteCloud.gif"
    alt="lightening"
  />
</template>

<style scoped>
.cloud {
  transition: all 0.1s linear;
}
</style>
