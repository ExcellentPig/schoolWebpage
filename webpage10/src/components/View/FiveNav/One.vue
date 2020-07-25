<template>
	<div class="out">
		<div class="container a">
			<div class="row">
				<div class="col-xs-3">
					<div class="list-group row1">
						<!--生成路由链接-->
						<div style="width: 100%; height: 40px; background-color: #3399FF;">
							<p style="font-size: 16px;font-weight: bold; color: white; padding-left: 8px;line-height: 40px;">团学工作</p>
						</div>
						<div class="db">
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivfirst" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									团学工作
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivsecond" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									规章制度
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivthird" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									班级管理
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivfourth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									奖惩勤助贷
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivfifth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									心理健康教育
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivsixth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									公寓生活
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivseventh" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									组织结构
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fiveighth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									组织生活
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivnineth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									电子系刊
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<div class=" col-xs-9">
					<div>
						<div>
							<!--显示当前组件-->
							<keep-alive><router-view></router-view></keep-alive>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container  b">
			<div class="row">
				<div class="xs">
					<div class="list-group row1">
						<!--生成路由链接-->
						<div style="width: 100%; height: 40px; background-color: lightcoral;">
							<p style="font-size: 16px;font-weight: bold; color: white; padding-left: 8px;line-height: 40px;">团学工作</p>
						</div>
						<div class="db">
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivfirst" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									团学工作
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivsecond" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									规章制度
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivthird" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									班级管理
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivfourth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									奖惩勤助贷
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivfifth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									心理健康教育
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivsixth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									公寓生活
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivseventh" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									组织结构
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fiveighth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									组织生活
								</router-link>
							</div>
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/fivnineth" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									电子系刊
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<div class=" col-xs-15">
					<div>
						<div>
							<!--显示当前组件-->
							<keep-alive><router-view></router-view></keep-alive>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style scoped="scoped">
.out {
	overflow: hidden;
}
.b {
	display: none;
}
.out {
	margin-top: 3%;
	margin-bottom: 3%;
}
.box1 {
	width: 100px;
	height: 20px;
	background-color: lightcoral;
}
.db {
	width: 90%;
	margin: 0 auto;
}
.jc {
	width: 100%;
	height: 100%;
}
.row1 {
	height: 550px;
	background: whitesmoke;
}
.list-group-item {
	border-radius: 0 !important;
	border-bottom: 1px dashed lightgray !important;
	border: none;
	text-align: left;
	background: whitesmoke;
}
.list-group-item:hover {
	color: darkblue;
}
@media screen and (max-width: 667px) {
	.b {
		display: block !important;
	}
	.a {
		display: none;
	}
	.xs {
		width: 100% !important;
	}
	.out {
		margin-top: 0;
	}
	.col-xs-15 {
		width: 100% !important;
	}
}
@media screen and (max-width: 767px) {
	.row1 {
		/* height: 400px; */
		background-color: whitesmoke;
	}
}
</style>
