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
      <h1 class="text-4xl lg:text-6xl font-bold">
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
          <button class="px-3 md:px-[25px]">Contact Me</button>
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
        src="/imgs/the_boys.jpg"
        alt="me and the boys"
      >
    </div>
  </section>

  <section
    id="projects"
    class="wrapper grid gap-10 grid-cols-1 md:grid-cols-2 my-5"
  >
    <RotateCard>
      <a href="#hero">
        <div class="flex">
          <img
            class="md:w-1/3 w-[30%] object-cover"
            src="/imgs/me.png"
            alt="portfolio"
          >

          <div class="w-10/12 py-3 px-5 flex flex-col justify-center relative">
            <div
              class="w-[3px] h-[90%] bg-[#228be6] absolute left-1 top-[50%] translate-y-[-50%]"
            />
            <h3 class="text-2xl">Portfolio</h3>
            <p class="text-md">
              Contains information about me, big projects that I has done, and
              what I offer to you as a friend first and customer second.
            </p>
          </div>
        </div>
      </a>
    </RotateCard>
  </section>

  <section
    id="features"
    class="wrapper flex"
  >
    <MovingCard>
      <img
        class="mx-auto md:mx-0 md:w-1/3 w-[200px] object-cover"
        src="/imgs/me_with_green_8ames.jpg"
        alt=""
      >
      <div
        class="w-full md:w-10/12 py-3 px-2 md:px-5 flex flex-col justify-between"
      >
        <div>
          <h2 class="text-3xl md:text-4xl mt-2 md:mt-0 mb-5 text-center">
            What I Can do
          </h2>
          <ol class="text-md my-2 px-6">
            <li class="font-bold">
              Web Developer
            </li>
            <ul class="pl-5 pr-0 md:px-7 mb-5">
              <li>
                I can create beautiful, responsive websites using Vue.js and
                Tailwind CSS.
              </li>
              <li>
                I have experience in all aspects of web development, from design
                to development to deployment.
              </li>
              <li>
                I am a reliable and trustworthy developer who will always meet
                your deadlines.
              </li>
            </ul>
            <li class="font-bold">
              Business Consultant
            </li>
            <ul class="pl-5 pr-0 md:px-7 mb-5">
              <li>
                I can help you to improve your business by providing advice on
                website design, development, and marketing.
              </li>
              <li>
                I am a trusted advisor who will always put your business first.
              </li>
            </ul>
            <li class="font-bold">
              Web Developer Trainer
            </li>
            <ul class="pl-5 pr-0 md:px-7 mb-5">
              <li>
                I can teach you how to become a web developer by providing you
                with the skills and knowledge you need to succeed.
              </li>
              <li>
                I am a patient and understanding instructor who is always
                willing to help you learn.
              </li>
            </ul>
          </ol>
          <p class="my-6">
            I am confident that I can help you with your web development needs.
            Please feel free to contact me to discuss your project in more
            detail.
          </p>
        </div>
        <div class="text-center md:text-start mt-5">
          <a href="mailto:t.d.cc.hassan@gmail.com">
            <button>Contact Me</button>
          </a>
        </div>
      </div>
    </MovingCard>
  </section>
</template>
