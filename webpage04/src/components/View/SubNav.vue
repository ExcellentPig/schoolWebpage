<template>
	<div class="subNav">
		<Topcontent></Topcontent>
		<nav class="animenu">
			<button class="animenu__toggle">
				<span class="animenu__toggle__bar"></span>
				<span class="animenu__toggle__bar"></span>
				<span class="animenu__toggle__bar"></span>
			</button>
			<ul class="animenu__nav">
				<li><a href="http://www.cdutetc.cn/">学院首页</a></li>
				<router-link tag="li" to="/allContent"><a href="#">本系首页</a></router-link>
				<li>
					<router-link to="/one"><a href="#">系部概况</a></router-link>
					<ul class="animenu__nav__child">
						<router-link tag="li" to="/one"><a href="">管理系简介</a></router-link>
						<router-link tag="li" to="/two"><a href="">教学条件</a></router-link>
						<router-link tag="li" to="/three"><a href="">架构设置</a></router-link>
						<router-link tag="li" to="/four"><a href="">专业课教师</a></router-link>
					</ul>
				</li>
				<router-link tag="li" to="/sone"><a href="#">实践教学</a></router-link>
				<li>
					<router-link to="/stwo"><a href="#">教学研究</a></router-link>
					<ul class="animenu__nav__child">
						<router-link tag="li" to="/sstwo"><a href="">教学改革</a></router-link>
					</ul>
				</li>
				<router-link tag="li" to="/tone"><a href="#">党建工作</a></router-link>
				<li>
					<router-link to="/fOne"><a href="#">团学工作</a></router-link>
					<ul class="animenu__nav__child">
						<router-link tag="li" to="/Ftwo"><a href="">团总支、学生会分简报</a></router-link>
						<router-link tag="li" to="/fthree"><a href="">规章制度</a></router-link>
						<router-link tag="li" to="/ffour"><a href="">班级管理</a></router-link>
						<router-link tag="li" to="/ffive"><a href="">奖惩勤助贷</a></router-link>
						<router-link tag="li" to="/fsix"><a href="">心理健康教育</a></router-link>
						<router-link tag="li" to="/fseven"><a href="">公寓生活</a></router-link>
						<router-link tag="li" to="/feight"><a href="">机构组织</a></router-link>
						<router-link tag="li" to="/fnine"><a href="">组织生活</a></router-link>
						<router-link tag="li" to="/ften"><a href="">电子系刊</a></router-link>
					</ul>
				</li>
				<router-link tag="li" to="/fione"><a href="#">心灵之窗</a></router-link>
				<li>
					<router-link to="/sione"><a href="#">就业工作</a></router-link>
					<ul class="animenu__nav__child">
						<router-link tag="li" to="/sitwo"><a href="">就业指导</a></router-link>
						<router-link tag="li" to="/sithree"><a href="">就业信息</a></router-link>
						<router-link tag="li" to="/sifour"><a href="">优秀毕业生动态</a></router-link>
						<router-link tag="li" to="/sifive"><a href="">校友职业发展分析</a></router-link>
					</ul>
				</li>
				<router-link tag="li" to="/seone"><a href="#">校友风采</a></router-link>
				<router-link tag="li" to="/eione"><a href="#">办事指南</a></router-link>
				<li>
					<router-link to="/nione"><a href="#">下载中心</a></router-link>
					<ul class="animenu__nav__child">
						<router-link tag="li" to="/nitwo"><a href="">资料下载</a></router-link>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import Topcontent from './Topcontent.vue'
export default {
	mounted() {
		this.showview();
	},
	watch: {
		arr(val) {
			this.showview();
		}
	},
	methods: {
		showview() {
			var animenuToggle = document.querySelector('.animenu__toggle'),
				animenuNav = document.querySelector('.animenu__nav'),
				hasClass = function(elem, className) {
					return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
				},
				toggleClass = function(elem, className) {
					var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
					if (hasClass(elem, className)) {
						while (newClass.indexOf(' ' + className + ' ') >= 0) {
							newClass = newClass.replace(' ' + className + ' ', ' ');
						}
						elem.className = newClass.replace(/^\s+|\s+$/g, '');
					} else {
						elem.className += ' ' + className;
					}
				},
				animenuToggleNav = function() {
					toggleClass(animenuToggle, 'animenu__toggle--active');
					toggleClass(animenuNav, 'animenu__nav--open');
				};

			if (!animenuToggle.addEventListener) {
				animenuToggle.attachEvent('onclick', animenuToggleNav);
			} else {
				animenuToggle.addEventListener('click', animenuToggleNav);
			}
		}
	},
	components:{
		Topcontent
	}
};
</script>

