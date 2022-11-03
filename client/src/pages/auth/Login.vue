<script setup lang="ts" >
import { reactive,ref } from 'vue';
import ErrorComponent from './ErrorComponent.vue';

const form = reactive({
    email: '',
    password: ''
})
const isFormValid = ref<boolean>(true)
let errors: string[] = reactive([])

const submit = async () => {
    isFormValid.value = true
    errors = []
    for (let [key, value] of Object.entries(form)) {
        if(!value){
            isFormValid.value = false
            errors.push(key)
        }
    }
}

const checkError = (value:string) => {
    const isInvalid = errors.includes(value)
    return isInvalid ? 'form-error' : ''
}




</script>

<template>
    <section class="auth-container">
        <h1>Ha, te revoilà !</h1>
        <h2>Nous sommes si heureux de te recevoir (non)</h2>
        
        <form @submit.prevent="submit">
            <div class="auth-input-container">
                <label for="">E-mail</label>
                <input :class="checkError('email')"  v-model="form.email" type="email" placeholder="exemple@exemple.com"/>
            </div>
            <div class="auth-input-container">
                <label for="">Mot de passe</label>
                <input :class="checkError('password')"  v-model="form.password" type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"/>
            </div>
          
            <ErrorComponent :isError="!isFormValid" />

            <button>Connexion</button>
        </form>
        <router-link class="auth-link-register" :to="{ name: 'Register' }">Register</router-link>
    </section>
</template>
