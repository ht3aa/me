<script setup>
import LazyImg from "../LazyImg.vue";

defineProps({
  job: Object
})
</script>

<template>
  <div class="borderMainColor text-center py-2">
    <LazyImg
      extra-img-classes="w-[150px] mx-auto rounded-full"
      :blurred-img-src="job.blurredImg"
      :main-img-src="job.mainImg"
      :alt="job.alt"
    />
    <h2 class="text-3xl md:text-4xl textMainColor">{{ job.companyName }}</h2>
    <p class="my-3">
      I worked thier as <strong>"{{ job.position }}"</strong
      >.
    </p>
    <em class="my-3"><small>{{ job.from }} - {{ job.to }}</small></em>
  </div>
</template>

<style scoped></style>
