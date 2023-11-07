<script setup>
import Champion from '@/components/Champion.vue';
import fighters from '@/assets/fightersMapper.js';

const hoverEffectSound = document.createElement('audio');
hoverEffectSound.src = 'src/audio/ui/mk2-00524.mp3';


const playHoverEffectSound = (data) => {{
    hoverEffectSound.volume = 0.1;
    hoverEffectSound.currentTime = 0;
    hoverEffectSound.play();
}};

</script>

<template>
    <div class="select__champion">
        <Champion
         v-for="(fighter, index) in fighters"
         :v-if="fighter.active"
         :key="index"
         :data="fighter"
         @hoverEffectSound="playHoverEffectSound"
        />
    </div>
</template>

<style scoped>
.select__champion {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>