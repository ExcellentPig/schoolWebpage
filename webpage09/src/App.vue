<template>
	<div id="app">
		<router-view v-show="$route.meta.navShow"></router-view>
		<!-- <Footer></Footer> -->
	</div>
</template>

<script>
import AllContent from './components/AllContent.vue'
// import Footer from './components//Footer/Footer.vue'
export default {
	components: {
		AllContent
		// Footer
	}
};
</script>
<style>
	body{
		height: auto !important;
	}
</style>
