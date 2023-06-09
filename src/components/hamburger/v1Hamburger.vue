<script setup>
import { ref } from "vue";

const showMiniNav = ref(false);

// * get the container div (div with id ham_1)
const hamContainer = ref(null);

let start = true;
let animationSpeed = 0.5 * 1000;
const startAnimation = () => {
  if (start) {
    hamContainer.value.classList.add("open");
    hamContainer.value.classList.add("toBackward");
    setTimeout(() => {
      hamContainer.value.classList.add("rotateUp");
      hamContainer.value.classList.add("rotateDown");
      setTimeout(() => {
        hamContainer.value.classList.add("toForward");
      }, animationSpeed);
    }, animationSpeed);
    start = false;
  } else {
    hamContainer.value.classList.remove("toForward");
    setTimeout(() => {
      hamContainer.value.classList.remove("open");
      hamContainer.value.classList.remove("rotateUp");
      hamContainer.value.classList.remove("rotateDown");
      setTimeout(() => {
        hamContainer.value.classList.remove("toBackward");
      }, animationSpeed);
    }, animationSpeed);
    start = true;
  }

  showMiniNav.value = !showMiniNav.value;
  
};


</script>

<template>
  <div
    ref="hamContainer"
    class="ham_1 flex md:hidden"
    @click="startAnimation()"
  >
    <div class="mainBar">
      <div class="mainBar_firstHalf" />
      <div class="mainBar_secondHalf" />
    </div>
  </div>
  <div
    v-if="showMiniNav"
    class="absolute left-0 top-[70%] w-full bg-white z-[-20] rounded-lg"
  >
    <nav class="py-5">
      <ul
        class="list-none"
        @click="startAnimation()"
      >
        <a href="#hero">
          <li
            class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span class="ml-2">Home</span>
          </li>
        </a>
        <a href="#aboutMe">
          <li class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="ml-2">About me</span>
          </li>
        </a>
        <a href="#projects">
          <li class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
            <span class="ml-2">Projects</span>
          </li>
        </a>
        <a href="#features">
          <li class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
            <span class="ml-2">What I offer</span>
          </li>
        </a>
      </ul>
      <div class="py-2 px-[20px]">
        <a href="mailto:t.d.cc.hassan@gmail.com">
          <button class="text-base">Contact Me</button>
        </a>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.ham_1 {
  width: 26px;
  height: 17px;
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

.ham_1.toBackward .mainBar::before,
.ham_1.toBackward .mainBar::after {
  left: -85%;
}

.ham_1.rotateUp .mainBar::before {
  top: -15px;
  transform: rotate(45deg);
}

.ham_1.rotateDown .mainBar::after {
  top: 15px;
  transform: rotate(-45deg);
}

.ham_1.toForward .mainBar::before,
.ham_1.toForward .mainBar::after {
  left: 0;
  top: 0;
}
</style>
