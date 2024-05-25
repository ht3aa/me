<script setup>
import { ref, watch } from "vue";
import AudioPlayer from "../components/AudioPlayer.vue";
import { hasanPodcast } from "../utils/global";

const closeAudioPlayer = ref(false);
const audioFileToPlay = ref("");
const audioTitle = ref("");

const toggleAudioPlayer = (audioFile, title) => {
  closeAudioPlayer.value = !closeAudioPlayer.value;
  audioFileToPlay.value = audioFile;
  audioTitle.value = title;
};
</script>

<template>
  <div>
    <section class="wrapper mb-[100px]">
      <div class="text-center pt-10 lg:pt-20">
        <h1 class="text-4xl lg:text-6xl mt-5 font-bold">
          Welcome to <span class="textMainColor">Hasan Podcast</span>
        </h1>
      </div>
    </section>

    <section class="wrapper">
      <div v-for="episode in hasanPodcast" class="p-5 borderMainColor my-5 relative">
        <span class="textMainColor absolute top-[-80px] md:top-[-150px] right-0 font-bold text-[120px] md:text-[200px]">{{episode.number}}</span>
        <em class="text-gray-500">{{episode.date}}</em>
        <h2 class="text-3xl md:text-4xl my-2 font-bold">{{episode.title}}</h2>

        <button @click="() => toggleAudioPlayer(episode.audio, `episode ${episode.number} - ${episode.title}`)">Play</button>
      </div>
    </section>

    <AudioPlayer
      :title="audioTitle"
      :audioFile="audioFileToPlay"
      :close="closeAudioPlayer"
      @closed="toggleAudioPlayer"
    />
  </div>
</template>

<style scoped></style>
