<template>
	<div class="services" id="services">
		<router-link to="/sone">
		<div class="container">
			<TitleContent></TitleContent>
			<NewsContent></NewsContent>
		</div>
		</router-link>
	</div>
</template>

<script>
import TitleContent from './TitleContent.vue'
import NewsContent from './NewsContent.vue'
export default {
	components: {
		TitleContent,
		NewsContent
	}
}
</script>

<style></style>
