<template>
	<div class="content">
		<FirstContent></FirstContent>
		<SecondContent></SecondContent>
		<ThirdContent></ThirdContent>
		<ForthContent></ForthContent>
		<FifthContent></FifthContent>
	</div>
</template>

<script>
import FirstContent from './FirstContent/FirstContent.vue'
import SecondContent from './SecondContent/SecondContent.vue'
import ThirdContent from './ThirdContent/ThirdContent.vue'
import ForthContent from './ForthContent/ForthContent.vue'
import FifthContent from './FifthContent/FifthContent.vue'
export default {
	components: {
		FirstContent,
		SecondContent,
		ThirdContent,
		ForthContent,
		FifthContent
	}
}
</script>

<style>
</style>
