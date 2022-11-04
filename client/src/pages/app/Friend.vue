<script setup lang="ts">
import { Ref, ref } from 'vue';


type user = {
    id: number,
    name: string,
    image: string
}

const friends: Ref<Array<user>> = ref([
    {
        id: 1,
        name: 'groupe',
        image: '/img/logo-without-text.svg'
    },
])
</script>


<template>
    <section class="friend-container">
        <div class="friend-wrapper" v-if="friends.length !== 0">
            <h1>Vos amis</h1>
            <div v-for="friend in friends" :key="friend.id" class="friend">
                <img :src="friend?.image" alt="">
                <p>{{ friend?.name }}</p>
            </div>
        </div>
        <div class="no-friend" v-else>
            <p> Vous n'avez pas encore ajouté d'amis</p>
            <div class="button-container">
                <button class="btn add-friends"> Ajouter un ami </button>
                <button class="btn join-server"> Rejoindre un serveur </button>
            </div>
        </div>
    </section>
</template>
