<template>
	<div id="about" class="banner-bottom">
		<router-link to="/one">
			<div class="container" tag="p">
				<LeftContent></LeftContent>
				<RightContent></RightContent>
				<div class="clearfix"></div>
			</div>
		</router-link>
	</div>
</template>

<script>
import LeftContent from './LeftContent.vue'
import RightContent from './RightContent.vue'
export default {
	components: {
		LeftContent,
		RightContent
	}
}
</script>

<style></style>
