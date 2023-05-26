<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";

// * get the container div (div with id ham_1)
const hamContainer = ref(null);

onMounted(() => {
  // * start the animation
  let start = true;
  hamContainer.value.addEventListener("click", () => {
    if (start) {
      hamContainer.value.classList.add("open");
      hamContainer.value.classList.add("toBackward");
      setTimeout(() => {
        hamContainer.value.classList.add("rotateUp");
        hamContainer.value.classList.add("rotateDown");
        setTimeout(() => {
          hamContainer.value.classList.add("toForward");
        }, 0.5 * 1000);
      }, 0.5 * 1000);
      start = false;
    } else {
      hamContainer.value.classList.remove("toForward");
      setTimeout(() => {
        hamContainer.value.classList.remove("open");
        hamContainer.value.classList.remove("rotateUp");
        hamContainer.value.classList.remove("rotateDown");
        setTimeout(() => {
          hamContainer.value.classList.remove("toBackward");
        }, 0.5 * 1000);
      }, 0.5 * 1000);
      start = true;
    }
  });
});
</script>

<template>
  <Container title="Click on the hamburger icon">
    <div ref="hamContainer" id="ham_1">
      <div class="mainBar">
        <div class="mainBar_firstHalf"></div>
        <div class="mainBar_secondHalf"></div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
#ham_1 {
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
  display: flex;
  background-color: black;
  justify-content: space-between;
}

.mainBar_firstHalf,
.mainBar_secondHalf {
  width: 50%;
  height: 100%;
  background-color: #000000;
  transition: all 0.5s ease-in-out;
}

.mainBar_secondHalf {
  direction: rtl;
}

.mainBar::before,
.mainBar::after {
  content: "";
  width: 100%;
  height: 3.7px;
  left: 0;
  top: 0;
  position: absolute;
  background-color: #000000;
  transition: all 0.5s ease-in-out;
}

.mainBar::before {
  transform: translateY(-7px);
}
.mainBar::after {
  transform: translateY(7px);
}

/* start animation classes */

#ham_1.toBackward .mainBar::before,
#ham_1.toBackward .mainBar::after {
  left: -85%;
}

#ham_1.rotateUp .mainBar::before {
  top: -15px;
  transform: rotate(45deg);
}

#ham_1.rotateDown .mainBar::after {
  top: 15px;
  transform: rotate(-45deg);
}

#ham_1.toForward .mainBar::before,
#ham_1.toForward .mainBar::after {
  left: 0;
  top: 0;
}
</style>
