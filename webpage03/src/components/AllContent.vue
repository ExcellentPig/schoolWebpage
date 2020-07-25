<template>
	<div class="allContentall">
		<Header></Header>
		<Content></Content>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from './Header/Header.vue'
import Content from './Content/Content.vue'
import Footer from './Footer/Footer.vue'
export default {
	components:{
		Header,
		Content,
		Footer
	}
}
</script>

<style>
</style>
