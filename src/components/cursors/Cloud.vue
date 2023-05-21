<script setup>
import { onMounted, ref } from "vue";
import Container from "../Container.vue";
import { CloudAnimation } from "./animations";
const lighteningImg = ref(null);
const cuteCloudImg = ref(null);
const cloudAnimation = ref(null);

onMounted(() => {
  cloudAnimation.value = new CloudAnimation(
    lighteningImg.value,
    cuteCloudImg.value
  );
});
</script>

<template>
  <Container
    @mouseenter="cloudAnimation.startEnterState()"
    @mousemove="(e) => cloudAnimation.startMoveState(e)"
    @mouseleave="cloudAnimation.startLeaveState()"
    @click="cloudAnimation.startClickState()"
    title="Move and Click inside the box"
  >
    <div class="text-center">
      <img
        data-show="false"
        ref="lighteningImg"
        class="cloud bounce"
        src="/imgs/lightening.png"
        alt="cloud"
      />
      <img
        data-show="false"
        ref="cuteCloudImg"
        class="cloud"
        src="/imgs/cuteCloud.gif"
        alt="cloud"
      />
      <button data-cute="true" class="py-1 px-4 bg-blue-600 text-white">
        hove on me
      </button>
    </div>
  </Container>
</template>

<style scoped>
.cloud {
  width: 120px;
  position: absolute;
  left: -150px;
  transition: all 0.1s linear;
  z-index: 9999;
}

.bounce {
  animation: bounce 1s linear infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(7px);
  }
}
</style>
