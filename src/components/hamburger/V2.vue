<script setup>
import { onMounted, ref } from "vue";

// * get the container div (div with id ham_2)
const hamContainer = ref(null);

onMounted(() => {
  // * get the data from the classes names
  const data = [];

  data.push(hamContainer.value.getAttribute("data-bars_thickness"));
  data.push(hamContainer.value.getAttribute("data-speed"));
  data.push(hamContainer.value.getAttribute("data-middle_bar_color"));
  data.push(hamContainer.value.getAttribute("data-top_down_bars_color"));

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

  // * add elements to the DOM
  hamContainer.value.appendChild(mainBar);

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
      }, data[1] * 1000);
      start = false;
    } else {
      hamContainer.value.classList.add("moveAway");
      setTimeout(() => {
        hamContainer.value.classList.remove("backQuckly");
        hamContainer.value.classList.remove("moveAway");
        hamContainer.value.classList.remove("setRotate");
        hamContainer.value.classList.add("resetPosition");
        hamContainer.value.classList.remove("backDisapear");
      }, data[1] * 500);
      // hamContainer.value.classList.remove('backDisapear');
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
      id="ham_2"
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
