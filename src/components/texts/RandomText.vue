<script setup>
import { onMounted, ref } from "vue";
import anime from "animejs/lib/anime.es.js";
import Container from "../Container.vue";

const text = ref(null);

const generateRandomUniqueNumbers = (length) => {
  let res = [];
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * length);
    if (res.includes(index)) {
      i--;
    } else {
      res.push(index);
    }
  }
  return res;
};

const equalTheLengths = (a, b, characters) => {
  a = a.replace(
    /\s/gm,
    characters[Math.floor(Math.random() * characters.length)]
  );

  if (a.length > b.length) {
    a = a.substring(0, b.length);
  } else if (a.length < b.length) {
    let diff = b.length - a.length;
    for (let j = 0; j < diff; j++) {
      a += characters[Math.floor(Math.random() * characters.length)];
    }
  }

  return a;
};

const wordToSpecialChar = (word, index, chars) => {
  return (
    word.substring(0, index) +
    chars[index] +
    word.substring(index + 1, word.length)
  );
};

const specialCharToWord = (word, index, charsWord) => {
  return (
    charsWord.substring(0, index) +
    word[index] +
    charsWord.substring(index + 1, charsWord.length)
  );
};

const generateRandomWords = (words) => {
  let speed = 50;
  let stay = 3000;
  let res = [];

  let characters = '!@#$%%^&*()P{}:|""?><';
  let oldState = "";

  for (let i = 0; i < words.length; i++) {
    // [1, 5, 3 ,2 ,7]
    let indexes = generateRandomUniqueNumbers(words[i].length);
    let result = [];

    if (!oldState) oldState = words[i];

    oldState = equalTheLengths(oldState, words[i], characters);

    for (let j = 0; j < words[i].length; j++) {
      oldState = wordToSpecialChar(oldState, indexes[j], characters);
      result.push([oldState, speed]);
    }
    for (let j = 0; j < words[i].length; j++) {
      oldState = specialCharToWord(words[i], indexes[j], oldState);

      if (j + 1 === words[i].length) {
        result.push([oldState, stay]);
      } else {
        result.push([oldState, speed + j * 50]);
      }
    }

    res.push(...result);
  }
  return res;
};

const getLength = (arr) => {
  return arr.map((el) => {
    return el.length;
  });
};

let words = ["Reality", "Business", "Success"];
let shuffleIndexes = generateRandomUniqueNumbers(words.length);

let res = generateRandomWords(
  shuffleIndexes.map((el, index) => words[shuffleIndexes[index]])
);

let counter = 0;
function animate() {
  if (counter === res.length) counter = 0;
  anime({
    targets: text.value,
    duration: res[counter][1],
    easing: "easeInOutCirc",
    begin: function (anim) {
      if (text.value) text.value.innerText = res[counter][0];
    },
    complete: function (anim) {
      counter++;
      animate();
    },
  });
}

onMounted(() => {
  animate();
});
</script>

<template>
  <span ref="text" class="text-[#228be6]" />
</template>
