<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";

// * get the container div (div with id ham_2)
const hamContainer = ref(null);

onMounted(() => {
  // * start the animation
  let start = true;
  hamContainer.value.addEventListener("click", () => {
    if (start) {
      hamContainer.value.classList.remove("resetPosition");
      hamContainer.value.classList.add("setRotate");
      hamContainer.value.classList.add("backDisapear");
      hamContainer.value.classList.add("moveAway");
      setTimeout(() => {
        hamContainer.value.classList.add("backQuckly");
        hamContainer.value.classList.remove("moveAway");
      }, 0.5 * 1000);
      start = false;
    } else {
      hamContainer.value.classList.add("moveAway");
      setTimeout(() => {
        hamContainer.value.classList.remove("backQuckly");
        hamContainer.value.classList.remove("moveAway");
        hamContainer.value.classList.remove("setRotate");
        hamContainer.value.classList.add("resetPosition");
        hamContainer.value.classList.remove("backDisapear");
      }, 0.5 * 500);
      // hamContainer.value.classList.remove('backDisapear');
      start = true;
    }
  });
});
</script>
<template>
  <Container title="Click on the hamburger icon">
    <div
      ref="hamContainer"
      id="ham_2"
      data-bars_thickness="3.7"
      data-speed="0.5"
      data-middle_bar_color="#000000"
      data-top_down_bars_color="#000000"
    >
      <div class="mainBar"></div>
    </div>
  </Container>
</template>
<style scoped>
#ham_2 {
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
#ham_2.backDisapear .mainBar {
  transform: translateX(-26px);
  background: transparent;
}
#ham_2.backQuckly .mainBar::before {
  transition: all 0.1s ease-in-out;
}
#ham_2.moveAway .mainBar::before {
  left: 15px;
  top: -15px;
}
#ham_2.setRotate .mainBar::before {
  transform: rotate(45deg) translate(19px, -19px);
}
#ham_2.setRotate .mainBar::after {
  transform: rotate(-45deg) translate(19px, 19px);
}
#ham_2.resetPosition .mainBar::before {
  transform: translate(0px, -7px);
}
#ham_2.resetPosition .mainBar::after {
  transform: translate(0px, 7px);
}
</style>
