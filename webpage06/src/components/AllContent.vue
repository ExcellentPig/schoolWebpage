<template>
	<div class="allContentall">
		<Header></Header>
		<Message></Message>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from './Header/Header.vue'
import Message from './Content/Message.vue'
import Footer from './Footer/Footer.vue'
export default {
	components:{
		Header,
		Message,
		Footer
	}
}
</script>

<style>
</style>
