// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GETJSON from './router/service'
import JCACHE from './router/cache'
import '@/index.css'
// 引入UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 全局变量
window.USER_INFO = {
    uid : '',
    token: '',
    OperatorRoleId: '',
    OperatorRoleName: '',
}
window.UPLOAD_NUM = 0

Vue.prototype.pp = GETJSON
Vue.prototype.warn = function(msg) {
	this.$message({
      	message: msg,
      	type: 'warning',
    })	
}


Vue.prototype.JCACHE = JCACHE

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
