<script setup>
import LazyImg from "./LazyImg.vue";

defineProps({
  job: Object,
});
</script>

<template>
  <div class="borderMainColor text-center py-2 px-4">
    <LazyImg
      extra-img-classes="w-[150px] mx-auto rounded-full"
      :blurred-img-src="job.blurredImg"
      :main-img-src="job.mainImg"
      :alt="job.alt"
    />
    <h2 class="text-3xl md:text-4xl textMainColor">{{ job.companyName }}</h2>
    <p>
      type of work: <strong>"{{ job.type }}"</strong>
    </p>
    <p class="my-3">
      I worked their as <strong>"{{ job.position }}"</strong>.
    </p>

    <div class="my-5 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div v-for="contribution in job.contributions">
        <strong>"Contribution"</strong>
        <p>Name: {{ contribution.name }}</p>
        <p>Role: {{ contribution.role }}</p>
        <p>
          <a class="textMainColor" :href="contribution.link">{{ contribution.linkName }}</a>
        </p>
      </div>
    </div>
    <em class="my-3"
      ><small>{{ job.from }} - {{ job.to }}</small></em
    >
  </div>
</template>

<style scoped></style>
