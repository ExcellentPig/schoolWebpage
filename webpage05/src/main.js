import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'

Vue.use(ElementUI);
Vue.use(MintUI)

new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
