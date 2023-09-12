<script setup>
import GridSection from "../components/GridSection.vue";
import MacAnimList from "../components/lists/MacAnimList.vue";
import RandomText from "../components/texts/RandomText.vue";
import v1Hamburger from "../components/hamburger/v1Hamburger.vue";
import V2 from "../components/hamburger/V2.vue";
import V3 from "../components/hamburger/V3.vue";
import V4 from "../components/hamburger/V4.vue";
import Cloud from "../components/cursors/Cloud.vue";
import Batman from "../components/cursors/Batman.vue";
import RedCircle from "../components/cursors/RedCircle.vue";
import MovingCard from "../components/cards/MovingCard.vue";
import RotateCard from "../components/cards/RotateCard.vue";
</script>

<template>
  <GridSection>
    <MacNav />
    <RandomText />
    <V1 />
    <V2 />
    <V3 />
    <V4 />
    <Cloud />
    <Batman />
    <RedCircle />
    <MovingCard
      src="/imgs/hassan.png"
      title="Move near me"
      description="hello"
      cta-text="Want help?"
      cta-url="https://t.me/ht3aa"
    />
    <RotateCard
      src="/imgs/hassan.png"
      title="Move near me"
      description="hello"
      cta-text="Want help?"
      cta-url="https://t.me/ht3aa"
    />
  </GridSection>
</template>
