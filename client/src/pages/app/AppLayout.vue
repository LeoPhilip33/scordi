<script setup lang="ts">
import HeaderComponent from '../../components/header/HeaderComponent.vue'
</script>


<template>
    <section class="app-container">
        <HeaderComponent />
        <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
                <component class="  main-component" :is="Component"></component>
            </transition>
        </router-view>
    </section>
</template>
