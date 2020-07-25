<template>
	<div>
		<div class="a">
			<div class="top">
				<span class="glyphicon glyphicon-home" style="color: white;line-height: 40px; padding-left: 10px;"></span>
				<router-link to="/allContent"><span class="mgs">网站首页</span></router-link>
				<span class="mgs">>>></span>
				<span class="mgs">系部概况</span>
				<span class="mgs">>>></span>
				<span class="mgs">管理系简介</span>
			</div>
			<section class="about-more blog">
				<div class="blog-post">
					<h3 class="h3">管理系简介</h3>
					<div class="post-img"><!-- <img class="img-responsive" src="images/header_blog-post2.jpg" alt="#" /> --></div>
					<p class="p">
						管理系是适应社会经济发展对于各类管理人才的需求，于2002年创建的，管理系学风优良，教风严谨，师资力量雄厚，任课教师98%毕业于“211”、“985”重点大学或具有海外留学学历，均具有硕士以上学历或高、中级职称。
					</p>
					<p class="p">
						管理系现有各专业均为现代企事业单位中十分重要、人才需求量大、发展前景看好的专业领域。管理系以“理论扎实，实践对接，学风严谨，德才兼备”为人才培养宗旨，不断加强对各专业的建设力度，打造特色专业、优势专业。以企业对人才的实际需求和教育的客观规律为依据制定人才培养方案，充分利用学校优良的教学环境，依托本校经济与管理省级实验教学示范中心，着重培养学生学以致用的能力。与洲际酒店集团、上海远成物流、杭州娃哈哈集团公司、宏信证券、成都欢乐谷等多家国内外知名企业建立了良好的合作关系，为学生提供良好的校外实习和就业条件。所培养的学生既具备扎实宽厚的学科基础，又拥有与相关行业领域密切结合的专业知识，以及与企业实际需求相适应的工作能力，职业定位明确，发展潜力巨大。
					</p>
					<p class="p">
						由于始终坚持正确的人才培养方针，多年来，管理系毕业生始终受到用人单位的普遍欢迎和好评，就业率连续多年保持在95%以上，近年来更是供不应求，不少优质企业一年之内数次来院，招聘管理系毕业生，这些企业所提供的就业岗位，大多发展平台广阔，薪酬福利优厚。
					</p>
					<p class="p">
						管理系在着重培养学生的管理实践能力的同时，也十分强调创业意识与能力的开发，创造和利用各种条件，鼓励和帮助学生在适当的时候开展自主创业。在校期间成功创业的学生不乏其人，历届毕业生中有相当数量已成为各类企业的法人代表、执行董事、ＣＥＯ、总经理等高层管理人员，实现了自己的人生价值，也为社会经济发展做出了巨大贡献。
					</p>
					<p class="p">热忱欢迎广大具备管理潜质，立志于高质量职业发展、开创精彩人生的考生报考管理系所开设专业。</p>
					<br />
					<p class="p">管理系专业：</p>

					<p class="p">本科：1-工商管理、2-旅游管理、3-电子商务、4-物流管理、5-信息管理与信息系统</p>

					<p class="p">专科：①-工商企业管理、②-旅游管理、③-电子商务、④-商务管理、⑤-经济信息管理</p>

					<p class="p">联系电话：0833-7820170</p>

					<p class="p">网址：http://glx.cdutetc.cn</p>
				</div>
			</section>
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
