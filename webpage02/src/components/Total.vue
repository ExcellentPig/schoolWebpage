<template>
	<div class="total">
		<NavMenu></NavMenu>
		<HeaderView></HeaderView>
		<br />
		<Content></Content>
		<br />
		<Footer></Footer>
	</div>
</template>

<script>
import HeaderView from './Header/HeaderView.vue';
import NavMenu from './Content/NavMenu.vue';
import Content from './Content/Content.vue';
import Footer from './Footer/Footer.vue';
export default {
	name: 'app',
	data() {
		return {};
	},
	components: {
		HeaderView,
		NavMenu,
		Content,
		Footer
	}
};
</script>

<style></style>
