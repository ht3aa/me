<script setup>
import { onMounted, ref } from "vue";

// * get the container div (div with id ham_1)
const hamContainer = ref(null);

onMounted(() => {
  // * the idea is to make library for ham animation.
  // TODO: let the user select the colors of the ham and the time of the animation

  // * get the data from the classes names
  const data = [];

  data.push(hamContainer.value.getAttribute("data-bars_thickness"));
  data.push(hamContainer.value.getAttribute("data-speed"));
  data.push(hamContainer.value.getAttribute("data-middle_bar_color"));
  data.push(hamContainer.value.getAttribute("data-top_down_bars_color"));

  // * create the hamburger icon bars
  const mainBar = document.createElement("div");
  const mainBar_firstHalf = document.createElement("div");
  const mainBar_secondHalf = document.createElement("div");

  // * set the classes of the main bar
  mainBar.classList.add("mainBar");

  mainBar_firstHalf.classList.add("mainBar_firstHalf");
  mainBar_secondHalf.classList.add("mainBar_secondHalf");

  // * set the user data change
  const root = document.querySelector(":root");
  root.style.setProperty("--bars-height", `${data[0]}px`);
  root.style.setProperty("--transition", `all ${data[1]}s ease-in-out`);
  root.style.setProperty("--mainBar-backgroundColor", `${data[2]}`);
  root.style.setProperty("--pseudo-backgroundColor", `${data[3]}`);

  // * add elements to the DOM
  mainBar.appendChild(mainBar_firstHalf);
  mainBar.appendChild(mainBar_secondHalf);
  hamContainer.value.appendChild(mainBar);

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
        }, data[1] * 1000);
      }, data[1] * 1000);
      start = false;
    } else {
      hamContainer.value.classList.remove("toForward");
      setTimeout(() => {
        hamContainer.value.classList.remove("open");
        hamContainer.value.classList.remove("rotateUp");
        hamContainer.value.classList.remove("rotateDown");
        setTimeout(() => {
          hamContainer.value.classList.remove("toBackward");
        }, data[1] * 1000);
      }, data[1] * 1000);
      start = true;
    }
  });
});
</script>

<template>
  <div
    class="w-full h-[200px] flex justify-center items-center border-2 border-black"
  >
    <div
      ref="hamContainer"
      id="ham_1"
      data-bars_thickness="3.7"
      data-speed="0.5"
      data-middle_bar_color="#000000"
      data-top_down_bars_color="#000000"
    ></div>
  </div>
</template>

<style scoped>
:root {
  --bars-height: 3.4px;
  --transition: all 0.5s ease-in-out;
}

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
  height: var(--bars-height);
  position: relative;
  display: flex;
  justify-content: space-between;
}

.mainBar_firstHalf,
.mainBar_secondHalf {
  width: 50%;
  height: 100%;
  background: var(--mainBar-backgroundColor);
  transition: var(--transition);
}

.mainBar_secondHalf {
  direction: rtl;
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

#ham_1.open .mainBar_firstHalf,
#ham_1.open .mainBar_secondHalf {
  width: 5%;
}

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
