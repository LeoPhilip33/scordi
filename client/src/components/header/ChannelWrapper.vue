<script setup lang="ts">
import { ref } from 'vue';
import ChannelComponent from './ChannelComponent.vue';

const channels: object = ref([
    {
        name: 'groupe',
        image: '/img/logo-without-text.svg'
    },
    {
        name: 'groupe',
        image: '/img/logo-without-text.svg'
    },
])
</script>
<template>
    <div class="channel-wrapper">
        <ChannelComponent v-for="channel in channels" :key="channel" :channel="channel" />
        <div class="channel add-channel">
            <p>
                +
            </p>
        </div>
    </div>
</template>
