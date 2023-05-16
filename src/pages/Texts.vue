<script setup>
import { onMounted, ref } from "vue";
import GridSection from "../components/GridSection.vue";
import anime from "animejs/lib/anime.es.js";

const text = ref(null);
let characters = "!@#$%^&*()_+{}|";

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

const generateRandomWords = (words) => {
  let speed = 50;
  let stay = 5000;
  let res = [[words[0], stay]];
  let indexes = generateRandomUniqueNumbers(6);
  let characters = `#$%SF✅❤️👍✌️✍️😀😂😃😄😉😊😍😓😭`;

  let oldState = "";
  for (let i = 1; i < words.length; i++) {
    let indexes = generateRandomUniqueNumbers(words[i].length);
    let result = [];

    if (!oldState) oldState = words[0];
    else if (oldState.length > words[i].length) {
      oldState = oldState
        .substring(0, words[i].length)
        .replace(
          /\s/gm,
          characters[Math.floor(Math.random() * characters.length)]
        );
    } else if (oldState.length < words[i].length) {
      let diff = words[i].length - oldState.length;
      for (let j = 0; j < diff; j++) {
        oldState += characters[Math.floor(Math.random() * characters.length)];
      }
    }

    for (let j = 0; j < words[i].length; j++) {
      oldState =
        oldState.substring(0, indexes[j]) +
        characters[indexes[j]] +
        oldState.substring(indexes[j] + 1, oldState.length);

      result.push([oldState, speed]);
    }
    for (let j = 0; j < words[i].length; j++) {
      oldState =
        oldState.substring(0, indexes[j]) +
        words[i][indexes[j]] +
        oldState.substring(indexes[j] + 1, oldState.length);

      if (j + 1 === words[i].length) {
        result.push([oldState, stay]);
      } else {
        result.push([oldState, speed + j * 50]);
      }
    }

    res.push(...result);
  }
  console.log(res);
  return res;
};

const getLength = (arr) => {
  return arr.map((el) => {
    return el.length;
  });
};

// const getTimeFlow = (arr, resLength) => {
//   let speed = 100;
//   let increaseBy = 3.5;
//   let index = 0;
//   let res = [];
//   let counter = 0;

//   for (let i = 0; i < resLength; i++) {
//     counter++;

//     if (arr[index] === counter) {
//       index++;
//       res.push(counter * speed * increaseBy);
//       counter = 0;
//     } else if (arr[index] - counter <= 3) {
//       res.push(counter * speed * increaseBy);
//     } else {
//       res.push(speed);
//     }
//   }
//   return res;
// };
let words = ["father", "mother", "tahseen", "hider", "web developer", "work"];

let res = generateRandomWords(words);
console.log(res);
let lengths = getLength(words);
let counter = 0;
function animate() {
  // if (counter === res.length) return;
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
  // let times = getTimeFlow(lengths, res.length);

  // setInterval(() => {
  //   if (counter === res.length) counter = 0;
  //   text.value.innerText = res[counter];

  //   counter++;
  //   console.log(times[counter])
  // }, times[counter]);
  // for (let i = 0; i < res.length; i++) {
  //   const tl = gsap.timeline({ repeat: -1 });
  //   tl.to(text.value, times[i], { text: res[i] });
  // }

  animate();
});
</script>

<template>
  <GridSection>
    <div>
      <span ref="text" class="text-5xl"></span>
    </div>
  </GridSection>
</template>
