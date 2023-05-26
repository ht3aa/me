<script setup>
import RandomText from "../components/texts/RandomText.vue";
</script>

<template>
  <section class="flex flex-col lg:flex-row pt-[100px]">
    <div
      class="w-full text-center lg:text-start lg:w-[70%] pt-10 lg:pt-20 order-2 lg:order-1"
    >
      <h1 class="text-5xl lg:text-7xl font-bold">
        Turn your idea to <RandomText />
      </h1>
      <p class="mx-auto lg:mx-0 w-[90%] md:w-[60%] my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas non,
        odit aut consequatur voluptatibus nesciunt labore atque expedita
        sapiente est obcaecati in illo voluptatum molestias. Quaerat, libero
        fuga. Ducimus?
      </p>
      <div class="flex justify-between mx-auto lg:mx-0 w-[320px]">
        <button>Contact Me</button>
        <button class="shadowBtn">My Experience</button>
      </div>
    </div>

    <div class="w-[200px] lg:w-[30%] order-1 mx-auto lg:mx-0 lg:order-2">
      <img
        class="rounded-full w-[300px]"
        src="/imgs/me.png"
        alt="Hassan Tahseen"
      />
    </div>
  </section>
</template>
