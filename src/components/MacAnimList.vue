<script setup>
import { onMounted, ref } from "vue";

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
  <ul ref="parentEl" class="block w-full py-3">
    <slot />
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
</style>
