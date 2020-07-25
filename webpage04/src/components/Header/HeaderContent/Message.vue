<template>
	<div class="center test">
		<router-link to="/otOne">
		<div class="msg">
			<h4>院系新闻</h4>
			<span>>>></span>
		</div>
		<el-carousel :height="imgHeight + 'px'">
			<el-carousel-item v-for="(item, index) in imgUrl" :key="index"><img :src="item.url" alt="" class="img_banner" ref="imgHeight" @load="imgLoad" /></el-carousel-item>
		</el-carousel>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imgUrl: [
				{ id: 0, url: 'http://glx.cdutetc.cn/fileupload/newsFiles/1509453940529.jpg' },
				{ id: 1, url: 'http://glx.cdutetc.cn/fileupload/newsFiles/1529486688511.jpg' },
				{ id: 2, url: 'http://glx.cdutetc.cn/fileupload/newsFiles/1511494935685.jpg' },
				{ id: 3, url: 'http://glx.cdutetc.cn/fileupload/newsFiles/1508471776921.jpg' }
			],
			imgHeight: '150px'
		};
	},
	mounted() {
		// element banner 高度自适应
		window.addEventListener('resize', () => {
			//  resize:当调整浏览器窗口的大小时触发事件
			this.imgHeight = this.$refs.imgHeight[0].height;
			this.imgLoad();
		});
	},
	methods: {
		imgLoad() {
			this.$nextTick(() => {
				this.imgHeight = this.$refs.imgHeight[0].height;
			});
		}
	}
};
</script>

<style scoped="scoped">
.center {
	width: 400px;
	height: 400px;
	margin-top: 100px;
	margin-left: 200px;
}
.msg {
	width: 100%;
	height: 40px;
	background-color: lightblue;
}
.msg h4 {
	float: left;
	text-align: center;
	line-height: 40px;
	font-size: 20px;
	color: white;
	margin-left: 10px;
}
.msg span {
	float: right;
	text-align: center;
	line-height: 40px;
	font-size: 20px;
	color: white;
	margin-right: 10px;
}

@media (max-width: 800px) {
	.el-carousel__indicators {
		display: none !important;
	}
	.center {
		width: 100%;
		height: 340px;
		margin-top: 20px;
		margin-left: 0px;
	}
	img{
		width: 100% !important;
		height: 100%;
	}
}
@media (max-width: 1200px) {
	.el-carousel__indicators {
		display: none !important;
	}
	.center {
		width: 100%;
		height: 150px;
		margin-top: 20px;
		margin-left: 0px;
	}
	img{
		width: 100% !important;
		height: 100% !important;
	}
}
.el-carousel__indicator {
	border: none;
}
img {
	width: 400px;
	height: 300px;
}
</style>
