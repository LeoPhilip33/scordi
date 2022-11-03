<script setup lang="ts" >



</script>

<template>
    <section class="auth-wrapper">
		<img class="auth-bg" src="/img/auth-bg.svg" alt="">
        <router-view v-slot="{ Component }">
			<transition name="route" mode="out-in">
				<component class="main-component" :is="Component"></component>
			</transition>
		</router-view>
    </section>
</template>
