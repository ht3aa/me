<script setup>
// done by reading https://blog.webdevsimplified.com/2023-05/lazy-load-images/
// https://youtu.be/hJ7Rg1821Q0

import { ref } from "vue";

defineProps({
  extraDivClasses: {
    type: String,
    default: "",
  },
  extraImgClasses: {
    type: String,
    default: "",
  },
  extraBlurredImgClasses: {
    type: String,
    default: "",
  },
  blurredImgSrc: {
    type: String,
    default: "",
  },
  mainImgSrc: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
});

const showBlurredImg = ref(true);
const loaded = () => {
  showBlurredImg.value = false;
}
</script>

<template>
  <div :class="`relative ${extraDivClasses}`">
    <Transition name="fade">
      <div v-if="showBlurredImg">
        <img
          :class="`pulse absolute left-0 top-0 w-full z-[2] ${extraBlurredImgClasses}`"
          :src="blurredImgSrc"
          alt="blurred img"
        >
      </div>
    </Transition>
    <img
      :class="showBlurredImg ? `${extraImgClasses} invisible` : `${extraImgClasses} visible`"
      :src="mainImgSrc"
      :alt="alt"
      loading="lazy"
      @load="loaded"
    >
  </div>
</template>

<style scoped>
.pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
</style>
