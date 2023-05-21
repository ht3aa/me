<script setup>
import { onMounted, ref } from "vue";

defineProps({
  extraContainerClasses: {
    type: String,
    default: "",
  },
  title: String,
});

onMounted(() => {});
</script>

<template>
  <div class="border-2 border-black py-2">
    <p class="text-center font-bold">{{ title }}</p>
    <div
      :class="
        `${extraContainerClasses} ` +
        'w-full h-[200px] flex justify-center items-center '
      "
    >
      <slot></slot>
    </div>
  </div>
</template>
