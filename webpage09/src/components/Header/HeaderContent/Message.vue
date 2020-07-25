<template>
	<div>
		<div class="news container clearfix">
			<div class="notice-list section section-left">
				<div class="box1" style="background-color: #eb3c05;">
					<router-link tag="h3" to="/otnfirst"><a>更多</a></router-link>
					<h1>校园风采</h1>
				</div>
				<ul class="notice">
					<el-carousel :height="imgHeight + 'px'">
						<el-carousel-item v-for="(item, index) in imgUrl" :key="index">
							<router-link :to="item.lin"><img :src="item.url" alt="" class="img_banner" ref="imgHeight" @load="imgLoad" /></router-link>
						</el-carousel-item>
					</el-carousel>
				</ul>
			</div>
			<div class="notice-list section section-left">
				<div class="box1" style="background-color: darkcyan;">
					<router-link tag="h3" to="/fifirst"><a>更多</a></router-link>
					<h1>系部概况</h1>
				</div>
				<ul class="notice">
					<router-link to="/fifirst">
						<div class="pp" style="line-height: 33px; margin-left: 8px; padding-top: 2px;">
							<p class="dp">招生专业介绍</p>
							<p class="dp">本科：信息管理与信息系统 网络与新媒体 工商管理 旅游管理 物流管理 电子商务</p>
							<p class="dp">专科：工商企业管理 电子商务</p>
							<p class="dp">本系概况：管理系简介 机构设置 专业课教师 教学条件</p>
							<p class="dp">人才培养：理论扎实 实践对接 学风严谨 德才兼备</p>
							<p class="dp">职业发展：校友风采 就业分析</p>
							<p class="dp">招生计划：2018年招生计划 学院招生信息网</p>
						</div>
					</router-link>
				</ul>
			</div>
		</div>
		<div class="news container clearfix" style="margin-top: 20px;">
			<div class="notice-list section section-left">
				<div class="box1" style="background-color: darkorange;">
					<router-link tag="h3" to="/otone"><a>更多</a></router-link>
					<h1>教务信息</h1>
				</div>
				<ul class="notice" style="padding-top: 1px;">
					<router-link tag="li" to="/otcontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/otcontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/otcontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/otcontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/otcontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
				</ul>
			</div>
			<div class="notice-list section section-left">
				<div class="box1" style="background-color: darkorchid;">
					<router-link tag="h3" to="/fivfirst"><a>更多</a></router-link>
					<h1>团学工作</h1>
				</div>
				<ul class="notice" style="padding-top: 1px;">
					<router-link tag="li" to="/fivontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/fivontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/fivontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/fivontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/fivontent">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
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
				{ id: 0, url: 'http://glx.cdutetc.cn/fileupload/newsFiles/1509453940529.jpg', lin: '/otncontent' },
				{ id: 1, url: 'http://glx.cdutetc.cn/fileupload/newsFiles/1529486688511.jpg', lin: '/otncontent' },
				{ id: 2, url: 'http://glx.cdutetc.cn/fileupload/newsFiles/1511494935685.jpg', lin: '/otncontent' },
				{ id: 3, url: 'http://glx.cdutetc.cn/fileupload/newsFiles/1508471776921.jpg', lin: '/otncontent' }
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
	img {
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
	img {
		width: 100% !important;
		height: 100% !important;
	}
}
.el-carousel__indicator {
	border: none;
}
img {
	width: 100% !important;
	height: 100% !important;
}
a {
	cursor: pointer;
}
.dp {
	margin: 5px 0;
}
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
	list-style: none;
}

body {
	line-height: 1;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
	display: block;
}

nav ul {
	list-style: none;
}

blockquote,
q {
	quotes: none;
}

a {
	margin: 0;
	padding: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
}

ins {
	background-color: #ffff99;
	color: #000000;
	text-decoration: none;
}

mark {
	background-color: #ffff99;
	color: #000000;
	font-style: italic;
	font-weight: bold;
}

del {
	text-decoration: line-through;
}

