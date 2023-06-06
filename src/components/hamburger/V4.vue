<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";

const mainContainer = ref(null);
const hamContainer = ref(null);
const hideElement = ref(null);

onMounted(() => {
  // * start animation
  let start = true;
  hamContainer.value.addEventListener("click", () => {
    if (start) {
      mainContainer.value.classList.add("back");
      mainContainer.value.classList.add("setRotate");
      mainContainer.value.classList.add("moveHide");
      start = false;
    } else {
      mainContainer.value.classList.remove("back");
      mainContainer.value.classList.remove("setRotate");
      mainContainer.value.classList.remove("moveHide");
      start = true;
    }
  });
});
</script>
<template>
  <Container title="Click on the hamburger icon">
    <div
      ref="mainContainer"
      class="ham_Container"
    >
      <div class="circle" />
      <div
        id="ham_4"
        ref="hamContainer"
        data-bars_thickness="3.7"
        data-speed="0.5"
        data-middle_bar_color="#000000"
        data-top_down_bars_color="#000000"
      >
        <div class="mainBar" />
      </div>
      <div
        ref="hideElement"
        class="hide"
        data-background_color="#ffffff"
      />
    </div>
  </Container>
</template>

<style scoped>
.ham_Container {
  width: 36.5px;
  height: 34px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.circle {
  width: 36.5px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  box-sizing: border-box;
}

.hide {
  position: absolute;
  z-index: 2;
  width: 55px;
  height: 34px;
  background: white;
  transition: all 0.5s ease-in-out;
}

#ham_4 {
  width: 26px;
  height: 17px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  z-index: 3;
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
.ham_Container.back .mainBar {
  transform: translateX(-30px);
}

.ham_Container.setRotate .mainBar::before {
  transform: rotate(45deg) translate(21px, -21px);
}

.ham_Container.setRotate .mainBar::after {
  transform: rotate(-45deg) translate(21px, 21px);
}

.ham_Container.moveHide .hide {
  transform: translateX(56px);
}
</style>
