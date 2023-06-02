<script setup>
import RandomText from "../components/texts/RandomText.vue";
import RotateCard from "../components/cards/RotateCard.vue";
import MovingCard from "../components/cards/MovingCard.vue";
</script>

<template>
  <section
    id="hero"
    class="flex flex-col lg:flex-row pt-[100px] wrapper"
  >
    <div
      class="w-full text-center lg:text-start lg:w-[70%] pt-10 lg:pt-20 order-2 lg:order-1"
    >
      <h1 class="text-3xl lg:text-6xl font-bold">
        Turn your idea to <RandomText />
      </h1>
      <p class="mx-auto lg:mx-0 md:w-[70%] my-5">
        Unlocking Digital Magic with Hassan Tahseen: Front End Web Developer
        Extraordinaire! Harnessing the Power of Vue.js, Tailwind.css, and More.
        Crafting Unique, Captivating Websites Just for You. Trust Hassan Tahseen
        with Your Vision, Trust Him with Your Life!
      </p>
      <div class="flex justify-between mx-auto lg:mx-0 sm:w-[320px]">
        <a href="mailto:t.d.cc.hassan@gmail.com">
          <button>Contact Me</button>
        </a>
        <a
          href="/pdfs/cv.pdf"
          download
        >
          <button class="shadowBtn">My Experience</button>
        </a>
      </div>
    </div>

    <div class="w-[200px] lg:w-[30%] order-1 mx-auto lg:mx-0 lg:order-2">
      <img
        class="rounded-full w-[300px]"
        src="/imgs/me.png"
        alt="Hassan Tahseen"
      >
    </div>
  </section>

  <section
    id="aboutMe"
    class="bg-[#228be6] my-24"
  >
    <div
      class="flex flex-col lg:flex-row items-center justify-between py-10 wrapper"
    >
      <div
        class="text-white w-[100%] md:w-[75%] text-center mt-5 lg:mt-0 lg:text-start lg:w-[50%] order-2 lg:order-1"
      >
        <h2 class="text-3xl md:text-4xl">
          About me
        </h2>
        <p class="text-base md:text-lg my-5">
          I am Hassan Tahseen, a dedicated college student at the University of
          Technology in Baghdad.I worked as a Trainer Assistant at AI Dojo,
          where I assist in training and development, and also utilize my skills
          as a web developer and trainer. With a solid foundation in Wev
          development and its applications, I am passionate about making
          meaningful contributions to the tech industry. I am grateful for the
          opportunities that have shaped my path and look forward to connecting
          with like-minded individuals who share my enthusiasm for technology
          and innovation.
        </p>

        <a href="mailto:t.d.cc.hassan@gmail.com">
          <button class="bg-white text-[#228be6]">Contact Me</button>
        </a>
      </div>
      <img
        class="w-[450px] order-1 lg:order-2"
        src="/imgs/with_the_boys.JPG"
        alt="placeholder"
      >
    </div>
  </section>

  <section
    id="projects"
    class="wrapper grid gap-10 grid-cols-1 md:grid-cols-2 my-5"
  >
    <RotateCard>
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
            consequuntur perspiciatis! Voluptate explicabo quam delectus
            sapiente quaerat ex suscipit laudantium.
          </p>
        </div>
      </div>
    </RotateCard>
    <RotateCard>
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
            consequuntur perspiciatis! Voluptate explicabo quam delectus
            sapiente quaerat ex suscipit laudantium.
          </p>
        </div>
      </div>
    </RotateCard>
    <RotateCard>
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
            consequuntur perspiciatis! Voluptate explicabo quam delectus
            sapiente quaerat ex suscipit laudantium.
          </p>
        </div>
      </div>
    </RotateCard>
    <RotateCard>
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
            consequuntur perspiciatis! Voluptate explicabo quam delectus
            sapiente quaerat ex suscipit laudantium.
          </p>
        </div>
      </div>
    </RotateCard>
  </section>

  <section
    id="features"
    class="wrapper flex"
  >
    <MovingCard />
  </section>
</template>
