<script setup>
import Fighter from '@/components/Fighter.vue';
import fighters from '@/assets/fightersMapper.js';
import audioSelectedFighter from '@/audio/ui/selected_fighter.mp3';
import audioSelectingFighter from '@/audio/ui/selecting_fighter_sound.mp3';

const emit = defineEmits(['changeSeletedFighter'])

const hoverEffectSound = document.createElement('audio');
hoverEffectSound.src = audioSelectingFighter;

const selectedFighter = document.createElement('audio');
selectedFighter.src = audioSelectedFighter;

const shaokahnSaysFighterName = document.createElement('audio');

const playHoverEffectSound = (data) => {{
    emit('changeSeletedFighter', data);
    hoverEffectSound.volume = 0.1;
    hoverEffectSound.currentTime = 0;
    hoverEffectSound.play();
}};

const playSelectedFighterSound = () => {
    selectedFighter.volume = 0.1;
    selectedFighter.currentTime = 0; 
    selectedFighter.play();
};

const chooseFighter = (data) => {
    playSelectedFighterSound();
    shaokahnSaysFighterName.src = data.audios.selected;
    shaokahnSaysFighterName.play();
};

</script>

<template>
    <div class="select__fighter">
        <Fighter
         v-for="(fighter, index) in fighters"
         :v-if="fighter.active"
         :key="index"
         :data="fighter"
         @hoverEffectSound="playHoverEffectSound"
         @selectedFighter="chooseFighter"
        />
    </div>
</template>

<style scoped>
.select__fighter {
    display: grid;
    grid-template-columns: auto auto auto auto;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>