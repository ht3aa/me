<script setup>
const lighteningImg = ref(null);
import { onMounted, ref } from "vue";

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

    lighteningImg.value.style.left = x + 17 + "px";
    lighteningImg.value.style.top = y + -150 + "px";
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
    ref="lighteningImg"
    class="lighteningImg w-[120px] h-[120px] absolute"
    style="left: -100px"
    src="@/assets/imgs/lightening.png"
    alt="lightening"
  />
</template>

<style scoped>
.lighteningImg {
  transition: all 0.1s linear;
}
</style>
