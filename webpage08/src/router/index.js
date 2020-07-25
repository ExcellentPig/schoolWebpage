/*
路由器模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import SubPage from '../components/View/SubPage.vue'
import AllContent from '../components/AllContent.vue'


import FiOne from '../components/View/FirstNav/One.vue'
import Fifirst from '../components/View/FirstNav/First.vue'
import Fisecond from '../components/View/FirstNav/Second.vue'
import Fithird from '../components/View/FirstNav/Third.vue'
import Fifourth from '../components/View/FirstNav/Fourth.vue'

import SeOne from '../components/View/SecondNav/One.vue'
import Sefirst from '../components/View/SecondNav/First.vue'
import Secontent from '../components/View/SecondNav/Practical/Content.vue'

import ThOne from '../components/View/ThridNav/One.vue'
import Thfirst from '../components/View/ThridNav/First.vue'
import Thsecond from '../components/View/ThridNav/Second.vue'


import FoOne from '../components/View/FourthNav/One.vue'
import Fofirst from '../components/View/FourthNav/First.vue'
import Focontent from '../components/View/FourthNav/Practical/Content.vue'

import FivOne from '../components/View/FiveNav/One.vue'
import Fivfirst from '../components/View/FiveNav/First.vue'
import Fivontent from '../components/View/FiveNav/Practical/Content1.vue'
import Fivsecond from '../components/View/FiveNav/Second.vue'
import Fivthird from '../components/View/FiveNav/Third.vue'
import Fivfourth from '../components/View/FiveNav/Fourth.vue'
import Fivfifth from '../components/View/FiveNav/Fifth.vue'
import Fivsixth from '../components/View/FiveNav/Sixth.vue'
import Fivseventh from '../components/View/FiveNav/Seventh.vue'
import Fiveighth from '../components/View/FiveNav/Eighth.vue'
import Fivnineth from '../components/View/FiveNav/Nineth.vue'


import SiOne from '../components/View/SixNav/One.vue'
import Sifirst from '../components/View/SixNav/First.vue'
import Sisecond from '../components/View/SixNav/Second.vue'
import Sithird from '../components/View/SixNav/Third.vue'
import Sifourth from '../components/View/SixNav/Fourth.vue'
import Sififth from '../components/View/SixNav/Fifth.vue'


import SevOne from '../components/View/SevenNav/One.vue'
import Sevfirst from '../components/View/SevenNav/First.vue'

import EiOne from '../components/View/EightNav/One.vue'
import Eifirst from '../components/View/EightNav/First.vue'

import NiOne from '../components/View/NineNav/One.vue'
import Nifirst from '../components/View/NineNav/First.vue'

import TeOne from '../components/View/TenNav/One.vue'
import Tefirst from '../components/View/TenNav/First.vue'

import OtOne from '../components/View/OtherNav/Jw/One.vue'
import Otfirst from '../components/View/OtherNav/Jw/First.vue'
import Otcontent from '../components/View/OtherNav/Jw/Practical/Content1.vue'

import OtnOne from '../components/View/OtherNav/News/One.vue'
import Otnfirst from '../components/View/OtherNav/News/First.vue'
import Otncontent from '../components/View/OtherNav/News/Practical/Content1.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [{
			path: '/allContent',
			component: AllContent,
			meta: {
				navShow: true,
				cname: '一级页面'
			}
		},
		{
			path: '/subPage',
			component: SubPage,
			meta: {
				navShow: true,
				cname: '二级页面'
			},
			children: [{
					path: '/fiOne',
					component: FiOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/fifirst',
							component: Fifirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fisecond',
							component: Fisecond,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fithird',
							component: Fithird,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fifourth',
							component: Fifourth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/fifirst'
						}
					]
				},
				{
					path: '/seOne',
					component: SeOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/sefirst',
							component: Sefirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/secontent',
							component: Secontent,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/sefirst'
						},
					]
				},
				{
					path: '/thOne',
					component: ThOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/thfirst',
							component: Thfirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/thsecond',
							component: Thsecond,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/thfirst'
						},
					]
				},
				{
					path: '/foOne',
					component: FoOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/fofirst',
							component: Fofirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/focontent',
							component: Focontent,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/Fofirst'
						},
					]
				},
				{
					path: '/fivOne',
					component: FivOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/fivfirst',
							component: Fivfirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fivontent',
							component: Fivontent,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fivsecond',
							component: Fivsecond,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fivthird',
							component: Fivthird,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fivfourth',
							component: Fivfourth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fivfourth',
							component: Fivfourth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fivfifth',
							component: Fivfifth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fivsixth',
							component: Fivsixth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fivseventh',
							component: Fivseventh,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fiveighth',
							component: Fiveighth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/fivnineth',
							component: Fivnineth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/fivfirst'
						},
					]
				},
				{
					path: '/siOne',
					component: SiOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/sifirst',
							component: Sifirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/sisecond',
							component: Sisecond,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/sithird',
							component: Sithird,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/sifourth',
							component: Sifourth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/sifourth',
							component: Sifourth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/sififth',
							component: Sififth,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/sifirst'
						},
					]
				},
				{
					path: '/sevOne',
					component: SevOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/sevfirst',
							component: Sevfirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/sevfirst'
						},
					]
				},
				{
					path: '/eiOne',
					component: EiOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/eifirst',
							component: Eifirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/eifirst'
						},
					]
				},
				{
					path: '/niOne',
					component: NiOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/nifirst',
							component: Nifirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/nifirst'
						},
					]
				},
				{
					path: '/teOne',
					component: TeOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/tefirst',
							component: Tefirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/tefirst'
						},
					]
				},
				{
					path: '/otOne',
					component: OtOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/otfirst',
							component: Otfirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/otcontent',
							component: Otcontent,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/otfirst'
						},
					]
				},
				{
					path: '/otnOne',
					component: OtnOne,
					meta: {
						navShow: true,
						cname: '三级页面'
					},
					children: [{
							path: '/otnfirst',
							component: Otnfirst,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/otncontent',
							component: Otncontent,
							meta: {
								navShow: true,
								cname: '四级页面'
							}
						},
						{
							path: '/',
							redirect: '/otnfirst'
						},
					]
				}
			]
		},
		{
			path: '/',
			redirect: '/allContent',
		}
	]
})
