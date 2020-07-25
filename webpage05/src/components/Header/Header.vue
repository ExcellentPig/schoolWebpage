<template>
	<div class="header">
		<Topcontent></Topcontent>
		<div class="banner">
			<div class="container"><Navbar></Navbar></div>
			<Message></Message>
		</div>
	</div>
</template>

<script>
import Navbar from './HeaderContent/Navbar.vue';
import Message from './HeaderContent/Message.vue';
import Topcontent from '../View/Topcontent.vue';
export default {
	components: {
		Navbar,
		Message,
		Topcontent
	}
};
</script>

<style scoped="scoped"></style>
