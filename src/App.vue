<script setup>
import { ref } from 'vue';
import GridChampions from '@/components/GridChampions.vue';
import SelectedChampion from '@/components/SelectedChampion.vue';

// Valida si el navegador soporta el elemento audio
const audio = document.createElement('audio');
const sound = ref(true);

// Selected fighter by default
const dataFighter = {
        key: 'liu_kang',
        name: 'Liu Kang',
        images: {
            face: '../assets/images/fighters/liu_kang/face.webp',
            standby: '../assets/images/fighters/liu_kang/standby.webp',
            defeat: '../assets/images/fighters/liu_kang/defeat.webp',
            walking: '../assets/images/fighters/liu_kang/walking.webp',
        },
        audios: {},
        active: true
    };
const fighter = ref(dataFighter);

// reproduce el sonido una unica vez hasta detenerlo manualmente con click
const playBackgroundMusic = () => {
  if (sound.value) {
    audio.src = 'src/audio/ui/selecting_fighter_background.mp3';
    audio.volume = 0.2;
    audio.loop = true;
    audio.play();
  } else {
    audio.pause();
  }
  sound.value = !sound.value;
};

</script>

<template>
  <div>
    <span @click="playBackgroundMusic">{{ !sound ? '🔈' : '🔇' }}</span>
    <SelectedChampion :fighter="fighter" />
    <GridChampions />
  </div>
</template>

<style scoped>
span{
  cursor: pointer;
  position:fixed;
  top: 0;
  left: 0;
  margin: 5px;
}
</style>
