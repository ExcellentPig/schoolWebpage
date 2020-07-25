<template>
	<div id="gallery" class="gallery_main">
		<router-link to="/fione">
		<div class="container">
			<TitleContent></TitleContent>
			<DivContent></DivContent>
		</div>
		</router-link>
	</div>
</template>

<script>
import TitleContent from './TitleContent.vue'
import DivContent from './DivContent.vue'
export default{
	components: {
		TitleContent,
		DivContent
	}
}
</script>

<style></style>
