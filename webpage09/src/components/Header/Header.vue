<template>
	<div class="header">
		<Topcontent></Topcontent>
		<div>
			<Navbar></Navbar>
			<Scree class="a"></Scree>
			<Message class="b"></Message>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Navbar from './HeaderContent/Navbar.vue';
import Scree from './HeaderContent/Scree.vue';
import Topcontent from '../View/Topcontent.vue';
import Message from './HeaderContent/Message.vue';
import  Footer from '../Footer/Footer.vue'
export default {
	components: {
		Navbar,
		Scree,
		Message,
		Topcontent,
		Footer	
	}
};
</script>

<style scoped="scoped">
	.b{
		position: absolute;
		top: 300px;
		left: 150px;
	}
	@media screen and (max-width: 960px) {
		.b{
			position: relative;
			top: 0;
			left: 0;
		}
	}
	@media screen and (max-width: 800px) {
		.b{
			position: relative;
			top: 0;
			left: 0;
		}
	}
	
</style>
