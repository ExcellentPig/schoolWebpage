<template>
	<div>
		<div class="a">
			<div class="top">
				<span class="glyphicon glyphicon-home" style="color: white;line-height: 40px; padding-left: 10px;"></span>
				<router-link to="/allContent"><span class="mgs">网站首页</span></router-link>
				<span class="mgs">>>></span>
				<router-link to="/otnfirst"><span class="mgs">院系新闻</span></router-link>
			</div>
			<div class="one">
				<section class="about-more blog">
					<div class="container">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="blog-post">
									<h3 class="h3">我系学生荣获2019年四川省大学生ERP沙盘模拟经营大赛二等奖</h3>
									<p class="p">
										2019年5月17-19日，四川省教育厅主办的2019年四川省大学生ERP沙盘模拟经营大赛在西华大学举行。本次比赛共有省内四川大学、西南交通大学、西南财经大学等34所本科高校参加，我院荣获比赛团体二等奖。
									</p>
									<p class="p">
										比赛采用新道新商战沙盘系统，通过商战沙盘模拟制造型企业的财务运作和企业运营。比赛运营为6个会计年度，比赛时间为两天。参赛队根据经营规则的要求，在规定时间内，通过预算管理：资金管理、成本管理、会计核算，以及企业战略和运营管理，完成企业模拟经营。
									</p>
									<p class="p">我院代表队由管理系夏玉林老师指导，管理系2018级工商企业管理专业梁德华和经济系等5位同学组成学院代表队参加了此次比赛。</p>
						
									<div class="post-img"><img class="img-responsive" src="http://glx.cdutetc.cn/fileupload/images/1(44).png" alt="#" /></div>
									<div class="post-img"><img class="img-responsive" src="http://glx.cdutetc.cn/fileupload/images/2(45).png" alt="#" /></div>
									<div class="post-img"><img class="img-responsive" src="http://glx.cdutetc.cn/fileupload/images/3(35).png" alt="#" /></div>
									<div class="post-img"><img class="img-responsive" src="http://glx.cdutetc.cn/fileupload/images/4(27).png" alt="#" /></div>
									<div class="post-img"><img class="img-responsive" src="http://glx.cdutetc.cn/fileupload/images/4(27).png" alt="#" /></div>
									<div class="post-img"><img class="img-responsive" src="http://glx.cdutetc.cn/fileupload/images/5(21).png" alt="#" /></div>
									<div class="post-img"><img class="img-responsive" src="http://glx.cdutetc.cn/fileupload/images/6(13).png" alt="#" /></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script></script>

<style scoped="scoped">
.a {
	width: 100%;
	background-color: whitesmoke;
}
.top {
	width: 100%;
	height: 40px;
	background-color: #3366CC;
}
.mgs {
	color: white;
	padding-left: 5px;
}
p{
	color: #000000;
	cursor: pointer;
}
.one {
	background-color: whitesmoke;
}
.h3 {
	padding: 50px 0 50px 0;
	border-bottom: 1px solid darkblue;
}
.p {
	padding-top: 10px;
	line-height: 40px;
	font-size: 14px;
	margin: 10px;
	font-family: 'Cabin Condensed', sans-serif;
}
.pl{
	float: left;
	list-style: -moz-afar;
}
.pr{
	float: right;
}
.blog-post {
	border-bottom: 1px solid #ebebeb;
	margin-bottom: 40px;
		background-color:#F8F8F8;
	padding: 5px;
	margin-top: 10px;
}
.msg1{
	border-bottom: 1px dashed lightsalmon;
}
.msg1:last-child{
	margin-bottom: 20px;
	border-bottom: 1px solid darkblue;
	width: 100%;
}

.blog-post:last-child {
	border-bottom: none;
}

.blog .writer {
	width: 60px;
	border-radius: 50%;
	display: inline-block;
	margin-right: 15px;
}

.blog h3 {
	cursor: pointer;
	display: block;
	font-size: 18px;
	color: #017cef;
	margin-top: 10px;
}

.blog h3 span {
	font-weight: 600;
}

.blog strong {
	display: block;
	font-size: 13px;
	font-weight: 600;
	color: #a4b5c5;
}

.post-img img {
	width: 100%;
	border-radius: 5px;
}

.blog h2 {
	margin-bottom: 20px;
}

.blog .read-more {
	margin-top: 20px;
	margin-bottom: 40px;
}

.blog .read-more li {
	color: #7f90a0;
	font-weight: 600;
	text-transform: capitalize;
	font-size: 14px;
}

.blog .read-more li a {
	color: #017cef;
}

.footer hr {
	border-color: #393939;
}

.copyright li:hover {
	color: #017cef;
}

.copyright li {
	cursor: pointer;
}

.copyright p a {
	color: #9b9b9b;
}

.copyright {
	color: #9b9b9b;
	font-size: 13px;
}
@media screen and (max-width: 667px) {
	.top {
		background-color: darkcyan;
	}
}
</style>
