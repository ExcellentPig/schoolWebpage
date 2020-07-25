<template>
	<div>
		<div class="wthree_copy_right">
			<div class="container-fluid">
				<div class="foot-menu transparent_class">
					<div class="container">
						<ul>
							<li class="list l1"><a href="http://www.cdutetc.cn" target="_blank">学院首页</a></li>
							<li class="list l2"><a href="/index.do" target="_self">本系首页</a></li>
							<li class="list l3"><a href="/news.do?action=newsList&amp;tid=4028839a1a99479d011a994c0ce50002" target="_self">系部概况</a></li>
							<li class="list l4"><a href="http://glx.cdutetc.cn/class/2c9082c94d7a8952014d8e316b16011f.htm" target="_blank">实践教学</a></li>
							<li class="list l5"><a href="/news.do?action=newsList&amp;tid=4028839a1a99479d011a994d4c1c000a" target="_self">教学研究</a></li>
							<li class="list l6"><a href="/class/4028839a1a99479d011a994c82f00005.htm" target="_self">党建工作</a></li>
							<li class="list l7"><a href="/class/4028839a1a99479d011a994ca4340006.htm" target="_self">团学工作</a></li>
							<li class="list l8"><a href="/class/2c9082c82087571f01208a105dd80019.htm" target="_self">心灵之窗</a></li>
							<li class="list l9"><a href="/news.do?action=newsList&amp;tid=4028839a1a99479d011a994ced620008" target="_self">就业工作</a></li>
							<li class="list l10"><a href="/news.do?action=newsList&amp;tid=2c9082c82053d4ad012054feb5030002" target="_self">校友风采</a></li>
							<li class="list l11"><a href="/html/2c9082c939f24532013a4876f9d5006e.htm" target="_self">办事指南</a></li>
							<li class="list l12"><a href="/down.do?action=downList&amp;tid=2c9082c8276b1e44012788c8ef9c004d" target="_self">下载中心</a></li>
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
.footer {
	height: 200px !important;
}
.wthree_copy_right {
	background: rgb(17, 116, 200) !important;
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
		width: 50%;
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
a:hover{
	text-decoration: underline;
}
</style>
