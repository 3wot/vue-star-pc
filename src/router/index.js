import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import AddOrder from '@/components/AddOrder'
import OpList from '@/components/OpList'
import Look from '@/components/Look'
import ConfirmValuation from '@/components/ConfirmValuation'
import Form from '@/components/Form'
import ConfirmFirstCheck from '@/components/ConfirmFirstCheck'
import SetUpProject from '@/components/SetUpProject'
import ConfirmMatch from '@/components/ConfirmMatch'
import AddData from '@/components/AddData'
import ConfirmLastCheck from '@/components/ConfirmLastCheck'
import PrintDeal from '@/components/PrintDeal'

Vue.use(Router)

export default new Router({
	routes: [
		// {
		//   path: '/',
		//   name: 'HelloWorld',
		//   component: HelloWorld
		// },
		{
			// 登录
			path: '/',
			name: 'login',
			component: Login
		},
		{
			// 首页
			path: '/index',
			name: 'index',
			component: Index
		},
		{
			// 预报单
			path: '/addOrder',
			name: 'addOrder',
			component: AddOrder
		},
		{
			// 操作列表
			path: '/opList',
			name: 'opList',
			component: OpList
		},
		{
			// 查看所有资料
			path: '/look',
			name: 'look',
			component: Look
		},
		{
			// 估值确认
			path: '/confirmValuation',
			name: 'confirmValuation',
			component: ConfirmValuation
		},
		{
			// 正式报单
			path: '/form',
			name: 'form',
			component: Form
		},
		{
			// 初审确认
			path: '/confirmFirstCheck',
			name: 'confirmFirstCheck',
			component: ConfirmFirstCheck
		},
		{
			// 立项
			path: '/setUpProject',
			name: 'setUpProject',
			component: SetUpProject
		},
		{
			// 产品匹配确认
			path: '/confirmMatch',
			name: 'confirmMatch',
			component: ConfirmMatch
		},
		{
			// 补充资料
			path: '/addData',
			name: 'addData',
			component: AddData
		},
		{
			// 产品终审结果确认
			path: '/confirmLastCheck',
			name: 'confirmLastCheck',
			component: ConfirmLastCheck
		},
		{
			// 打印合同
			path: '/printDeal',
			name: 'printDeal',
			component: PrintDeal
		}
	]
})
