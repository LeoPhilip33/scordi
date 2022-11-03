<script setup lang="ts">
    defineProps({
        isError: Boolean
    })
</script>


<template>
    <div class="error-container">
        <p v-if="isError" class="error"> Merci de remplir les champs manquants</p>
    </div>
</template>
