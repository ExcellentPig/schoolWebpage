<template>
	<div>
		<div class="a">
			<div class="top">
				<span class="glyphicon glyphicon-home" style="color: white;line-height: 40px; padding-left: 10px;"></span>
				<router-link to="/allContent"><span class="mgs">网站首页</span></router-link>
				<span class="mgs">>>></span>
				<router-link to="/sifirst"><span class="mgs">就业工作</span></router-link>
				<span class="mgs">>>></span>
				<span class="mgs">就业信息</span>
			</div>
			<div class="one">
				
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
	background-color: darkcyan;
}
.mgs {
	color: white;
	padding-left: 5px;
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
	line-height: 25px;
	font-size: 16px;
	margin: 10px;
	font-family: 'Cabin Condensed', sans-serif;
	text-indent: 2em;
}
.p:last-child {
	border-bottom: 1px solid darkblue;
	padding-bottom: 20px;
}
.blog-post {
	border-bottom: 1px solid #ebebeb;
	margin-bottom: 40px;
	background-color: whitesmoke;
	padding: 5px;
	margin-top: 10px;
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
</style>
