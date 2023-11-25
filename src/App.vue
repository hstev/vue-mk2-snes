<script setup>
import { ref } from 'vue';
import GridFighters from '@/components/GridFighters.vue';
import SelectedFighter from '@/components/SelectedFighter.vue';
import backgroundMusic from '@/audio/ui/selecting_fighter_background.mp3';

import liu_kang_face from '@/assets/images/fighters/liu_kang/face.webp';
import liu_kang_standby from '@/assets/images/fighters/liu_kang/standby.webp';
import liu_kang_defeat from '@/assets/images/fighters/liu_kang/defeat.webp';
import liu_kang_walking from '@/assets/images/fighters/liu_kang/walking.webp';
import liu_kang_selected from '@/audio/shaokahn/liu_kang.mp3';

const audio = document.createElement('audio');
const sound = ref(true);

let dataFighter = ref({
        key: 'liu_kang',
        name: 'Liu Kang',
        images: {
            face: liu_kang_face,
            standby: liu_kang_standby,
            defeat: liu_kang_defeat,
            walking: liu_kang_walking,
        },
        audios: {
            selected: liu_kang_selected,
        },
        active: true
    });

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
    <SelectedFighter :fighter="dataFighter" />
    <GridFighters @changeSeletedFighter="changeFigther"/>
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
