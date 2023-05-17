<script setup>
import { onMounted, ref } from "vue";

const mainContainer = ref(null);
const hamContainer = ref(null);
const hideElement = ref(null);

onMounted(() => {
  // * get the elements we need

  // * get the data from the classes names
  const data = [];

  data.push(hamContainer.value.getAttribute("data-bars_thickness"));
  data.push(hamContainer.value.getAttribute("data-speed"));
  data.push(hamContainer.value.getAttribute("data-middle_bar_color"));
  data.push(hamContainer.value.getAttribute("data-top_down_bars_color"));
  data.push(hideElement.value.getAttribute("data-background_color"));

  // * create the hamburger icon bars
  const mainBar = document.createElement("div");

  // * set the classes of the main bar
  mainBar.classList.add("mainBar");

  // * set the user data change
  const root = document.querySelector(":root");
  root.style.setProperty("--bars-height", `${data[0]}px`);
  root.style.setProperty("--transition", `all ${data[1]}s ease-in-out`);
  root.style.setProperty("--mainBar-backgroundColor", `${data[2]}`);
  root.style.setProperty("--pseudo-backgroundColor", `${data[3]}`);
  root.style.setProperty("--hide-backgroundColor", `${data[4]}`);

  // * add elements to the DOM
  hamContainer.value.appendChild(mainBar);

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
  <div
    class="w-full h-[200px] flex justify-center items-center border-2 border-black"
  >
    <div ref="mainContainer" class="ham_Container">
      <div class="circle"></div>
      <div
        ref="hamContainer"
        id="ham_4"
        data-bars_thickness="3.7"
        data-speed="0.5"
        data-middle_bar_color="#000000"
        data-top_down_bars_color="#000000"
      ></div>
      <div ref="hideElement" class="hide" data-background_color="#ffffff"></div>
    </div>
  </div>
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
  background: var(--hide-backgroundColor);
  transition: var(--transition);
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
  height: var(--bars-height);
  position: relative;
  background: var(--mainBar-backgroundColor);
  transition: var(--transition);
}

.mainBar::before,
.mainBar::after {
  content: "";
  width: 100%;
  height: var(--bars-height);
  left: 0;
  top: 0;
  position: absolute;
  background-color: var(--pseudo-backgroundColor);
  transition: var(--transition);
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
