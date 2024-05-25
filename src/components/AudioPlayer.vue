<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  title: String,
  close: Boolean,
  audioFile: String,
});

const audio = ref(null);
const playing = ref(false);
const mute = ref(false);
const duration = ref("0:00");
const audioSlider = ref(0);
const currentAudioSliderTime = ref("0:00");

const reset = () => {
  playing.value = false;
  mute.value = false;
  duration.value = "0:00";
  audioSlider.value = 0;
  currentAudioSliderTime.value = "0:00";
  audio.value.currentTime = 0;
};

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

const handleLoadMetaData = (e) => {
  duration.value = calculateTime(e.target.duration);
  audioSlider.value.max = Math.floor(e.target.duration);
};

const handleAudioSlider = (e) => {
  if (e.target.value > 0) {
    audio.value.currentTime = e.target.value;
  }
  currentAudioSliderTime.value = calculateTime(audio.value.currentTime);
};

const handleVolumeSlider = (e) => {
  audio.value.volume = e.target.value / 100;
  if (e.target.value == 0) {
    mute.value = true;
  } else {
    mute.value = false;
  }
};

const handleAudioSpeed = (e) => {
  audio.value.playbackRate = e.target.value;
};

const handelPlayingAndPausing = () => {
  playing.value = !playing.value;
  if (playing.value) {
    audio.value.play();
  } else {
    audio.value.pause();
  }
};
</script>

<template>
  <div
    class="wrapper bg-white borderMainColor transition-all dark:bg-[#181818] py-2 shadow-xl px-5 rounded-xl left-[50%] translate-x-[-50%] fixed z-[80]"
    :class="close ? 'opacity-100 bottom-[10px]' : 'opacity-0 bottom-[-150px]'"
  >
    <audio
      @timeupdate="handleAudioSlider"
      ref="audio"
      @loadedmetadata="handleLoadMetaData"
      :src="audioFile"
      preload="metadata"
    ></audio>
    <div class="flex items-center justify-between">
      <p class="mb-2">{{ title }}</p>
      <div
        class="cursor-pointer"
        @click="
          () => {
            reset();
            $emit('closed');
          }
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[30px]"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    <div class="flex items-center flex-col md:flex-row">
      <img class="w-[50px] rounded-full mr-3 my-3 md:my-0" src="/imgs/logo.png" alt="Logo" />
      <div class="text-start flex items-center  w-full flex-col md:flex-row">
        <div class="flex items-center w-full md:w-[50%]">
          <div @click="handelPlayingAndPausing" class="cursor-pointer">
            <svg
              v-if="!playing"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-[30px]"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-[30px]"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          </div>
          <span>{{ currentAudioSliderTime }}</span>
          <input
            @change="handleAudioSlider"
            @input="handleAudioSlider"
            ref="audioSlider"
            class="w-[100%] mx-3"
            type="range"
            max="100"
            value="0"
          />
          <span>{{ duration }}</span>
        </div>

        <div class="ml-3 flex items-center my-3 md:my-0 w-full md:w-[30%]">
          <div @click="handelPlayingAndPausing" class="mr-3 cursor-pointer">
            <svg
              v-if="!mute"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-[30px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-[30px]"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          </div>

          <input @input="handleVolumeSlider" class="w-full md:w-[250px]" type="range" max="100" value="50" />
        </div>
        <div class="w-full md:w-[100px] text-center">
          <select
            @change="handleAudioSpeed"
            class="w-[200px] md:w-[100px] ml-3 bg-gray px-3 py-1 rounded-lg dark:text-black"
          >
            <option value="0.5">0.5x</option>
            <option selected value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
