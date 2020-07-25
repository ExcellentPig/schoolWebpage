<template>
	<div class="header">
		<Topcontent></Topcontent>
		<div>
			<Navbar></Navbar>
			<Scree></Scree>
		</div>
	</div>
</template>

<script>
import Navbar from './HeaderContent/Navbar.vue';
import Scree from './HeaderContent/Scree.vue';
import Topcontent from '../View/Topcontent.vue';
export default {
	components: {
		Navbar,
		Scree,
		Topcontent
	}
};
</script>

<style scoped="scoped">
.header {
	height: 600px;
}
@media screen and (max-width: 667px) {
	.header {
		height: 450px;
	}
}
</style>
