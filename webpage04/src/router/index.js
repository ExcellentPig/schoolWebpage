/*
路由器模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import SubPage from '../components/View/SubPage.vue'
import AllContent from '../components/AllContent.vue'


import One from '../components/View/FirstNav/One.vue'
import Two from '../components/View/FirstNav/Two.vue'
import Three from '../components/View/FirstNav/Three.vue'
import Four from '../components/View/FirstNav/Four.vue'
import TeacherOne from '../components/View/FirstNav/Teacher/TeacherOne.vue'

import Sone from '../components/View/SecondNav/One.vue'
import Stwo from '../components/View/SecondNav/Two.vue'
import Sstwo from '../components/View/SecondNav/SubTwo.vue'
import PracticalOne from '../components/View/SecondNav/Practical/PracticalOne.vue'
import ResearchOne from '../components/View/SecondNav/Research/ResearchOne.vue'
import Reform from '../components/View/SecondNav/Research/Reform.vue'


import Tone from '../components/View/ThridNav/One.vue'
import BuildOne from '../components/View/ThridNav/Build/BuildOne.vue'

import Fone from '../components/View/FourthNav/One.vue'
import Ftwo from '../components/View/FourthNav/Two.vue'
import Fthree from '../components/View/FourthNav/Three.vue'
import Ffour from '../components/View/FourthNav/Four.vue'
import Ffive from '../components/View/FourthNav/Five.vue'
import Fsix from '../components/View/FourthNav/Six.vue'
import Fseven from '../components/View/FourthNav/Seven.vue'
import Feight from '../components/View/FourthNav/Eight.vue'
import Fnine from '../components/View/FourthNav/Nine.vue'
import Ften from '../components/View/FourthNav/Ten.vue'
import LeagueOne from '../components/View/FourthNav/League/LeagueOne.vue'
import BulletinOne from '../components/View/FourthNav/Bulletin/BulletinOne.vue'


import Fione from '../components/View/FiveNav/One.vue'


import Sione from '../components/View/SixNav/One.vue'
import Sitwo from '../components/View/SixNav/Two.vue'
import Sithree from '../components/View/SixNav/Three.vue'
import Sifour from '../components/View/SixNav/Four.vue'
import Sifive from '../components/View/SixNav/Five.vue'


import Seone from '../components/View/SevenNav/One.vue'


import Eione from '../components/View/EightNav/One.vue'


import Nione from '../components/View/NineNav/One.vue'
import Nitwo from '../components/View/NineNav/Two.vue'

import OtOne from '../components/View/OtherView/One.vue'

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
					path: '/one',
					component: One,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/two',
					component: Two,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/three',
					component: Three,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/four',
					component: Four,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/sone',
					component: Sone,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/stwo',
					component: Stwo,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/sstwo',
					component: Sstwo,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/tone',
					component: Tone,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/sstwo',
					component: Sstwo,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/fOne',
					component: Fone,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/ftwo',
					component: Ftwo,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/fthree',
					component: Fthree,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/ffour',
					component: Ffour,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/ffive',
					component: Ffive,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/fsix',
					component: Fsix,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/fseven',
					component: Fseven,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/feight',
					component: Feight,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/fnine',
					component: Fnine,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/ften',
					component: Ften,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/fione',
					component: Fione,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/sione',
					component: Sione,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/sitwo',
					component: Sitwo,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/sithree',
					component: Sithree,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/sifour',
					component: Sifour,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/sifive',
					component: Sifive,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/eione',
					component: Eione,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/nione',
					component: Nione,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/nitwo',
					component: Nitwo,
					meta: {
						navShow: true,
						cname: '三级页面'
					}
				},
				{
					path: '/teacherOne',
					component: TeacherOne,
					meta: {
						navShow: true,
						cname: '四级页面'
					}
				},
				{
					path: '/seone',
					component: Seone,
					meta: {
						navShow: true,
						cname: '四级页面'
					}
				},
				{
					path: '/practicalOne',
					component: PracticalOne,
					meta: {
						navShow: true,
						cname: '四级页面'
					}
				},
				{
					path: '/otOne',
					component: OtOne,
					meta: {
						navShow: true,
						cname: '四级页面'
					}
				},
				{
					path: '/researchOne',
					component: ResearchOne,
					meta: {
						navShow: true,
						cname: '四级页面'
					}
				},
				{
					path: '/reform',
					component: Reform,
					meta: {
						navShow: true,
						cname: '四级页面'
					}
				},
				{
					path: '/buildOne',
					component: BuildOne,
					meta: {
						navShow: true,
						cname: '四级页面'
					}
				},
				{
					path: '/leagueOne',
					component: LeagueOne,
					meta: {
						navShow: true,
						cname: '四级页面'
					}
				},
				{
					path: '/bulletinOne',
					component: BulletinOne,
					meta: {
						navShow: true,
						cname: '四级页面'
					}
				},
				{
					path: '/',
					redirect: '/one'
				}
			]
		},
		{
			path: '/',
			redirect: '/allContent',
		}
	]
})
