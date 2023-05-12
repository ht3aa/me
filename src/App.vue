<script setup>
import Cloud from "./components/Cloud.vue";
import MovingCard from "./components/MovingCard.vue";
</script>

<template>
  <div class="my-[100px] mx-auto md:w-max">
    <MovingCard
      src="/imgs/hassan.png"
      title="Hassan Tahseen"
      description="someone who you can trust him with your life"
      ctaText="Want help?"
      ctaUrl="https://t.me/ht3aa"
    />
  </div>

  <Cloud />
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