abbr[title],
dfn[title] {
	border-bottom: 1px dotted;
	cursor: help;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

hr {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid #cccccc;
	margin: 1em 0;
	padding: 0;
}

input,
select {
	vertical-align: middle;
}

.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: ' ';
	clear: both;
	height: 0;
}

.clearfix {
	*zoom: 1;
}

/******************* all ********************/

body {
	font-family: 'Microsoft YaHei', 'Helvetica Neue', Simsun, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: subpixel-antialiased;
}

a {
	text-decoration: none;
}

/****************** news *********************/
.section {
	margin-left: 50px;
}
.news {
	width: 1200px;
	margin: 0;
}
.box1 {
	position: relative;
	background-color: darkblue;
	padding: 0 10px;
}
.section.section-left {
	float: left;
	width: 45%;
	margin-bottom: 20px;
}

.section.section-right {
	float: left;
	width: 38%;
	margin-left: 2%;
	margin-bottom: 3%;
}

.section h1 {
	line-height: 42px;
	font-size: 20px;
	font-weight: normal;
	color: white;
	letter-spacing: 1px;
}

.section h3 {
	float: right;
	font-weight: normal;
}

.section h3 a {
	font-size: 16px;
	color: white;
	line-height: 42px;
}

.section h3 a:hover {
	color: #0091f4;
}

.headline-pic {
	float: left;
	margin-right: 15px;
}

.headline-pic img {
	width: 300px;
	height: 220px;
}

.headline.section .content .title {
	display: block;
	line-height: 30px;
	height: 60px;
	overflow: hidden;
	font-size: 18px;
}

.headline.section .content .title a {
	color: #333333;
}

.headline.section .content .title a:hover {
	color: #005aa0;
}

.headline.section .content .date {
	display: block;
	text-align: right;
	font-size: 16px;
	line-height: 35px;
	color: #333333;
	font-family: Georgia, sans-serif;
	padding-right: 10px;
}

.headline.section .content .summary {
	display: block;
	height: 125px;
	font-size: 14px;
	line-height: 25px;
	color: #666666;
	overflow: hidden;
}
.notice {
	background: white;
}
.notice-list .notice li {
	border-bottom: 1px solid lightgray;
	padding: 0 10px;
	line-height: 48px;
	margin-top: 11px;
}
.notice-list .notice a {
	color: #333333;
}

.notice-list .notice a:hover {
	color: #005aa0;
}

.notice-list .notice .title {
	display: inline-block;
	width: 370px;
	font-size: 15px;
	vertical-align: top;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.notice-list .notice .date {
	float: right;
	font-size: 14px;
	line-height: 30px;
	color: #333333;
	font-family: Georgia, sans-serif;
}

@media screen and (max-width: 1024px) {
	.notice-list .notice .title {
		width: 55%;
	}
	.section {
		width: 100% !important;
		margin: 10px 0 0 0 !important;
		padding: 0 3%;
	}
}
@media screen and (max-width: 960px) {
	.section {
		width: 100% !important;
		padding: 0 !important;
		margin: 0 !important;
	}
	.news {
		width: 100%;
	}
}
@media screen and (max-width: 800px) {
	.section {
		width: 100% !important;
		margin: 10px 0 0 0 !important;
		padding: 0 3%;
	}
	.news {
		width: 100%;
	}
	.notice-list {
		padding: 0;
	}
	.box1 {
		margin-top: -10px;
	}
	.notice-list,
	.key-access {
		float: none;
	}
	.notice-list .notice .title {
		width: 60%;
	}
}

@media screen and (max-width: 480px) {
	.headline-pic {
		float: none;
		text-align: center;
		margin-bottom: 10px;
	}
	.headline.section .content .title {
		height: auto;
	}
	.news {
		width: 100%;
	}
	.notice-list {
		padding: 0;
	}
	.box1 {
		margin-top: -10px;
	}
	.notice-list,
	.key-access {
		float: none;
	}
	.notice-list .notice .title {
		width: 60%;
	}
	.notice-list .notice .title {
		font-size: 14px;
	}

	.notice-list .notice .date {
		font-size: 12px;
	}
}
</style>
