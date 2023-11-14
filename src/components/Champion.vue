<script setup>
import { defineProps } from 'vue';


const props = defineProps({
    data: Object,
    required: true
});

const face =  new URL(props.data.images.face, import.meta.url).href;

</script>

<template>
    <div>
        <!-- Emit a function when mouse hover img -->
        <img
         :src="face"
         :alt="data.name"
         class="fighter"
         @mouseover="$emit('hoverEffectSound', data)"
         @click="$emit('selectedChamp', data)"
        />

    </div>
</template>

<style scoped>
.fighter {
    border: 5px solid transparent;
    cursor: pointer;
    width: 100px;
}
.fighter:hover {
    border: 5px solid rgb(31, 165, 31);
    animation: blink 0.1s infinite alternate;
}

@keyframes blink {
  0% {
    border-color: #CCC;
  }
  100% {
    border-color: green;
  }
}

/* agrega un overlay a cada figther */
.fighter::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
}
</style>
