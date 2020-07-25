<template>
	<div>
		<div class="wthree_copy_right">
			<div class="container">
				<p>{{ msg }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: '版权所有©成都理工大学工程技术学院|校址：四川省乐山市市中区肖坝路222号|邮编：614000|蜀ICP备 05005318号'
		};
	}
};
</script>

<style scoped="scoped">
.footer {
	height: 200px !important;
}
</style>
