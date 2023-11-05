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
        />

    </div>
</template>

<style scoped>
.fighter {
    border: 4px solid transparent;
    cursor: pointer;
    width: 50px;
}
.fighter:hover {
    border: 4px solid rgb(31, 165, 31);
}
</style>
