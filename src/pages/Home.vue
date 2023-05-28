<script setup>
import RandomText from "../components/texts/RandomText.vue";
</script>

<template>
  <section class="flex flex-col lg:flex-row pt-[100px] w-[95%] mx-auto">
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

  <section class="bg-[#228be6] my-24">
    <div
      class="flex flex-col lg:flex-row items-center justify-between py-10 w-[90%] mx-auto"
    >
      <div
        class="text-white w-[100%] md:w-[75%] text-center mt-5 lg:mt-0 lg:text-start lg:w-[50%] order-2 lg:order-1"
      >
        <h2 class="text-3xl md:text-4xl">About me</h2>
        <p class="text-base md:text-lg my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          accusamus ipsa tempore obcaecati perspiciatis ea minima rem
          consequuntur eligendi dolore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veniam accusamus ipsa tempore obcaecati perspiciatis
          ea minima rem consequuntur eligendi dolore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <button class="bg-white text-[#228be6]">Contact Me</button>
      </div>
      <img
        class="order-1 lg:order-2"
        src="https://placebear.com/g/00/300"
        alt="placeholder"
      />
    </div>
  </section>
</template>
