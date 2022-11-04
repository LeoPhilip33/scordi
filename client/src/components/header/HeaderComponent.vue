<script setup lang="ts">
import { ref } from 'vue';
import ChannelWrapper from './ChannelWrapper.vue';


</script>
<template>
    <header>
        <router-link class="logo-container" :to="{ name: 'Friend' }"><img src="/img/logo.svg" alt=""></router-link>
        <hr>
        <ChannelWrapper />
    </header>
</template>
