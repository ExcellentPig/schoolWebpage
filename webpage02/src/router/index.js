import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import RouterView from '../components/RouterView/RouterView.vue'

export default new Router({
	routes: [{
		path: '/routerView',
		component: RouterView,
		meta: {
			navShow: true,
			cname: '一级页面'
		}
	}]
})
