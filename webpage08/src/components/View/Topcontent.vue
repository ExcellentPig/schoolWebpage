<template>
	<div class="top">
			<div class="container">
				<div class="row">
					<div class="col-md-7"><a href="/">
					<img class="hidden-xs hidden-sm" src="../../assets/images/1111.png"/>
					<img class="visible-xs-block visible-sm-block visible-xs-block" src="http://glx.cdutetc.cn/img/top.gif"/></a></div>
					<div class="col-md-5">
						<ul class='a'>
				    		<li><a href='http://www.cdutetc.cn' target='_blank'>学院主页</a></li><li><a href='http://www.cdutetc.cn/jwgl.jsp' target='_blank'>教务系统</a></li><li><a href='http://jyb.cdutetc.cn/' target='_blank'>就业系统</a></li><li><a href='/t/5accd40b-770a-49cb-8515-93428a09326d.html' target='_self'>系公众号 </a></li></ul></ul>
				    	<div class="search pull-right visible-md-block visible-lg-block">
				    		<form class="form-horizontal" role="form" method="get" action="http://www.baidu.com/baidu">	
								  <div class="form-group">
								 	<div class="col-md-3"></div>
								    <div class="col-md-6">
								      	<input type="word" name="word" class="form-control input-sm" id="word" placeholder="请输入关键字">		    		
								        <input name="tn" type="hidden" value="bds">
								        <input name="cl" type="hidden" value="3">
								        <input name="si" type="hidden" value="dxx.cdutetc.cn">
								        <input name="ct" type="hidden" value="2097152">
								    </div>
								    <div class="col-md-3 none-padding">
										<button type="submit" class="btn btn-default btn-sm">
										  <span class="glyphicon glyphicon-search"></span> 搜索
										</button>
									</div>
								  </div>
							 </form>
				    	</div>
					</div>
				</div>
			</div>
		</div>

</template>

<script></script>

