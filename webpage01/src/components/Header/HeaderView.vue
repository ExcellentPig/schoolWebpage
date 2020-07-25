<template>
	<div>
		<el-row>
			<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
				<div class="out">
					<div class="image">
						<a href="/"><img src="http://glx.cdutetc.cn/img/top.gif" /></a>
					</div>
					<div class="aside">
						<div class="inner">
							<div class="span">
								<a href=""><span>学院首页</span></a>
								<a href=""><span>本系首页</span></a><br>
								<a href=""><span>信息公开</span></a>
								<a href=""><span>邮件系统</span></a>
							</div>
							<a href=""><div class="a"></div></a>
							<div class="icon">
								<i class="el-icon-search"></i>
							</div>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
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
}
.out{
	width: 100%;
	height: 132px;
	background-color: #edf1f7;
}
.image{
	width: 850px;
	height: 100%;
	float: left;
}
.aside{
	width: 400px;
	height: 100%;
	float: right;
}
.inner{
	margin-top: 40px;
}
span{
	text-align: center;
	/* line-height: 60px; */
	margin-left: 40px;
	font-size: 15px;
	color: #000000;
	line-height: 30px;
}
.a{
	float: right;
	margin-right: 160px;
	margin-top: -50px;
	height: 40px;
	border-right: 1px solid #000000;
}
.span{
	float: left;
}
a{
	text-decoration: none;
}
.icon{
	float: left;
	margin-left: 260px;
	margin-top: -45px;
	font-size: 25px;
}

</style>
