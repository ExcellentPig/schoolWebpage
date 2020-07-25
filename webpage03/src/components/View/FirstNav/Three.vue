<template>
	<div class="one">
		<section class="about-more blog">
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1">
						<div class="blog-post">
							<h3 class="h3">机构设置</h3>
							<div class="post-img"><!-- <img class="img-responsive" src="images/header_blog-post2.jpg" alt="#" /> --></div>
							<p class="p centerp">管理系行政组织机构图</p>
							<div class="post-img">
								<img class="img-responsive" src="http://glx.cdutetc.cn/fileupload/images/777.JPG" alt="#" />
							</div>
							<p class="p centerp">管理系党组织机构图</p>
							<div class="post-img">
								<img class="img-responsive" src="http://glx.cdutetc.cn/fileupload/images/999.JPG" alt="#" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script></script>

<style scoped="scoped">
.one {
	background: repeating-radial-gradient(circle, white, lightblue 10%);
	background: -ms-repeating-radial-gradient(circle, white, lightblue 10%);
	background: -webkit-repeating-radial-gradient(circle, white, lightblue 10%);
	background: -moz-repeating-radial-gradient(circle, white, lightblue 10%);
}
.h3 {
	padding: 50px 0 50px 0;
	border-bottom: 1px solid darkblue;
}
.p {
	padding-top: 10px;
	line-height: 40px;
	font-size: 16px;
	margin: 10px;
	font-family: 'Cabin Condensed', sans-serif;
	text-indent:2em
}
.p:last-child {
	border-bottom: 1px solid darkblue;
	padding-bottom: 50px;
}
.centerp {
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	text-indent:0em;
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
