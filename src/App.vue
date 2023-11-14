<script setup>
import { ref } from 'vue';
import GridChampions from '@/components/GridChampions.vue';
import SelectedChampion from '@/components/SelectedChampion.vue';
import backgroundMusic from '@/audio/ui/selecting_fighter_background.mp3';

// Valida si el navegador soporta el elemento audio
const audio = document.createElement('audio');
const sound = ref(true);

// Selected fighter by default
let dataFighter = ref({
        key: 'liu_kang',
        name: 'Liu Kang',
        images: {
            face: '../assets/images/fighters/liu_kang/face.webp',
            standby: 'src/assets/images/fighters/liu_kang/standby.webp',
            defeat: '../assets/images/fighters/liu_kang/defeat.webp',
            walking: '../assets/images/fighters/liu_kang/walking.webp',
        },
        audios: {
            selected: '../audio/shaokahn/liu_kang.mp3'
        },
        active: true
    });

// reproduce el sonido una unica vez hasta detenerlo manualmente con click
const playBackgroundMusic = () => {
  if (sound.value) {
    audio.src = backgroundMusic;
    audio.volume = 0.2;
    audio.loop = true;
    audio.play();
  } else {
    audio.pause();
  }
  sound.value = !sound.value;
};

const changeFigther = (dataFighterSelecting) => {
  dataFighter.value = dataFighterSelecting;
};

</script>

<template>
  <div class="screen">
    <span @click="playBackgroundMusic">{{ !sound ? '🔈' : '🔇' }}</span>
    <SelectedChampion :fighter="dataFighter" />
    <GridChampions @changeSeletedFighter="changeFigther"/>
  </div>
</template>

<style scoped>
span {
  cursor: pointer;
  position:fixed;
  top: 0;
  left: 0;
  margin: 5px;
}

.screen {
  display: grid;
  grid-template-columns: 0.8fr 1fr 0.3fr;
  align-items: center;
  justify-items: end;
  margin-top: 50px;
}
</style>
