<template>
	<div class="subNav">
		<Topcontent></Topcontent>
		<nav class="animenu">
			<button class="animenu__toggle">
				<span class="animenu__toggle__bar"></span>
				<span class="animenu__toggle__bar"></span>
				<span class="animenu__toggle__bar"></span>
				<div class="clearfloat"></div>
			</button>
			<font class="wel">管 理 系 欢 迎 你 !</font>
			<ul class="animenu__nav">
				<li class="topli"><a href="http://www.cdutetc.cn/">学院首页</a></li>
				<router-link tag="li" to="/allContent"><a href="#">本系首页</a></router-link>
				<router-link tag="li" to="/fiOne"><a href="#">系部概况</a></router-link>
				<router-link tag="li" to="/seOne"><a href="#">实践教学</a></router-link>
				<router-link tag="li" to="/thOne"><a href="#">教学研究</a></router-link>
				<router-link tag="li" to="/foOne"><a href="#">党建工作</a></router-link>
				<router-link tag="li" to="/fivOne"><a href="#">团学工作</a></router-link>
				<router-link tag="li" to="/siOne"><a href="#">就业工作</a></router-link>
				<router-link tag="li" to="/sevone"><a href="#">心灵之窗</a></router-link>
				<router-link tag="li" to="/eione"><a href="#">校友风采</a></router-link>
				<router-link tag="li" to="/nione"><a href="#">办事指南</a></router-link>
				<router-link tag="li" to="/teone"><a href="#">下载中心</a></router-link>
			</ul>
		</nav>
	</div>
</template>

<script>
import Topcontent from './Topcontent.vue';
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
	components: {
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
.wel {
	display: none;
}
.animenu__toggle {
	display: none;
	cursor: pointer;
	background-color: lightblue;
	border: 0;
	padding: 10px;
	height: 40px;
	width: 40px;
}
.animenu__toggle:hover {
	background-color: darkblue;
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
	text-align: center;
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
	color: black;
	text-decoration: none;
}

.animenu__nav {
	background-color: #003399;
}
.animenu__nav > li {
	position: relative;
}
.animenu__nav > li > a {
	padding: 10px 10px;
	text-transform: uppercase;
	font-size: 16px;
	font-family: 'Helvetica Neue', Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif !important;
	color: white;
}
/* .animenu__nav > li > a:first-child:nth-last-child(2):before {
	content: '';
	position: absolute;
	border: 4px solid transparent;
	border-bottom: 0;
	border-top-color: currentColor;
	top: 50%;
	margin-top: -2px;
	right: 10px;
} */
.animenu__nav > li:hover > ul {
	opacity: 1;
	visibility: visible;
	margin: 0;
}
.animenu__nav > li:hover > a {
	font-weight: bolder;
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
	background-color: whitesmoke;
	transition: margin 0.15s, opacity 0.15s;
}
.animenu__nav__child > li {
	width: 100%;
	border-bottom: 1px solid #515151;
}
/* .animenu__nav__child > li:first-child > a:after {
	content: '';
	position: absolute;
	height: 0;
	width: 0;
	left: 1em;
	top: -6px;
	border: 6px solid transparent;
	border-top: 0;
	border-bottom-color: inherit;
} */
.animenu__nav__child > li:last-child {
	border: 0;
}
.animenu__nav__child a {
	padding: 10px;
	width: 100%;
	border-color: lightcoral;
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
		background: lightskyblue;
		text-align: right;
	}
	.animenu__nav,
	.animenu__nav__child {
		display: none;
		text-align: center;
	}
	.topli {
		border-top: 1px solid #000000;
	}
	.wel {
		display: block;
		float: left;
		line-height: 40px;
		font-size: 24px;
		color: white;
		margin-left: 20px;
		font-weight: bold;
	}
	.animenu__nav {
		margin: 10px 0;
	}
	.animenu__nav > li {
		width: 100%;
		border-right: 0;
		border-bottom: 1px solid #515151;
		background-color: #33ccff;
	}
	.animenu__nav > li:last-child {
		border: 0;
	}
	/* 	.animenu__nav > li:first-child > a:after {
		content: '';
		position: absolute;
		height: 0;
		width: 0;
		left: 1em;
		top: -6px;
		border: 6px solid transparent;
		border-top: 0;
		border-bottom-color: inherit;
	} */
	.animenu__nav > li > a {
		width: 100%;
		padding: 10px;
		border-color: #111;
		position: relative;
	}
	.animenu__nav a:hover {
		background-color: #0066cc;
		border-color: #0186ba;
		color: #fff;
	}

	.animenu__nav__child {
		position: static;
		background-color: lightcyan;
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
