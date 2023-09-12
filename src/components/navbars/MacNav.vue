<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";

function customError(msg) {
  return new Error(msg);
}

function get_center_points_x(els) {
  if (!els || !els.length) {
    throw customError("elements parameter is empty");
  }

  let points_x = [];
  for (let i = 0; i < els.length; i++) {
    let point_x = Math.floor(els[i].getBoundingClientRect().x);
    let el_width = Math.floor(els[i].getBoundingClientRect().width);

    points_x.push((point_x + el_width / 2) / 100);
  }

  return points_x;
}

function update_height_width(els, index, y) {
  if (!els || !els.length) {
    throw customError("elements parameter is empty");
  }

  els[index].children[0].children[0].style.width = `${y}px`;
  els[index].children[0].children[0].style.height = `${y}px`;
}

const start = function (e, els, points_x, equation_values) {
  if (!els || !els.length) {
    throw customError("elements parameter is empty");
  }
  let xMouse = e.clientX / 100;

  for (let i = 0; i < els.length; i++) {
    let y =
      equation_values.amplifier *
      Math.sqrt(equation_values.range - Math.pow(xMouse - points_x[i], 2));

    y > equation_values.min_value
      ? update_height_width(els, i, y)
      : update_height_width(els, i, equation_values.min_value);
  }
};

function stop(els, min_value) {
  if (!els || !els.length) {
    throw customError("elements parameter is empty");
  }
  for (let i = 0; i < els.length; i++) {
    update_height_width(els, i, min_value);
  }
}

const parentEl = ref(null);

onMounted(() => {
  const parent_el = parentEl.value;
  const children_of_parent_el = parent_el ? parent_el.children : null;
  const children_x_center_Values = get_center_points_x(children_of_parent_el);
  // you can change these values as you want
  const range = 6;
  const amplifier = 20;
  const min_value = 30;
  if (parent_el !== null) {
    parent_el.addEventListener("mousemove", function (e) {
      start(e, children_of_parent_el, children_x_center_Values, {
        range,
        amplifier,
        min_value,
      });
    });
    parent_el.addEventListener("mouseleave", function () {
      stop(children_of_parent_el, min_value);
    });
  } else {
    customError("The parent element is null");
  }
});

//---------------------------------------------
</script>

<template>
  <ul
    ref="parentEl"
    class="block w-full py-3"
  >
    <li>
      <a
        class="navItem relative"
        href="#hero"
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

        <div
          class="tooltip w-max absolute left-1/2 bottom-[-40px] translate-x-[-50%] bg-white textMainColor borderMainColor shadow-lg py-1 px-4"
        >
          Home
        </div>
      </a>
    </li>
    <li>
      <a
        class="navItem relative"
        href="#aboutMe"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div
          class="tooltip w-max absolute left-1/2 bottom-[-40px] translate-x-[-50%] bg-white textMainColor borderMainColor shadow-lg py-1 px-4"
        >
          About me
        </div>
      </a>
    </li>
    <li>
      <a
        class="navItem relative"
        href="#projects"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
        <div
          class="tooltip w-max absolute left-1/2 bottom-[-40px] translate-x-[-50%] bg-white textMainColor borderMainColor shadow-lg py-1 px-4"
        >
          Projects
        </div>
      </a>
    </li>
    <li>
      <a
        class="navItem relative"
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

        <div
          class="tooltip w-max absolute left-1/2 bottom-[-40px] translate-x-[-50%] bg-white textMainColor borderMainColor shadow-lg py-1 px-4"
        >
          What I offer
        </div>
      </a>
    </li>
    <li>
      <a
        class="navItem relative"
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

        <div
          class="tooltip w-max absolute left-1/2 bottom-[-40px] translate-x-[-50%] bg-white textMainColor borderMainColor shadow-lg py-1 px-4"
        >
          Customers
        </div>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.block {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  list-style: none;
}
ul li {
  border-radius: 10%;
  margin: 0 10px;
  /* background-color: #228be685; */
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul li svg {
  width: 30px;
  height: 30px;
}

ul li:hover {
  cursor: pointer;
}
</style>
