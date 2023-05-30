<!-- goal: https://yasio.dev/ -->

<script setup>
import { onMounted, ref } from "vue";
import VanillaTilt from "vanilla-tilt";
import Container from "../Container.vue";
defineProps({
  src: String,
  title: String,
  description: String,
  ctaText: String,
  ctaUrl: String,
});

const card = ref(null);

const startMoveState = (e) => {
  // console.log(e.clientX);
  // TODO for the y

  // original Range = end of the card - start of the card
  // desiredRange = end of the card - 0
  let originalRangeX =
    card.value.getBoundingClientRect().left +
    card.value.clientWidth -
    card.value.getBoundingClientRect().left;
  let desiredRangeX = card.value.clientWidth - 0;
  let factorX = desiredRangeX / originalRangeX;

  let originalRangeY =
    card.value.getBoundingClientRect().top +
    card.value.clientHeight -
    card.value.getBoundingClientRect().top;

  // console.log(card.value.getBoundingClientRect().top);
  let desiredRangeY = card.value.clientHeight - 0;
  let factorY = desiredRangeY / originalRangeY;

  card.value.style.boxShadow = `${
    (e.clientX -
      (card.value.getBoundingClientRect().left + card.value.clientWidth / 2)) *
    factorX *
    0.06
  }px ${
    (e.clientY -
      (card.value.getBoundingClientRect().top + card.value.clientHeight / 2) *
        factorY) *
    0.08
  }px 5px rgb(180, 180, 180)`;
};

const startLeaveState = () => {
  card.value.style.boxShadow = `2px 2px 5px rgb(180, 180, 180)`;
};

onMounted(() => {
  // docs = https://micku7zu.github.io/vanilla-tilt.js/
  VanillaTilt.init(card.value, {
    max: 25,
    speed: 400,
    perspective: 2000,
    transition: true,
  });
});
</script>

<template>
  <div
    ref="card"
    @mousemove="startMoveState"
    @mouseleave="startLeaveState"
  >
    <div class="flex">
      <img
        class="md:w-1/3 w-[30%] object-cover"
        src="/imgs/me.png"
        alt=""
      >

      <div class="w-10/12 py-3 px-5 flex flex-col justify-center relative">
        <div
          class="w-[3px] h-[90%] bg-[#228be6] absolute left-1 top-[50%] translate-y-[-50%]"
        />
        <h3 class="text-2xl">
          React
        </h3>
        <p class="text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet iure
          similique ratione, voluptate doloribus, aperiam ad et omnis deleniti
          consequuntur perspiciatis! Voluptate explicabo quam delectus sapiente
          quaerat ex suscipit laudantium.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.customShadow {
  box-shadow: 2px 2px 5px rgb(180, 180, 180);
}
</style>
