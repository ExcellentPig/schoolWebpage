<template>
	<div class="right test">
		<br>
		<div class="top">
			<div class="first">
				<span>团学工作</span>
				<span>></span>
			</div>
			<div class="second">
				<br />
				<ul>
					<li :title="val.content" v-for="(val, index) in list" :index="index">{{ val.content }}</li>
				</ul>
			</div>
		</div>
		<br>
		<div class="top">
			<div class="first">
				<span>团学工作</span>
				<span>></span>
			</div>
			<div class="second">
				<br />
				<li :title="val.content" v-for="(val, index) in list" :index="index">{{ val.content }}</li>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ id: 0, content: '2019届本科毕业班学生外语、计算机学位水平考试 考生须知' },
				{ id: 1, content: '2019届本科毕业班学生外语、计算机学位水平考试 考生须知' },
				{ id: 2, content: '2019届本科毕业班学生外语、计算机学位水平考试 考生须知' },
				{ id: 3, content: '2019届本科毕业班学生外语、计算机学位水平考试 考生须知' },
				{ id: 4, content: '2019届本科毕业班学生外语、计算机学位水平考试 考生须知' },
				{ id: 4, content: '2019届本科毕业班学生外语、计算机学位水平考试 考生须知' }
			]
		};
	}
};
</script>

<style scoped="scoped">
.right {
	width: 22%;
	height: 1000px;
	margin: 200px 10px 0 10px;
	float: left;
}
@media (max-width: 800px) {
	.test {
		float: left;
		width: 90% !important;
		box-sizing: border-box;
		padding: 10px;
		margin: 20px 30px 30px 30px;
	}
}
.first {
	width: 95%;
	height: 60px;
	background-color: lightseagreen;
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
	width: 95%;
	height: 360px;
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
