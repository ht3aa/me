<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  text: String,
  classes: String,
  gbresh: String,
});

const button = ref(null);
const glyphArr = [];
let intervalId = null;
let originalText = props.text;

const glyphrize = (text) => {

  for (let i = 0; i < text.length; i++) {
    const textArr = text.split("");
    let gbreshIndex = 0;

    if (i == 0) {
      textArr[i] = props.gbresh[i];
    } else {
      for (let j = i; j > i - props.gbresh.length && j > -1; j--) {
        textArr[j] = props.gbresh[gbreshIndex];

        gbreshIndex++;
      }
    }

    glyphArr.push(textArr.join(""));
  }

  for (let i = 1; i < props.gbresh.length; i++) {
    const textArr = text.split("");
    let gbreshIndex = 0;

    for (let j = text.length - 1; j > text.length - 1 - props.gbresh.length + i; j--) {
      textArr[j] = props.gbresh[gbreshIndex + i];
      gbreshIndex++;
    }

    glyphArr.push(textArr.join(""));
  }

  glyphArr.push(text);
};

const handelMouseEnter = () => {
  let i = 0;

  intervalId = setInterval(() => {
    if (i === glyphArr.length - 1) {
      clearInterval(intervalId);
    }

    button.value.innerText = glyphArr[i];
    i++;
  }, 50);
};

const handelMouseLeave = () => {
  clearInterval(intervalId);
  button.value.innerText = originalText;
};

onMounted(() => {
  glyphrize(props.text);
});
</script>

<template>
  <button
    :class="classes"
    @mouseenter="handelMouseEnter"
    @mouseleave="handelMouseLeave"
    ref="button"
  >
    {{ text }}
  </button>
</template>

<style scoped></style>
