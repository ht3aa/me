<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";

// * get the container div (div with id ham_3)
const hamContainer = ref(null);

onMounted(() => {
  // * start the animation
  let start = true;
  hamContainer.value.addEventListener("click", () => {
    if (start) {
      hamContainer.value.classList.add("resetPosition");
      setTimeout(() => {
        hamContainer.value.classList.add("rotate");
        setTimeout(() => {
          hamContainer.value.classList.add("rotateMore");
        }, 0.5 * 1000);
      }, 0.5 * 1000);
      start = false;
    } else {
      hamContainer.value.classList.remove("rotateMore");
      setTimeout(() => {
        hamContainer.value.classList.remove("rotate");
        setTimeout(() => {
          hamContainer.value.classList.remove("resetPosition");
        }, 0.5 * 1000);
      }, 0.5 * 1000);
      start = true;
    }
  });
});
</script>
<template>
  <Container title="Click on the hamburger icon">
    <div
      id="ham_3"
      ref="hamContainer"
      data-bars_thickness="3.7"
      data-speed="0.5"
      data-middle_bar_color="#000000"
      data-top_down_bars_color="#000000"
    >
      <div class="mainBar" />
    </div>
  </Container>
</template>

<style scoped>
#ham_3 {
  width: 26px;
  height: 17px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
}

.mainBar {
  width: 100%;
  height: 3.7px;
  position: relative;
  background: black;
  transition: all 0.5s ease-in-out;
}

.mainBar::before,
.mainBar::after {
  content: "";
  width: 100%;
  height: 3.7px;
  left: 0;
  top: 0;
  position: absolute;
  background-color: black;
  transition: all 0.5s ease-in-out;
}
.mainBar::before {
  transform: translateY(-7px);
}
.mainBar::after {
  transform: translateY(7px);
}

/* start animation classes */

#ham_3.resetPosition .mainBar::before,
#ham_3.resetPosition .mainBar::after {
  transform: translateY(0px);
}

#ham_3.rotate .mainBar {
  transform: rotate(45deg);
}

#ham_3.rotateMore .mainBar::before,
#ham_3.rotateMore .mainBar::after {
  transform: translateY(0px) rotate(90deg);
}
</style>
