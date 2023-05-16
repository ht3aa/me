<script setup>
import MovingCard from "../components/MovingCard.vue";
import RotateCard from "../components/RotateCard.vue";
import GridSection from "../components/GridSection.vue";
</script>

<template>
  <GridSection>
    <MovingCard
      src="/imgs/hassan.png"
      title="Hassan Tahseen"
      description="hello"
      ctaText="Want help?"
      ctaUrl="https://t.me/ht3aa"
    />
    <RotateCard
      src="/imgs/hassan.png"
      title="Hassan Tahseen"
      description="hello"
      ctaText="Want help?"
      ctaUrl="https://t.me/ht3aa"
    />
  </GridSection>
</template>
