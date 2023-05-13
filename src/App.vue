<script setup>
import Cloud from "./components/Cloud.vue";
import MovingCard from "./components/MovingCard.vue";
import RotateCard from "./components/RotateCard.vue";
</script>

<template>
  <Cloud />
  <RotateCard
    data-cute="true"
    src="/imgs/hassan.png"
    title="Hassan Tahseen"
    description="hello"
    ctaText="Want help?"
    ctaUrl="https://t.me/ht3aa"
  />
  <div class="w-max mx-auto">
    <MovingCard
      data-cute="true"
      src="/imgs/hassan.png"
      title="Hassan Tahseen"
      description="hello"
      ctaText="Want help?"
      ctaUrl="https://t.me/ht3aa"
    />
  </div>
</template>

<style>
@font-face {
  font-family: dubai;
  src: url("@/assets/fonts/dubai/DubaiW23-Regular.ttf");
}

body {
  font-family: dubai;
}
</style>
