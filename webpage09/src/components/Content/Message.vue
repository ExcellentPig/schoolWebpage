<template>
	<div>
		<div class="news container clearfix">
			<div class="notice-list section section-left">
				<div class="box1">
				<router-link tag="h3" to="/jvcontent"><a>更多</a></router-link>
				<h1>教务信息</h1>
				</div>
				<ul class="notice">
					<router-link tag="li" to="/ottwo">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/ottwo">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/ottwo">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/ottwo">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
					<router-link tag="li" to="/ottwo">
						<span class="title"><a title="2019届本科毕业班学生外语、计算机学位水平考试 考生须知">2019届本科毕业班学生外语、计算机学位水平考试 考...</a></span>
						<span class="date">2019-05-14</span>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>
<style scoped="scoped">
@charset "utf-8";

/*
***************     reset       ****************
*/
a {
	cursor: pointer;
}
.dp{
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

@media screen and (max-width: 1024px) {
	.container {
		width: 1000px;
	}
}

@media screen and (max-width: 960px) {
	.container {
		width: 960px;
	}
}

@media screen and (max-width: 800px) {
	.container {
		width: 100%;
	}
}



/****************** news *********************/
.section {
	
}
.news{
	width: 1200px;
	margin: 0;
}
.box1{
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
.notice{
	background: white;
}
.notice-list .notice li {
	border-bottom: 1px solid lightgray;
	padding: 0 10px;
	line-height: 34px;
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
		width: 320px;
	}
}

@media screen and (max-width: 800px) {
	.section {
		width: 94% !important;
		margin: 10px 0 0 0 !important;
		padding: 0 3%;
	}
	
	.notice-list,
	.key-access {
		float: none;
	}
	.notice-list .notice .title {
		width: 80%;
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

	.notice-list .notice .title {
		font-size: 14px;
	}

	.notice-list .notice .date {
		font-size: 12px;
	}
}


</style>
