<template>
	<div id="demo" class="carousel slide hidden-xs hidden-sm" data-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active"><img src="http://news.cdutetc.cn/site/cms_21/upload/image/20190508/1557300718549007080.jpg" /></div>
			<div class="carousel-item"><img src="http://news.cdutetc.cn/site/cms_21/upload/image/20190508/1557300718158027680.jpg" /></div>
			<div class="carousel-item"><img src="http://news.cdutetc.cn/site/cms_21/upload/image/20190508/1557300718205028688.jpg" /></div>
			<div class="carousel-item"><img src="http://news.cdutetc.cn/site/cms_21/upload/image/20190508/1557300718611094856.jpg" /></div>
		</div>
	</div>
</template>
<script>
</script>
<style scoped="scoped">
.carousel-inner img {
	width: 100%;
}
.carousel-caption {
	position: absolute;
	top: 120px;
	left: 20%;
	z-index: 10;
	padding-top: 20px;
	padding-bottom: 20px;
	color: $carousel-caption-color;
	text-align: left;
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
