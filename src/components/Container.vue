<script setup>
import { onMounted, ref } from "vue";

defineProps({
  extraContainerClasses: {
    type: String,
    default: "",
  },
  extraParentClasses: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

onMounted(() => {});
</script>

<template>
  <div
    :class="`${extraContainerClasses} self-stretch border-2 border-black py-2 `"
  >
    <p class="text-center font-bold mb-4">
      {{ title }}
    </p>
    <div :class="`${extraParentClasses}   flex justify-center items-center`">
      <slot />
    </div>
  </div>
</template>
