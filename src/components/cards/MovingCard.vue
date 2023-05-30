<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";

// defineProps({
//   src: String,
//   title: String,
//   description: String,
//   ctaText: String,
//   ctaUrl: String,
// });

const container = ref(null);
const card = ref(null);

onMounted(() => {
  let motionSpaceRate = 0.07;

  container.value.addEventListener("mousemove", (e) => {
    let containerLeft =
      container.value.getBoundingClientRect().x +
      container.value.clientWidth / 2;
    let containerTop =
      container.value.getBoundingClientRect().top +
      container.value.clientHeight / 2;
    let x = (e.clientX - containerLeft) * motionSpaceRate;
    let y = (e.clientY - containerTop) * motionSpaceRate;

    card.value.style.transform = `translate(${x}px, ${y}px)`;
  });
  container.value.addEventListener("mouseleave", () => {
    card.value.style.transform = `translate(0px, 0px)`;
  });
});
</script>

<template>
  <div
    ref="container"
    class="mx-auto my-32"
  >
    <div
      ref="card"
      class="move flex md:flex-row flex-col shadow-lg"
    >
      <img
        class="mx-auto md:mx-0 md:w-1/3 w-[200px] object-cover object-left-top"
        src="https://placebear.com/g/1000/1200"
        alt=""
      >
      <div
        class="w-full md:w-10/12 py-3 px-5 flex flex-col justify-between text-center md:text-start"
      >
        <div>
          <h3 class="text-2xl">
            Hello mother father
          </h3>
          <p class="text-md px-7 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            repellendus nemo, sapiente soluta itaque adipisci repudiandae
            consequatur hic distinctio possimus!
          </p>
        </div>
        <div class="md:mt-0 mt-5">
          <button data-cute="true">
            <a
              data-cute="true"
              :href="ctaUrl"
            >Show more</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.move {
  transition: all 1s linear;
}
</style>
