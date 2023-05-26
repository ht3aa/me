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
  els[index].style.width = `${y}px`;
  els[index].style.height = `${y}px`;
  els[index].children[0].style.width = `${y}px`;
  els[index].children[0].style.height = `${y}px`;
  // els[index].style.transform = `scale(${y * 0.1})`;
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
  const amplifier = 22;
  const min_value = 40;
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
  <ul ref="parentEl" class="block w-full py-3">
    <li>
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
    </li>
    <li>
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
