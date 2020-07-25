<template>
	<div class="left">
		<div class="col-md-7 w3_agileits_banner_bottom_left">
			<h3>{{title}}</h3>
			<img :src="imgUrl" alt=" " class="img-responsive" />
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			title:'管理系行政组织机构图',
			imgUrl:'http://glx.cdutetc.cn/fileupload/images/777.JPG'
		}
	}
}
</script>

<style>
</style>
