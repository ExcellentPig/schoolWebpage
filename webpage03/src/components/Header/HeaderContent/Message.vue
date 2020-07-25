<template>
	<div class="message">
		<div class="w3layouts_banner_info">
			<section class="wrapper agileits-w3layouts_wrapper_home">
				<h2>{{title}}</h2>
				<div class="sentence">
					<div class="popEffect">
						<span v-for="item,index in centerContent" :key="index">{{item.con}}</span>
					</div>
				</div>
			</section>
			<div class="w3layouts_banner_info_agileits_w3layouts">
				<div class="w3layouts_banner_info_left">
					<ul>
						<li v-for="item,index in bottonContent" :key="index">
							{{item.msg}}
							<span>{{item.bot}}</span>
						</li>
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			title:'扬帆管理',
			centerContent:[
				{id:0,con:'Education'},
				{id:1,con:'Konwledge'},
				{id:1,con:'Deram'},
				{id:1,con:'Ability'}
			],
			bottonContent:[
				{id:0,msg:'信息管理与信息系统',bot:'电子商务'},
				{id:1,msg:'工商管理 工商企业管理',bot:'旅游管理'},
				{id:2,msg:'物流管理 商务管理',bot:'经济信息管理'}
			]
		}
	}
}
</script>

<style></style>
