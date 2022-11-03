<script setup lang="ts" >
import { reactive, ref } from 'vue';
import ErrorComponent from './ErrorComponent.vue';

const form = reactive({
    email: '',
    pseudo: '',
    password: '',
    birth_date: '',
    checkbox: false
})
const isFormValid = ref<boolean>(true)
let errors: string[] = reactive([])

const submit = async () => {
    isFormValid.value = true
    errors = []
    for (let [key, value] of Object.entries(form)) {
        if (!value) {
            isFormValid.value = false
            errors.push(key)
        }
    }
}

const checkError = (value: string) => {
    const isInvalid = errors.includes(value)
    return isInvalid ? 'form-error' : ''
}


</script>

<template>
    <section class="auth-container">
        <h1>Créer un compte</h1>

        <form @submit.prevent="submit">
            <div class="auth-input-container">
                <label for="">E-mail</label>
                <input :class="checkError('email')" v-model="form.email" type="email"
                    placeholder="exemple@exemple.com" />
            </div>
            <div class="auth-input-container">
                <label for="">Nom d'utilisateur</label>
                <input :class="checkError('pseudo')" v-model="form.pseudo" type="text" placeholder="UserName" />
            </div>
            <div class="auth-input-container">
                <label for="">Mot de passe</label>
                <input :class="checkError('password')" v-model="form.password" type="password"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" />
            </div>
            <div class="auth-input-container">
                <label for="">Date de naissance</label>
                <input :class="checkError('birth_date')" v-model="form.birth_date" type="date" id="start" name="day"
                    min="1950-01-01" max="">
            </div>
            <div class="auth-input-container">
                <label class="container checkbox">
                    <input :class="checkError('checkbox')" type="checkbox" v-model="form.checkbox">
                    <span class="checkmark"></span>
                    J’ai lu et accepté les Conditions d’utilisation et la Politique de Confidentualité de Scordi
                </label>
            </div>
            <ErrorComponent :isError="!isFormValid" />


            <button>S'inscrire</button>
        </form>
        <router-link class="auth-link-register" :to="{ name: 'Login' }">Tu as déjà un compte ?</router-link>
    </section>
</template>
