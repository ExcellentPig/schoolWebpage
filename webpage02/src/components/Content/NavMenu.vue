<template>
	<div class="index-nav">
		<div class="index-nav-frame clearfix">
			<div class="nav-line"><p class="p1">管理系欢迎你</p></div>
			<div class="nav-small" tabindex="-1">
				<div class="nav-small-focus" tabindex="-1"></div>
				<img class="img1" src="../../assets/img/icon.png" />
			</div>
			<router-link  to="/routerView">
			<div class="index-nav-frame-line active" tabindex="-1">
				学院首页
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			</router-link>
			<div class="index-nav-frame-line" tabindex="-1">
				本系首页
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				系部概况
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				实践教学
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				教学研究
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				党建工作
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				团学工作
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				心灵之窗
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				就业工作
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				校友风采
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				办事指南
				<div class="index-nav-frame-line-center">
					<div class="index-nav-frame-line-li">other1</div>
					<div class="index-nav-frame-line-li">other2</div>
					<div class="index-nav-frame-line-li">other3</div>
					<div class="index-nav-frame-line-li">other4</div>
					<div class="index-nav-frame-line-li">other5</div>
				</div>
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
			<div class="index-nav-frame-line" tabindex="-1">
				下载中心
				<div class="index-nav-frame-line-center">
					<div class="index-nav-frame-line-li">other1</div>
					<div class="index-nav-frame-line-li">other2</div>
					<div class="index-nav-frame-line-li">other3</div>
					<div class="index-nav-frame-line-li">other4</div>
					<div class="index-nav-frame-line-li">other5</div>
				</div>
				<div class="index-nav-frame-line-focus" tabindex="-1"></div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
import '../../assets/css/index.css';
import '../../assets/css/reset.css';
</script>
<style scoped="scoped">
.index-nav {
	height: 75px;
}
.p1{
	font-size: 40px;
	color: darkblue;
	line-height: 40px;
	padding: 18px;
}
.nav-small{
	font-size: 34px;
}
</style>
