<script setup>
import RandomText from "../components/RandomText.vue";
import RotateCard from "../components/RotateCard.vue";
import MovingCard from "../components/MovingCard.vue";
import LazyImg from "../components/LazyImg.vue";
import JobsCard from "../components/JobsCard.vue";
import BarChart from "../components/BarChart.vue";
import Doaa from "../components/Doaa.vue";
import SocialMedia from "../components/SocialMedia.vue";
import { customerOpinions, projects, jobs } from "../utils/global";
import { ref } from "vue";

const nOpinionToShow = ref(5);
const increment = ref(0);
const showMoreOpinions = () => {
  increment.value = customerOpinions.columns3.length - nOpinionToShow.value;

  if (increment.value >= 5) {
    increment.value = 5;
  }

  nOpinionToShow.value += increment.value;
};

const showLessOpinions = () => {
  nOpinionToShow.value -= increment.value;
};
</script>

<template>
  <section id="hero" class="flex flex-col lg:flex-row pt-[100px] wrapper">
    <div class="lg:w-[70%] text-center lg:text-start pt-10 lg:pt-20 order-2 lg:order-1">
      <h1 class="text-4xl lg:text-6xl font-bold">Turn your idea to <RandomText /></h1>
      <p class="mx-auto lg:mx-0 md:w-[70%] my-5">
        Unlocking Digital Magic with Hassan Tahseen: Full-Stack Web Developer Extraordinaire!
        Harnessing the Power of Vue.js, Tailwind.css and nest.js, and More. Crafting Unique,
        Captivating Websites Just for You. Trust Hassan Tahseen with Your Vision, Trust Him with
        Your Life!
      </p>
      <div class="flex justify-between mx-auto lg:mx-0 sm:w-[320px]">
        <a href="mailto:t.d.cc.hassan@gmail.com">
          <button class="px-3 md:px-[25px]">Contact Me</button>
        </a>
        <a href="/pdfs/cv.pdf">
          <button class="shadowBtn">My Experience</button>
        </a>
      </div>
    </div>

    <LazyImg
      extra-div-classes="order-1 w-[200px] lg:w-[300px] lg:order-2 mx-auto lg:mx-0"
      extra-img-classes="rounded-full"
      extra-blurred-img-classes="rounded-full"
      blurred-img-src="/imgs/me-small.png"
      main-img-src="/imgs/me.png"
      alt="me and the boys"
    />
  </section>
  <Doaa />

  <section id="jobs" class="wrapper grid gap-10 grid-cols-1 md:grid-cols-3 my-[100px]">
    <JobsCard v-for="job in jobs" :key="job.id" :job="job" />
  </section>

  <section id="aboutMe" class="bgMainColor my-24">
    <div class="flex flex-col lg:flex-row items-center justify-between py-10 wrapper">
      <div
        class="text-white w-[100%] md:w-[75%] text-center mt-5 lg:mt-0 lg:text-start lg:w-[50%] order-2 lg:order-1"
      >
        <h2 class="text-3xl md:text-4xl">About me</h2>
        <p class="text-base md:text-lg my-5">
          I am Hassan Tahseen, a dedicated college student at the University of Technology in
          Baghdad.I worked as a Trainer Assistant at AI Dojo, where I assist in training and
          development, and also utilize my skills as a web developer and trainer. With a solid
          foundation in Wev development and its applications, I am passionate about making
          meaningful contributions to the tech industry. I am grateful for the opportunities that
          have shaped my path and look forward to connecting with like-minded individuals who share
          my enthusiasm for technology and innovation.
        </p>

        <a href="mailto:t.d.cc.hassan@gmail.com">
          <button class="bg-white textMainColor">Contact Me</button>
        </a>
      </div>
      <LazyImg
        extra-div-classes="order-1 lg:order-2"
        extra-img-classes="w-[450px]"
        blurred-img-src="/imgs/the_boys-small.jpg"
        main-img-src="/imgs/the_boys.jpg"
        alt="me and the boys"
      />
    </div>
  </section>

  <section id="projects" class="wrapper grid gap-10 grid-cols-1 md:grid-cols-2">
    <RotateCard v-for="project in projects" :key="project.id">
      <a :href="project.href">
        <div class="flex h-full">
          <LazyImg
            extra-div-classes="md:w-1/3 w-[30%]"
            extra-img-classes="object-cover h-full"
            extra-blurred-img-classes="object-cover h-full aspect-[0.6]"
            :blurred-img-src="project.blurredImg"
            :main-img-src="project.mainImg"
            :alt="project.imgAlt"
          />
          <div class="w-10/12 py-3 px-5 flex flex-col justify-center relative">
            <div class="w-[3px] h-[90%] bgMainColor absolute left-1 top-[50%] translate-y-[-50%]" />
            <h3 class="text-2xl">{{ project.title }}</h3>
            <p class="text-md ">{{ project.description }}</p>
            <em class="font-bold mt-3">click on me to see more.</em>
          </div>
        </div>
      </a>
    </RotateCard>
  </section>

  <section id="features" class="wrapper flex">
    <MovingCard>
      <LazyImg
        extra-div-classes="mx-auto md:mx-0 md:w-1/3 w-[200px]"
        extra-img-classes="object-cover h-full"
        extra-blurred-img-classes="object-cover h-full"
        blurred-img-src="/imgs/me_with_green_8ames-small.jpg"
        main-img-src="/imgs/me_with_green_8ames.jpg"
        alt="Crud Design"
      />
      <div class="w-full md:w-10/12 py-3 px-2 md:px-5 flex flex-col justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl mt-2 md:mt-0 mb-5 text-center">What I Offer</h2>
          <ol class="text-md my-2 px-6">
            <li class="font-bold">Website building</li>
            <ul class="pl-5 pr-0 md:px-7 mb-5">
              <li>I can create beautiful, responsive websites using Vue.js and Tailwind CSS.</li>
              <li>
                I have experience in all aspects of web development, from design to development to
                deployment.
              </li>
              <li>
                I am a reliable and trustworthy developer who will always meet your deadlines.
              </li>
            </ul>
            <li class="font-bold">Web Developement Training</li>
            <ul class="pl-5 pr-0 md:px-7 mb-5">
              <li>
                I can teach you how to become a web developer by providing you with the skills and
                knowledge you need to succeed.
              </li>
              <li>
                I am a patient and understanding instructor who is always willing to help you learn.
              </li>
            </ul>
          </ol>
          <p class="my-6">
            I am confident that I can help you with your web development needs. Please feel free to
            contact me to discuss your project in more detail.
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

  <section id="opinions" class="wrapper">
    <div class="w-full md:w-[70%] mx-auto mb-10">
      <BarChart />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <RotateCard
          v-for="customer in customerOpinions.columns1.slice(0, nOpinionToShow)"
          :key="customer.name"
        >
          <div class="mb-5 py-3 px-5 direction-rtl relative">
            <div
              class="w-[3px] h-[90%] bgMainColor absolute right-1 top-[50%] translate-y-[-50%]"
            />
            <h3 class="text-2xl mb-2">
              {{ customer.name }}
            </h3>
            <p class="text-md">
              {{ customer.opinion }}
            </p>
          </div>
        </RotateCard>
      </div>
      <div>
        <RotateCard
          v-for="customer in customerOpinions.columns2.slice(0, nOpinionToShow)"
          :key="customer.name"
        >
          <div class="mb-5 py-3 px-5 direction-rtl relative">
            <div
              class="w-[3px] h-[90%] bgMainColor absolute right-1 top-[50%] translate-y-[-50%]"
            />
            <h3 class="text-2xl mb-2">
              {{ customer.name }}
            </h3>
            <p class="text-md">
              {{ customer.opinion }}
            </p>
          </div>
        </RotateCard>
      </div>
      <div>
        <RotateCard
          v-for="customer in customerOpinions.columns3.slice(0, nOpinionToShow)"
          :key="customer.name"
        >
          <div class="mb-5 py-3 px-5 direction-rtl relative">
            <div
              class="w-[3px] h-[90%] bgMainColor absolute right-1 top-[50%] translate-y-[-50%]"
            />
            <h3 class="text-2xl mb-2">
              {{ customer.name }}
            </h3>
            <p class="text-md">
              {{ customer.opinion }}
            </p>
          </div>
        </RotateCard>
      </div>
    </div>
  </section>

  <div class="text-center mb-5">
    <button v-if="nOpinionToShow !== customerOpinions.columns3.length" @click="showMoreOpinions">
      show More
    </button>
    <button v-else @click="showLessOpinions">show Less</button>
  </div>

  <section id="socialMedia" class="wrapper">
    <div class="text-center w-[300px] mx-auto my-[100px]">
      <h3>I'm very active on Instgram and Linkedin.</h3>
      <SocialMedia />
    </div>
  </section>
</template>
