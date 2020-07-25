<template>
		<div id="myCarousel" class="carousel slide">
			<!--轮播指标-->
			<ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
				<li data-target="#myCarousel" data-slide-to="3"></li>
			</ol>
			<!--轮播指标-->
			<!--轮播项目-->
			<div class="carousel-inner" style="">
				<router-link tag="div" class="item active" to="/otOne">
					<img src="http://glx.cdutetc.cn/fileupload/newsFiles/1509453940529.jpg" alt="First slide" />
					<div class="carousel-caption">我院荣获第十三届全国大学生沙盘模拟经营大赛全国总决赛二等奖</div>
				</router-link>

				<router-link tag="div" class="item" to="/otOne">
					<img src="http://glx.cdutetc.cn/fileupload/newsFiles/1509453940529.jpg" alt="First slide" />
					<div class="carousel-caption">我院荣获第十三届全国大学生沙盘模拟经营大赛全国总决赛二等奖</div>
				</router-link>
				<router-link tag="div" class="item" to="/otOne">
					<img src="http://glx.cdutetc.cn/fileupload/newsFiles/1509453940529.jpg" alt="First slide" />
					<div class="carousel-caption">我院荣获第十三届全国大学生沙盘模拟经营大赛全国总决赛二等奖</div>
				</router-link>
				<router-link tag="div" class="item" to="/otOne">
					<img src="http://glx.cdutetc.cn/fileupload/newsFiles/1509453940529.jpg" alt="First slide" />
					<div class="carousel-caption">我院荣获第十三届全国大学生沙盘模拟经营大赛全国总决赛二等奖</div>
				</router-link>
			</div>
			<!--轮播控制器-->
			<a class="carousel-control left" href="#myCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
			<a class="carousel-control right" href="#myCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
			<!--轮播控制器-->
		</div>
</template>
<style scoped="scoped">
#myCarousel {
	height: 400px;
	width: 85%;
	margin: 20px auto;
}
#myCarousel .carousel-inner > .item > img {
	display: block;
	width: 100%;
	height: 400px;
}
@media screen and (max-width: 1024px) {
	#myCarousel {
		width: 100%;
		margin-bottom: 10px;
	}
}

@media screen and (max-width: 800px) {
	#myCarousel {
		width: 100%;
		margin-bottom: 10px;
	}
}

@media screen and (max-width: 667px) {
	#myCarousel {
		height: 300px;
		width: 100%;
		margin: 0;
	}
	#myCarousel .carousel-inner > .item > img {
		display: block;
		width: 100%;
		height: 300px;
	}
	.carousel-indicators {
		display: none;
	}
}
</style>
