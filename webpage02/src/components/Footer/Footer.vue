<template>
	<div class="footer">
		<div class="one">
			<ul>
				<li v-for="(val, index) in list" :key="index">
					<a :href="val.url" target="_blank">{{ val.title }}</a>
				</li>
			</ul>
		</div>
		<div class="two">
			版权所有©
			<a href="http://www.cdutetc.cn">成都理工大学工程技术学院</a>
			<em>|</em>
			校址：四川省乐山市市中区肖坝路222号
			<em>|</em>
			邮编：614000
			<em>|</em>
			蜀ICP备 05005318号
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' },
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' },
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' },
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' },
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' },
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' },
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' },
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' },
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' },
				{ title: '教务管理系统', url: 'http://110.189.108.15:808/(hnaxjizof4vdi4b4kfimcfma)/default2.aspx' }
			]
		};
	}
};
</script>

<style scoped="scoped">
* {
	list-style: none;
}
@media (max-width: 800px) {
	.one {
		display: none;
	}
}
.footer {
	clear: both;
	position: relative;
	margin-top: -120px;
	height: 200px;
	width: 100%;
	background-color: darkblue;
}
.one {
	width: 100%;
	background-color: lightskyblue;
	height: 80px;
}
.one li {
	list-style: none;
	float: left;
	text-align: center;
	line-height: 80px;
	font-size: 24px;
}
.one li a {
	color: black;
	margin-left: 45px;
}
.one li:first-child {
	margin-left: 60px;
}
.two {
	width: 100%;
	height: 120px;
	color: white;
	font-size: 24px;
	text-align: center;
	line-height: 120px;
}
.two em{
	font-weight: bold;
}
</style>