<style scoped="scoped">
*,
*:after,
*:before {
	box-sizing: border-box;
}

.animenu__toggle {
	display: none;
	cursor: pointer;
	background-color: #111;
	border: 0;
	padding: 10px;
	height: 40px;
	width: 40px;
}
.animenu__toggle:hover {
	background-color: #0186ba;
}

.animenu__toggle__bar {
	display: block;
	width: 20px;
	height: 2px;
	background-color: #fff;
	-webkit-transition: 0.15s cubic-bezier(0.75, -0.55, 0.25, 1.55);
	-o-transition: 0.15s cubic-bezier(0.75, -0.55, 0.25, 1.55);
	transition: 0.15s cubic-bezier(0.75, -0.55, 0.25, 1.55);
}
.animenu__toggle__bar + .animenu__toggle__bar {
	margin-top: 4px;
}

.animenu__toggle--active .animenu__toggle__bar {
	margin: 0;
	position: absolute;
}
.animenu__toggle--active .animenu__toggle__bar:nth-child(1) {
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
}
.animenu__toggle--active .animenu__toggle__bar:nth-child(2) {
	opacity: 0;
}
.animenu__toggle--active .animenu__toggle__bar:nth-child(3) {
	-webkit-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

.animenu {
	display: block;
}
.animenu ul {
	padding: 0;
	list-style: none;
	font: 0px 'Open Sans', Arial, Helvetica;
}
.animenu li,
.animenu a {
	display: inline-block;
	font-size: 15px;
}
.animenu a {
	color: #aaaaaa;
	text-decoration: none;
}

.animenu__nav {
	background-color: #336699;
}
.animenu__nav > li {
	position: relative;
	border-right: 1px solid #444444;
}
.animenu__nav > li > a {
	padding: 10px 30px;
	text-transform: uppercase;
}
.animenu__nav > li > a:first-child:nth-last-child(2):before {
	content: '';
	position: absolute;
	border: 4px solid transparent;
	border-bottom: 0;
	border-top-color: currentColor;
	top: 50%;
	margin-top: -2px;
	right: 10px;
}
.animenu__nav > li:hover > ul {
	opacity: 1;
	visibility: visible;
	margin: 0;
}
.animenu__nav > li:hover > a {
	color: #fff;
}

.animenu__nav__child {
	min-width: 100%;
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1;
	opacity: 0;
	visibility: hidden;
	margin: 20px 0 0 0;
	background-color: #373737;
	transition: margin 0.15s, opacity 0.15s;
}
.animenu__nav__child > li {
	width: 100%;
	border-bottom: 1px solid #515151;
}
.animenu__nav__child > li:first-child > a:after {
	content: '';
	position: absolute;
	height: 0;
	width: 0;
	left: 1em;
	top: -6px;
	border: 6px solid transparent;
	border-top: 0;
	border-bottom-color: inherit;
}
.animenu__nav__child > li:last-child {
	border: 0;
}
.animenu__nav__child a {
	padding: 10px;
	width: 100%;
	border-color: #373737;
}
.animenu__nav__child a:hover {
	background-color: #0186ba;
	border-color: #0186ba;
	color: #fff;
}

@media screen and (max-width: 767px) {
	.animenu__toggle {
		display: inline-block;
	}
	.animenu {
		background: #000000;
	}
	.animenu__nav,
	.animenu__nav__child {
		display: none;
	}

	.animenu__nav {
		margin: 10px 0;
	}
	.animenu__nav > li {
		width: 100%;
		border-right: 0;
		border-bottom: 1px solid #515151;
	}
	.animenu__nav > li:last-child {
		border: 0;
	}
	.animenu__nav > li:first-child > a:after {
		content: '';
		position: absolute;
		height: 0;
		width: 0;
		left: 1em;
		top: -6px;
		border: 6px solid transparent;
		border-top: 0;
		border-bottom-color: inherit;
	}
	.animenu__nav > li > a {
		width: 100%;
		padding: 10px;
		border-color: #111;
		position: relative;
	}
	.animenu__nav a:hover {
		background-color: #0186ba;
		border-color: #0186ba;
		color: #fff;
	}

	.animenu__nav__child {
		position: static;
		background-color: #373737;
		margin: 0;
		transition: none;
		visibility: visible;
		opacity: 1;
	}
	.animenu__nav__child > li:first-child > a:after {
		content: none;
	}
	.animenu__nav__child a {
		padding-left: 20px;
		width: 100%;
	}
}
.animenu__nav--open {
	display: block !important;
}
.animenu__nav--open .animenu__nav__child {
	display: block;
}

</style>
