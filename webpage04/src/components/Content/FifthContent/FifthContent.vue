<template>
	<div class="testimonials" id="testimonials">
		<router-link to="/seone">
		<div class="container">
			<TitleContent></TitleContent>
			<PeopleContent></PeopleContent>
		</div>
		</router-link>
	</div>
</template>

<script>
import TitleContent from './TitleContent.vue';
import PeopleContent from './PeopleContent.vue';
export default {
	components: {
		TitleContent,
		PeopleContent
	}
}
</script>

<style scoped="scoped">

</style>
