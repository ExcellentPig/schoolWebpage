<template>
	<div id="app"><router-view v-show="$route.meta.navShow"></router-view></div>
</template>

<script>
import AllContent from './components/AllContent.vue';
export default {
	components: {
		AllContent
	}
};
</script>
<style>
* {
	font-size: 14px !important;
	margin: 0;
	padding: 0;
	font-family: 'Microsoft YaHei', 'Lucida Grande', Tahoma, Arial, Helvetica, sans-serif;
	text-align: center;
}
</style>
