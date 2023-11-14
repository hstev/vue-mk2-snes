<script setup>
const props = defineProps({
    fighter: Object,
    required: true
});
</script>
<template>
    <div class="selected_fighter">
        <img width="200" :src="fighter.images.standby" alt="">
    </div>
</template>
<style>
.selected_fighter {

}
</style>