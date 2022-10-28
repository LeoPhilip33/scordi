<script setup lang="ts">

</script>

<template>
	<section class="app-container">
		<header>
			<router-link :to="{ name: 'Home' }">Home</router-link>
			<router-link :to="{ name: 'NotHome' }">Not home</router-link>
		</header>
		<router-view v-slot="{ Component }">
			<transition name="route" mode="out-in">
				<component class="main-component" :is="Component"></component>
			</transition>
		</router-view>
	</section>
</template>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