<style scoped="scoped">
body{margin:0;padding:0;font-size: 14px;}
ul,li{padding: 0;margin: 0;list-style: none;}
a:HOVER{text-decoration: underline;}
#word:hover{
	border: 1px solid lightcoral;
}
.top{background: linear-gradient(#0066CC,white); width: 100%;}
.top ul li{display: inline-block;}
.top ul li a{color: white;}
.index-main .bar{color: white;line-height: 32px;padding:0 10px 0 15px;}
.index-main .bar-1{background: #1c8eef}
.index-main .bar-2{background: #72b71e}
.index-main .bar-3{background: #df5030} 
.index-main .more:HOVER{text-decoration: none;}
.index-main .more:BEFORE{content: ">>";font-family: '黑体';color: white;}
.foot-copy{background: #011d42;width: 100%;color: white;}
.navbar{margin-bottom: 0;}
/*xs sm*/
@media (max-width:992px) {
	.container{width: 100%;}
	.top img{width: 100%;}
	.top .row>div{padding-left: 0;padding-right: 0;}
	.top ul li{border-left: 1px solid white;width: 25%;text-align: center;padding: 5px 0;}
	.top ul li:FIRST-CHILD{border-left: 0;}	
	.index-main>.container>.row>div{margin-top: 15px;}
	.foot-menu{background: #217a82;width: 100%;text-align: left;padding: 10px 0;}
	.foot-menu li{display: inline-block;width: 30%}
	.foot-menu li a{color: white;}
	.foot-copy{padding: 10px 15px;}
	
   	.page .sm-dh .list-group-item{background: none;}
   	.page .sm-dh>.list-group{padding: 2px 10px;}
	.page .sm-dh>.list-group li{padding:0;border: none;}
	.page .sm-dh>.list-group li a{display: block;line-height: 35px;padding-left: 10px;text-decoration: none;border-bottom: 1px solid #ccc;color: black;}
	.page .sm-dh>.list-group li a:BEFORE{content: ">>";font-family: '黑体';padding: 10px;letter-spacing: -1px;font-weight: bold;color: #999}
	.page .sm-dh>.list-group li a.active{color: #df5030;font-weight: bold;}
	.page .sm-dh>.list-group li a.active:BEFORE{color: #df5030;}
	.page .sm-dh>.list-group>li>.list-group{margin-bottom: 0;padding: 0 0 0 20px;border-bottom: 1px solid #ccc;}
	.page .sm-dh>.list-group>li>.list-group>li{display: inline-block;}
	.page .sm-dh>.list-group li:last-child a{border: none;}
	
	.a  li a{
		font-size: 17px;
		font-weight: bold;
		color: #46B8DA;
	}
}
/*xs*/
@media (max-width:768px) {
	.menu .navbar-default .navbar-nav li{float: left;}	
	.index-main>.container>.row>div img{width: 100%;max-height: 200px;}
	.foot-menu li{display: inline-block;width: 50%}
	.top{background: #337ab7; width: 100%;}
	.a  li a{
		font-size: 17px;
		font-weight: bold;
		color: #46B8DA ;
	}
}

/*sm*/
@media (min-width:768px) {
	.menu-top{position:relative;z-index:100;}
	.top-15{position:relative;z-index:99;}	
	.transparent_class {filter:alpha(opacity=90);-moz-opacity:0.9;-khtml-opacity: 0.9;opacity: 0.9;}
	.menu .navbar{min-height: 43px;margin-bottom: 0;}
	.menu-top{display: block;width: 100%;background: #0a5ece;}
	.menu .navbar-default{background: none;border: none;text-align: center;}
	.menu .navbar-default .navbar-nav{float: none;}
	.menu .navbar-default .navbar-nav>li{float: none;display: inline-block;}
	.menu .navbar-default .navbar-nav>li>a{color: white;font-size: 14px;padding-top: 12px;padding-bottom: 6px;padding-right: 2px;}	
	.menu .navbar-default .navbar-nav{text-align: left;}
	.index-main>.container>.row>div img{width: 100%;max-height: 400px;}
}
/*md*/
@media (min-width:992px) {
	body{min-height: 600px;}
	
	.full-screen{position: absolute;display: block;width: 100%;height: 100%;min-height: 600px;}
	.index-bg{z-index: -1;overflow: hidden;}
	.index-bg img{width: 100%;height: 100%}
	
	.top ul{margin-top: 30px;float: right;}
	.top ul li:BEFORE{content: "|";color: white;padding:0 10px;}
	.top ul li:FIRST-CHILD:BEFORE{content: ""}
	.top .search{width: 350px;margin-top: 20px;margin-right: -10px;}
	.menu .navbar-default .navbar-nav>li>a{font-size: 13px;padding-right: 0px;}	
	.index-main{position: absolute;bottom: 125px;width: 100%;}
	.index-main .row>div{padding: 5px;}
	.index-main .row .content-bg{background: url("/site/cms_9/imgs/tbg.png");height: 210px;overflow: hidden;width: 100%;}
	
	.foot{position: absolute;bottom:0px;width: 100%}
	.foot-menu{background: #217a82;width: 100%;text-align: left;}
	.foot-menu li{display: inline-block;padding: 5px;}
	.foot-menu li a{color: white;font-size: 13px;}
	.foot-copy{text-align: center;height: 50px;line-height: 50px;}	
	
	.content-c1 .slide{margin: 10px;}
	.content-c2 .slide{margin: 5px 0 0 20px;}	
	.content-c1 .slide img{width: 262px;height: 140px!important;}	
	.content-c2 .slide img{width: 200px;height: 140px!important;}	
   	.carousel-inner{height: 190px;}
   	.carousel-control{display: none;}
   	.carousel-indicators{top: 118px;width:80%;left:40%;}
   	.carousel-caption{top: 128px;left: 0;right: 0;bottom: 0;}
   	.carousel-caption a{color: black;top: 120px;}
   	/*.carousel-caption a{color: black;display: inline-block;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 100%;}*/
   	.content-c3 .list_02{padding:0 20px 0 25px;}
   	
   	.page *{border-radius:0}
   	.page .left-dh.panel{border: 0;background: #e3eff9;min-height: 500px;}
   	.page .left-dh .list-group-item{background: none;}
   	.page .left-dh .panel-heading{background: #1c8eef;color: white;font-size: 16px;font-weight: bold;padding: 5px 10px;}
   	.page .left-dh .panel-heading span:BEFORE {content: "\e029";font-family: 'Glyphicons Halflings';padding: 10px;font-weight: normal;font-size: 18px;position: relative;top: 3px;}
	.page .left-dh>.list-group{padding: 2px 10px;}
	.page .left-dh>.list-group li{padding:0;border: none;}
	.page .left-dh>.list-group li a{display: block;line-height: 35px;padding-left: 10px;text-decoration: none;border-bottom: 1px solid #ccc;color: black;}
	.page .left-dh>.list-group li a:BEFORE{content: ">>";font-family: '黑体';padding: 10px;letter-spacing: -1px;font-weight: bold;color: #999}
	.page .left-dh>.list-group li a.active{color: #df5030;font-weight: bold;}
	.page .left-dh>.list-group li a.active:BEFORE{color: #df5030;}
	.page .left-dh>.list-group>li>.list-group{margin-bottom: 0;padding: 0 0 0 20px;border-bottom: 1px solid #ccc;}
	.page .left-dh>.list-group>li>.list-group>li:last-child a{border: none;}
	.page .list-group>li>.list-group{display: none;}
	
	.page .panel-right{}
	.page .panel-right .panel-heading{background: #72b71e;color: white;font-size: 16px;padding: 8px 10px 7px 10px;}
	.page .panel-right .panel-heading .breadcrumb{background: none;}
	.page .panel-right .panel-heading .breadcrumb a{color: white;font-size: 14px;}
	.page .panel-right .panel-heading .breadcrumb>li:before{color: white;}
	.page .panel-right .panel-heading a span{padding: 0 10px;}
	.page .panel-right .list-group{min-height: 380px;}
	.page .panel-right .list-group span{color: #666}
	.page .panel-right .list-group a{color: black;}
	.page .panel-right .list-group li:BEFORE {content: "\e250";font-family:'Glyphicons Halflings';color:#ce944b;font-size: 10px;}
}

/*lg*/
@media (min-width:1200px) {
	.menu .navbar-default .navbar-nav>li>a{font-size: 15px;padding-right: 0px;}
	.foot-menu{text-align: center;}
	.foot-menu li{display: inline-block;padding: 8px;}
	.foot-menu li a{color: white;}
}
h1{font-family: "黑体";}
#content{font-family: "宋体";}
#content a{color: #333;}
ul.list_02{}
ul.list_02 li a{color: #000;line-height: 24px;display: inline-block;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 97%;}
.piclist{text-align: center;}
.piclist img{margin-top: 20px;width: 100%;}
.button {
  background: #009688;
  background-image: -webkit-linear-gradient(top, #009688, #009688);
  background-image: -moz-linear-gradient(top, #009688, #009688);
  background-image: -ms-linear-gradient(top, #009688, #009688);
  background-image: -o-linear-gradient(top, #009688, #009688);
  background-image: linear-gradient(to bottom, #009688, #009688);
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  text-shadow: 0px 1px 0px #5b1905;
  -webkit-box-shadow: 0px 10px 14px -7px #009688;
  -moz-box-shadow: 0px 10px 14px -7px #009688;
  box-shadow: 0px 10px 14px -7px #009688;
  font-family: 微软雅黑;
  color: #ffffff;
  font-size: 16px;
  padding: 12px 10px 12px 10px;
  border: solid #009688 1px;
  text-decoration: none;
}

.button:hover {
  color: #ffffff;
  background: #5FB878;
  text-decoration: none;
}
.piclist .name{margin-top: 10px;width: 100%;display: inline-block;color: white!important;}
</style>
