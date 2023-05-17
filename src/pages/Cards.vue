<script setup>
import MovingCard from "../components/cards/MovingCard.vue";
import RotateCard from "../components/cards/RotateCard.vue";
import GridSection from "../components/GridSection.vue";
</script>

<template>
  <GridSection>
    <MovingCard
      src="/imgs/hassan.png"
      title="Move near me"
      description="hello"
      ctaText="Want help?"
      ctaUrl="https://t.me/ht3aa"
    />
    <RotateCard
      src="/imgs/hassan.png"
      title="Hover over me"
      description="hello"
      ctaText="Want help?"
      ctaUrl="https://t.me/ht3aa"
    />
  </GridSection>
</template>
