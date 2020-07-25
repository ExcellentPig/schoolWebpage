<template>
	<div class="w3_testimonials_grids">
		<section class="slider">
			<div class="flexslider">
				<ul class="slides">
					<li v-for="(item, index) in list" :key="index">
						<div class="col-md-7 w3_testimonials_grid_left">
							<p>
								{{ item.basicinf.title1 }}
								<br />
								{{ item.basicinf.name }}
								<br />
								{{ item.basicinf.school }}
								<br />

								{{ item.basicinf.major }}
								<br />

								{{ item.basicinf.title2 }}
								<br />

								{{ item.basicinf.msg }}
								<br />

								{{ item.basicinf.title3 }}
								<br />

								{{ item.basicinf.job }}
								<br />
							</p>
						</div>
						<div class="col-md-5 w3_testimonials_grid_right"><img :src="item.url" alt=" " class="img-responsive" /></div>
						<div class="clearfix"></div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					id: 0,
					basicinf: {
						title1: '基本信息：',
						name: '姓名:王璐璐',
						school: '毕业院校：成都理工大学工程技术学院',
						major: '专 业：旅游管理',
						title2: '主要学习经历：',
						msg: '2012-2016年：就读于成都理工大学工程技术学院管理系 旅游管理',
						title3: '主要工作经历及业绩：',
						job: '2016年毕业后，任职于贵州厚德南泉山大酒店有限公司，现从事销售经理工作，职业处于高速发展阶段。'
					},
					url: 'http://glx.cdutetc.cn/fileupload/images/8(11).jpg'
				},
				{
					id: 1,
					basicinf: {
						title1: '基本信息：',
						name: '姓名:林思杉',
						school: '毕业院校：成都理工大学工程技术学院',
						major: '专 业：旅游管理',
						title2: '主要学习经历：',
						msg: '2006-2010年：就读于成都理工大学工程技术学院管理系 旅游管理',
						title3: '主要工作经历及业绩：',
						job: '2009年12月——2011年12月服役于山西省太原卫星发射中心，退役后先后就职于成都传媒集团、四川弘民房地产集团有限公司，历任“成都东郊记忆”讲解接待员、四川弘民房地产集团有限公司董事长助理。 现为成都弘民物业管理有限公司双流片区总经理。'
					},
					url: 'http://glx.cdutetc.cn/fileupload/images/13(9).jpg'
				},
				{
					id: 2,
					basicinf: {
						title1: '基本信息：',
						name: '姓名:胡亚利',
						school: '毕业院校：成都理工大学工程技术学院',
						major: '专 业：旅游管理',
						title2: '主要学习经历：',
						msg: '2012-2016年：就读于成都理工大学工程技术学院管理系 旅游管理',
						title3: '主要工作经历及业绩：',
						job: '2016年毕业之后，任职于上海秦仓信息科技有限公司买单侠分期，从事销售代表工作至今，职业处于稳定发展阶段。'
					},
					url: 'http://glx.cdutetc.cn/fileupload/images/12(7).jpg'
				}
			]
		};
	}
};
</script>

<style scoped="scoped">
img {
	width: 200px;
	height: 200px;
}
</style>
