<template>
	<div>
		<div class="a">
			<div class="top">
				<span class="glyphicon glyphicon-home" style="color: white;line-height: 40px; padding-left: 10px;"></span>
				<router-link to="/allContent"><span class="mgs">网站首页</span></router-link>
				<span class="mgs">>>></span>
				<router-link to="/sefirst"><span class="mgs">实践教学</span></router-link>
			</div>
			<div class="one">
				<section class="about-more blog">
					<div class="container">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="blog-post">
										<div class="msg  msg1">
											<router-link tag="p" to="/secontent">
											<p class="p pl">
												我院管理系学子在全国大学生物流仿真运营设计大赛（西南赛区）决赛中再获佳绩
											</p>
											<p class="p pr">
												2017-09-25
											</p>
											</router-link>
											<div class="clearfix"></div>
										</div>
										<div class="msg  msg1">
											<router-link tag="p" to="/secontent">
											<p class="p pl">
												我院管理系学子在全国大学生物流仿真运营设计大赛（西南赛区）决赛中再获佳绩
											</p>
											<p class="p pr">
												2017-09-25
											</p>
											</router-link>
											<div class="clearfix"></div>
										</div>
										<div class="msg  msg1">
											<router-link tag="p" to="/secontent">
											<p class="p pl">
												我院管理系学子在全国大学生物流仿真运营设计大赛（西南赛区）决赛中再获佳绩
											</p>
											<p class="p pr">
												2017-09-25
											</p>
											</router-link>
											<div class="clearfix"></div>
										</div>
										<div class="msg  msg1">
											<router-link tag="p" to="/secontent">
											<p class="p pl">
												我院管理系学子在全国大学生物流仿真运营设计大赛（西南赛区）决赛中再获佳绩
											</p>
											<p class="p pr">
												2017-09-25
											</p>
											</router-link>
											<div class="clearfix"></div>
										</div>
										<div class="msg  msg1">
											<router-link tag="p" to="/secontent">
											<p class="p pl">
												我院管理系学子在全国大学生物流仿真运营设计大赛（西南赛区）决赛中再获佳绩
											</p>
											<p class="p pr">
												2017-09-25
											</p>
											</router-link>
											<div class="clearfix"></div>
										</div>
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
	background-color: #F8F8F8;
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
