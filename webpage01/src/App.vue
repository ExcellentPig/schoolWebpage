<template>
	<div id="app">
		<HeaderView></HeaderView>
	</div>
</template>

<script>
import HeaderView from './components/Header/HeaderView.vue'
export default {
	name: 'app',
	data() {
		return {};
	},
	components:{
		HeaderView
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	width: 100%;
}
</style>
