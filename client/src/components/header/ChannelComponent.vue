<script setup lang="ts">
defineProps({
    channel: Object
})
</script>
<template>
    <div class="channel">
        <span>{{ channel?.name }}</span>
        <img :src="channel?.image" alt="">
    </div>
</template>
