<template>
	<div class="out">
		<div class="container a">
			<div class="row">
				<div class="col-xs-3">
					<div class="list-group row1">
						<!--生成路由链接-->
						<div style="width: 100%; height: 40px; background-color: #3399FF;">
							<p style="font-size: 16px;font-weight: bold; color: white; padding-left: 8px;line-height: 40px;">就业工作</p>
						</div>
						<div class="db">
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/sevfirst" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									心理健康教育
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
							<p style="font-size: 16px;font-weight: bold; color: white; padding-left: 8px;line-height: 40px;">就业工作</p>
						</div>
						<div class="db">
							<div style="border-bottom: 1px dashed ghostwhite;">
								<router-link to="/sevfirst" class="list-group-item">
									<span class="glyphicon glyphicon-expand"></span>
									心理健康教育
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
	height: 350px;
	background-color: whitesmoke;
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
		height: 200px;
		background-color: whitesmoke;
	}
}
</style>
