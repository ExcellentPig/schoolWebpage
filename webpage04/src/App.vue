<template>
	<div id="app">
		<router-view v-show="$route.meta.navShow"></router-view>
	</div>
</template>

<script>
import AllContent from './components/AllContent.vue'
export default {
	components: {
		AllContent
	}
};
</script>
<style>
	
</style>
