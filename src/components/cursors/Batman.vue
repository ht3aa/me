<script setup>
import { onMounted, ref } from "vue";

const container = ref(null);
const $dot = ref(null);
const $dotOutline = ref(null);
const $Batman = ref(null);
onMounted(() => {
  const cursor = {
    delay: 8,
    startAgain: false, // to stop when cursor stop move and start when cursor move
    _x: 0,
    _y: 0,
    endX: 0,
    endY: 0,

    init: function () {
      this.setEventLists();
      this.animation();
    },

    setEventLists: function () {
      container.value.addEventListener("mouseenter", () => {
        $dot.value.classList.toggle("opc-1");
        $dotOutline.value.classList.toggle("opc-1");
        $Batman.value.setAttribute("src", "/imgs/source-cutout.png");
      });
      container.value.addEventListener("mousemove", (e) => {
        this.endX = e.pageX;
        this.endY = e.pageY;
        $dot.value.style.left = this.endX + "px";
        $dot.value.style.top = this.endY + "px";
        if (this.startAgain === true) {
          this.startAgain = false;
          this.animation();
        }
      });
      container.value.addEventListener("mouseleave", () => {
        $dot.value.classList.toggle("opc-1");
        $dotOutline.value.classList.toggle("opc-1");
      });
      container.value.addEventListener("click", () => {
        $Batman.value.setAttribute("src", "/imgs/source.gif");
        setTimeout(() => {
          $Batman.value.setAttribute("src", "/imgs/source-cutout.png");
        }, 6000);
      });
    },

    animation: function () {
      this._x += (this.endX - this._x) / this.delay;
      this._y += (this.endY - this._y) / this.delay;

      $dotOutline.value.style.left = this._x + 0 + "px";
      $dotOutline.value.style.top = this._y + 0 + "px";

      let id = requestAnimationFrame(this.animation.bind(this));

      // * it's something better than setInterval()

      if (Math.round(this._x) === this.endX && this.endX !== 0) {
        cancelAnimationFrame(id);
        this.startAgain = true;
      }
    },
  };

  cursor.init();
});
</script>

<template>
  <div>
    <p class="text-center font-bold">Click inside the box</p>
    <div
      ref="container"
      class="cursor-none w-full h-[200px] flex justify-center items-center border-2 border-black"
    >
      <div ref="$dotOutline" class="dot-outline">
        <img ref="$Batman" alt="batman" id="batman" />
      </div>
      <div ref="$dot" class="dot"></div>
    </div>
  </div>
</template>

<style scoped>
.dot,
.dot-outline {
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

.dot {
  width: 10px;
  height: 10px;
  background: #af2c2c;
}

.dot-outline {
  width: 170px;
}

.opc-1 {
  opacity: 1;
}
</style>
