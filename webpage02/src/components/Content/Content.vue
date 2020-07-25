<template>
	<div>
		<LeftContent class="a"></LeftContent>
		<CenterContent class="b"></CenterContent>
		<RightContent class="a"></RightContent>
	</div>
</template>

<script>
import LeftContent from './LeftContent.vue';
import CenterContent from './CenterContent.vue';
import RightContent from './RightContent.vue';
export default {
	components: {
		LeftContent,
		CenterContent,
		RightContent
	}
};
</script>

<style scoped="scoped">
@media (max-width: 800px) {
	.a{
		margin-top: -100px;
	}
	.b{
		margin-top: -200px;
	}
}
</style>
