<template>
	<div>
		<div class="wthree_copy_right">
			<div class="container-fluid">
				<div class="foot-menu transparent_class">
					<div class="container">
						<ul class="null" id="null">
							<li class="list l1"><a href="http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx" target="_blank">教务管理系统（外网）</a></li>
							<li class="list l2"><a href="http://192.168.5.248/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx" target="_blank">教务管理系统（内网）</a></li>
							<li class="list l3"><a href="http://jyb.cdutetc.cn/" target="_blank">学院就业信息网</a></li>
							<li class="list l4"><a href="http://www.scpta.gov.cn/" target="_blank">四川人事考试网</a></li>
							<li class="list l5"><a href="http://glx.cdutetc.cn/class/2c9082c82053d4ad01205510bac8001e.htm" target="_blank">精品课程</a></li>
							<li class="list l6"><a href="http://emc.cdutetc.cn/" target="_blank">经管实验中心</a></li>
							<li class="list l7"><a href="http://lib.cdutetc.cn/" target="_blank">图书资源</a></li>
							<li class="list l8"><a href="http://zyzx.cdutetc.cn/t/eb0f4111-40eb-441a-a73c-165b5f6a2e65.html" target="_blank">校园网资源</a></li>
							<li class="list l9"><a href="http://www.hep.com.cn/service/xuanshu" target="_blank">产品信息检索系统（校园端）</a></li>
							<li class="list l10"><a href="http://glx.cdutetc.cn/manage/" target="_blank">管理后台（内网）</a></li>
							<li class="list l11"><a href="http://glx.cdutetc.cn/manage?mcode=X" target="_blank">管理后台（外网）</a></li>
						</ul>
					</div>
				</div>
				<br />
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
.wthree_copy_right {
	background: rgb(17, 116, 200) !important;
}

a {
	font-size: 15px !important;
}
@media (max-width: 992px) {
	.foot-menu {
		width: 100%;
		text-align: left;
		padding: 10px 0;
	}
	.foot-menu li {
		display: inline-block;
		width: 30%;
	}
	.foot-menu li a {
		color: white;
	}
}
/*xs*/
@media (max-width: 768px) {
	.foot-menu li {
		display: inline-block;
		width: 45%;
	}
}

/*sm*/
@media (min-width: 768px) {
}
/*md*/
@media (min-width: 992px) {
	body {
		min-height: 600px;
	}

	.foot {
		position: absolute;
		bottom: 0px;
		width: 100%;
	}
	.foot-menu {
		width: 100%;
		text-align: left;
	}
	.foot-menu li {
		display: inline-block;
		padding: 5px;
	}
	.foot-menu li a {
		color: white;
		font-size: 13px;
	}
	.foot-copy {
		text-align: center;
		height: 50px;
		line-height: 50px;
	}
}

/*lg*/
@media (min-width: 1200px) {
	.foot-menu {
		text-align: center;
	}
	.foot-menu li {
		display: inline-block;
		padding: 8px;
	}
	.foot-menu li a {
		color: white;
	}
}
a:hover {
	text-decoration: underline;
}
</style>
