<script setup lang="ts" >



</script>

<template>
    <section class="auth-container">
        <h1>Ha, te revoilà !</h1>
        <h2>Nous sommes si heureux de te recevoir (non)</h2>
        
        <form action="">
            <div class="auth-input-container">
                <label for="">E-mail</label>
                <input type="email" placeholder="exemple@exemple.com"/>
            </div>
            <div class="auth-input-container">
                <label for="">Mot de passe</label>
                <input type="password" placeholder="************************"/>
            </div>
            <button>Connexion</button>
        </form>
        <router-link class="auth-link-register" :to="{ name: 'Register' }">Register</router-link>
    </section>
</template>