<template>
	<div>
		<div class="out">
			<div class="imgdiv"><img src="http://glx.cdutetc.cn/img/top.gif" /></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style scoped="scoped">
* {
	overflow: hidden;
	margin: 0;
	padding: 0;
}
img {
	max-width: 100%;
}
.out {
	width: 100%;
	background-color: #edf1f7;
	position: absolute;
}
.imgdiv {
	margin: 0 auto;
	text-align: center;
}
@media only screen and (max-width:800px) {
	.imgdiv{
		width: 1050px;
	} 
}
</style>
