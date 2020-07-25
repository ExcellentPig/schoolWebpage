<template>
	<div class="header">
		<Topcontent></Topcontent>
		<div>
			<Navbar></Navbar>
			<Scree></Scree>	
			<Message></Message>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Navbar from './HeaderContent/Navbar.vue';
import Scree from './HeaderContent/Scree.vue';
import Message from '../Content/Message.vue'
import Topcontent from '../View/Topcontent.vue';
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
.header {
	height: 1300px;
}
@media screen and (max-width: 667px) {
	.header {
		height: 1600px;
	}
}
</style>
