<template>
	<div class="banner">
		<div class="container">
			<Navbar></Navbar>
			<Message></Message>
		</div>
	</div>
</template>

<script>
import Navbar from './HeaderContent/Navbar.vue';
import Message from './HeaderContent/Message.vue';
export default {
	components: {
		Navbar,
		Message,
	}
};
</script>

<style scoped="scoped"></style>
