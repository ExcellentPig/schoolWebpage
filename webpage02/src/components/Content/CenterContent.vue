<template>
	<div class="center test">
		
			<el-carousel :height="imgHeight + 'px'">
				<el-carousel-item v-for="(item, index) in imgUrl" :key="index"><img :src="item.url" alt="" class="img_banner" ref="imgHeight" @load="imgLoad" /></el-carousel-item>
			</el-carousel>
			<div class="top">
				<div class="first">
					<span>教务信息</span>
					<span>></span>
				</div>
				<div class="second">
					<br />
					<ul>
						<li :title="val.content" v-for="(val, index) in list" :index="index">{{ val.content }}</li>
					</ul>
				</div>
			</div>
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
			imgHeight: '150px',
			list: [
				{ id: 0, content: '2019届本科毕业班学生外语、计算机学位水平考试 考生须知' },
				{ id: 1, content: '2019届本科毕业班学生外语、计算机学位水平考试 考生须知' },
				{ id: 2, content: '2019届本科毕业班学生外语、计算机学位水平考试 考生须知' }
			]
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
	width: 50%;
	height: 1000px;
	margin: 225px 25px 0 10px;
	float: left;
}

@media (max-width: 800px) {
	.test {
		float: left;
		width: 90% !important;
		height: 500px !important;
		box-sizing: border-box;
		padding: 10px;
		margin: 30px;
	}
	.top {
		display: none;
	}
	.el-carousel__indicators {
		display: none !important;
	}
}
.second li {
	border: none;
	padding: 0;
}
.el-carousel__indicator {
	border: none;
}
.first {
	width: 100%;
	height: 60px;
	background-color: darkorange;
	margin: 5px auto;
}
.first span:first-child {
	color: white;
	font-size: 25px;
	float: left;
	margin-left: 20px;
	line-height: 55px;
}
.first span:last-child {
	color: white;
	font-size: 25px;
	float: right;
	margin-right: 20px;
	line-height: 55px;
	cursor: pointer;
}
.second {
	width: 100%;
	height: 200px;
	background-color: white;
	margin: 5px auto;
}
li {
	list-style: none;
	margin: 30px;
	border-bottom: 1px dashed #000000;
	text-overflow: clip|ellipsis|string;
	cursor: pointer;
	font-size: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
li:hover {
	color: darkblue;
}
</style>
