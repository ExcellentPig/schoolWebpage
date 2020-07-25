<template>
	<div class="subPage">
		<SubNav></SubNav>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
import SubNav from './SubNav.vue';
import Footer from '../Footer/Footer.vue'
export default {
	components: {
		SubNav,
		Footer
	}
};
</script>

<style scoped="scoped"></style>
