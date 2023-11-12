<script setup>
const props = defineProps({
    fighter: Object,
    required: true
});
</script>
<template>
    <div class="selected_fighter">
        <img :src="fighter.images.standby" alt="">
    </div>
</template>
<style>
.selected_fighter {
    display: flex;
    justify-content: star;
    align-items: center;
}
</style>