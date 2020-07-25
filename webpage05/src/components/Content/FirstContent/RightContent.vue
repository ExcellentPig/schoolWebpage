<template>
	<div class="right">
		<div class="col-md-3 w3_agileits_banner_bottom_right">
			<div class="w3_agileits_banner_bottom_right_pos">
				<h3>{{title1}}</h3>
				<p>{{msg}}<br><br>{{msg2}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			title1:'管理系专业：',
			msg:'本科：1-工商管理、2-旅游管理、3-电子商务、4-物流管理、5-信息管理与信息系统',
			msg2:'专科：①-工商企业管理、②-旅游管理、③-电子商务、④-商务管理、⑤-经济信息管理'
		}
	}
}
</script>

<style>
</style>
