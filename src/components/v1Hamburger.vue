<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

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

  <div ref="hamContainer" class="ham_1 flex lg:hidden" @click="startAnimation()">
    <div class="mainBar bg-black dark:bg-white">
      <div class="mainBar_upper bg-black dark:bg-white"></div>
      <div class="mainBar_firstHalf" />
      <div class="mainBar_secondHalf" />
      <div class="mainBar_lower bg-black dark:bg-white"></div>
    </div>
  </div>

  <div
    class="absolute left-0 top-[70%] w-full bg-white dark:bg-[#181818] dark:text-white z-[-20] rounded-lg"
  >

    <div v-if="showMiniNav" @click="startAnimation()" class="absolute boxWidthHeight left-[-180px] top-0 border-gray-600 z-[-10]"></div>
    <nav
      class=" overflow-y-auto transition-all duration-500"
      :class="showMiniNav ? 'py-5 h-[450px]' : 'h-[0px] py-0 opacity-0'"
    >
      <ul class="list-none" @click="startAnimation()">
        <div class="my-1 w-1/2 text-center mx-auto">
          <p class="borderMainColor">Pages</p>
        </div>
        <div>
          <li>
            <RouterLink
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              :class="route.path === '/' ? 'bg-[#228be6] text-white' : ''"
              to="/"
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

              <span class="ml-2">Home Page</span>
            </RouterLink>
          </li>

          <li>
            <RouterLink
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              :class="route.path === '/podcast' ? 'bg-[#228be6] text-white' : ''"
              to="/podcast"
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
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>

              <span class="ml-2">Podcast Page</span>
            </RouterLink>
          </li>
        </div>
        <div class="my-1 w-1/2 text-center mx-auto">
          <p class="borderMainColor">Sections</p>
        </div>
        <div v-if="route.path === '/'">
          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#jobs"
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
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>

              <span class="ml-2">Jobs</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#cooperatedEntities"
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
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>

              <span class="ml-2">Cooperated Entities</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#recentActions"
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
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
              <span class="ml-2">Recent Actions</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#aboutMe"
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="ml-2">About me</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#projects"
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
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <span class="ml-2">Projects</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#features"
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
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
              <span class="ml-2">What I offer</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#opinions"
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
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <span class="ml-2">Customers</span>
            </a>
          </li>

          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#certificates"
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
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>

              <span class="ml-2">Certificates</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#gifts"
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
                  d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>

              <span class="ml-2">Gifts</span>
            </a>
          </li>
          <li>
            <a
              class="flex items-center px-[20px] py-2 hover:bg-[#228be6] hover:text-white"
              href="#socialMedia"
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
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>

              <span class="ml-2">Social Media</span>
            </a>
          </li>
        </div>
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
.boxWidthHeight {
  width : calc(100vw + 100px);
  height : calc(100vh - 64px);
}
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
  justify-content: space-between;
}

.mainBar_firstHalf,
.mainBar_secondHalf {
  width: 50%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}

.mainBar_secondHalf {
  direction: rtl;
}

.mainBar_lower,
.mainBar_upper {
  content: "";
  width: 100%;
  height: 3.7px;
  left: 0;
  top: 0;
  position: absolute;
  transition: all 0.5s ease-in-out;
}

.mainBar_lower {
  transform: translateY(-7px);
}
.mainBar_upper {
  transform: translateY(7px);
}

/* start animation classes */

.ham_1.toBackward .mainBar_lower,
.ham_1.toBackward .mainBar_upper {
  left: -85%;
}

.ham_1.rotateUp .mainBar_lower {
  top: -15px;
  transform: rotate(45deg);
}

.ham_1.rotateDown .mainBar_upper {
  top: 15px;
  transform: rotate(-45deg);
}

.ham_1.toForward .mainBar_lower,
.ham_1.toForward .mainBar_upper {
  left: 0;
  top: 0;
}
</style>
