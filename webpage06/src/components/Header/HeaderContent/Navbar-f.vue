<template>
	<div>
		<nav class="navbar navbar-default">
				<div class="navbar-header navbar-left">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<h1>
						<a class="navbar-brand" href="index.html">
							<span>{{headestabd}}</span>
							{{title}}
						</a>
					</h1>
				</div>
				<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
					<nav class="link-effect-3" id="link-effect-3">
						<ul class="nav navbar-nav w3-agileits_home_nav">
							<li v-for="item,index in list" :key="index">
								<a class="link link--yaku scroll" :href="item.herf">
									<span>{{item.nav}}</span>
								</a>
							</li>
							<li>
								<a class="link link--yaku scroll" >
									<router-link class="a" to="/subPage">
										<span>更多</span>			
									</router-link>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			headestabd:'管',
			title:'理系',
			list:[
				{id:0,herf:'#about',nav:'系部概况'},
				{id:1,herf:'#services',nav:'实践教学'},
				{id:2,herf:'#gallery',nav:'心灵之窗'},
				{id:3,herf:'#testimonials',nav:'校友风采'}
			]
		}
	}
}
</script>

<style scoped="scoped">
	.a{
		color: #000000;
	}
</style>
