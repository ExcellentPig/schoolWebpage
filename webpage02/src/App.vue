<template>
	<div id="app">
		<Total></Total>
		<router-view></router-view>
	</div>
</template>

<script>
import Total from './components/Total.vue'
export default {
	components:{
		Total
	}
}

</script>

<style>
* {
	margin: 0;
	padding: 0;
}

body {
	background-color: #edf1f7;
	font-family: 'Helvetica Neue', Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}
</style>
