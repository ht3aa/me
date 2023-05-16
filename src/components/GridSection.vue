<template>
  <section class="customGrid gap-10 w-[90%] mx-auto my-10">
    <slot></slot>
  </section>
</template>

<style scoped>
.customGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
