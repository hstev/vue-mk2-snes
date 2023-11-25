<script setup>
const props = defineProps({
    fighter: Object,
    required: true
});
</script>
<template>
    <div>
        <img width="200" :src="fighter.images.standby" alt="">
    </div>
</template>