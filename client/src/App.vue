<script setup lang="ts">

</script>

<template>
	<section class="app-container">
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


