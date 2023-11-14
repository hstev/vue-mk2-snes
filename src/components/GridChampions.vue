<script setup>
import Champion from '@/components/Champion.vue';
import fighters from '@/assets/fightersMapper.js';
const emit = defineEmits(['changeSeletedFighter'])

const hoverEffectSound = document.createElement('audio');
hoverEffectSound.src = 'src/audio/ui/selecting_fighter_sound.mp3';

const selectedChampSound = document.createElement('audio');
selectedChampSound.src = 'src/audio/ui/selected_fighter.mp3';

const shaokahnSaysFigtherName = document.createElement('audio');

const playHoverEffectSound = (data) => {{
    emit('changeSeletedFighter', data);
    hoverEffectSound.volume = 0.1;
    hoverEffectSound.currentTime = 0;
    hoverEffectSound.play();
}};

const playSelectedChampSound = (data) => {
    selectedChampSound.volume = 0.1;
    selectedChampSound.currentTime = 0;
    selectedChampSound.play();
};

const chooseFighter = (data) => {
    playSelectedChampSound();
    shaokahnSaysFigtherName.src = `src/audio/shaokahn/names/${data.key}.mp3`;
    shaokahnSaysFigtherName.play();
};

</script>

<template>
    <div class="select__champion">
        <Champion
         v-for="(fighter, index) in fighters"
         :v-if="fighter.active"
         :key="index"
         :data="fighter"
         @hoverEffectSound="playHoverEffectSound"
         @selectedChamp="chooseFighter"
        />
    </div>
</template>

<style scoped>
.select__champion {
    display: grid;
    grid-template-columns: auto auto auto auto;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>