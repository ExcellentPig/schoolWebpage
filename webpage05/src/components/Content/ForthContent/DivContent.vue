<template>
	<div class="w3l_gallery_grids">
		<ul class="w3l_gallery_grid gallery" id="lightGallery">
			<li v-for="(item, index) in list" :key="index">
				<div class="w3_w3l_gallery_grid box">
					<img :src="item.url" alt="" class="img-responsive" />
					<div class="caption scale-caption">
						<h3>{{ item.title }}</h3>
						<p>{{ item.msg }}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ id: 0, url: 'http://glx.cdutetc.cn/fileupload/images/2(29).jpg', title: '刺猬法则', msg: '刺猬法则强调人与人之间应当保持恰当的距离。' },
				{ id: 1, url: 'http://glx.cdutetc.cn/fileupload/images/2(29).jpg', title: '刺猬法则', msg: '刺猬法则强调人与人之间应当保持恰当的距离。' },
				{ id: 2, url: 'http://glx.cdutetc.cn/fileupload/images/2(29).jpg', title: '刺猬法则', msg: '刺猬法则强调人与人之间应当保持恰当的距离。' },
				{ id: 3, url: 'http://glx.cdutetc.cn/fileupload/images/2(29).jpg', title: '刺猬法则', msg: '刺猬法则强调人与人之间应当保持恰当的距离。' },
				{ id: 4, url: 'http://glx.cdutetc.cn/fileupload/images/2(29).jpg', title: '刺猬法则', msg: '刺猬法则强调人与人之间应当保持恰当的距离。' },
				{ id: 5, url: 'http://glx.cdutetc.cn/fileupload/images/2(29).jpg', title: '刺猬法则', msg: '刺猬法则强调人与人之间应当保持恰当的距离。' },
				{ id: 6, url: 'http://glx.cdutetc.cn/fileupload/images/2(29).jpg', title: '刺猬法则', msg: '刺猬法则强调人与人之间应当保持恰当的距离。' },
				{ id: 7, url: 'http://glx.cdutetc.cn/fileupload/images/2(29).jpg', title: '刺猬法则', msg: '刺猬法则强调人与人之间应当保持恰当的距离。' },
				{ id: 8, url: 'http://glx.cdutetc.cn/fileupload/images/2(29).jpg', title: '刺猬法则', msg: '刺猬法则强调人与人之间应当保持恰当的距离。' }
			]
		};
	}
};
</script>

<style></style>
