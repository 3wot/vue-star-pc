import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import OpList from '@/components/OpList'
import Valuation from '@/components/Valuation'
import FirstCheck from '@/components/FirstCheck'
import FirstDetail from '@/components/FirstDetail'
import SecondCheck from '@/components/SecondCheck'
import Match from '@/components/Match'
import Contact from '@/components/Contact'
import Add from '@/components/Add'
import Xiahu from '@/components/Xiahu'
import LastCheck from '@/components/LastCheck'
import PrintDeal from '@/components/PrintDeal'
import Notarization from '@/components/Notarization'
import Jindi from '@/components/Jindi'
import Loan from '@/components/Loan'
import File from '@/components/File'
import Look from '@/components/Look'

// import ConfirmValuation from '@/components/ConfirmValuation'
// import Form from '@/components/Form'
// import ConfirmFirstCheck from '@/components/ConfirmFirstCheck'
// import SetUpProject from '@/components/SetUpProject'
// import ConfirmMatch from '@/components/ConfirmMatch'
// import AddData from '@/components/AddData'
// import ConfirmLastCheck from '@/components/ConfirmLastCheck'
// import PrintDeal from '@/components/PrintDeal'

Vue.use(Router)

export default new Router({
	routes: [

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
			// 操作列表
			path: '/opList/:id/:hid',
			name: 'opList',
			component: OpList
		},
		{
			// 估值
			path: '/valuation/:id/:hid/:oprid',
			name: 'valuation',
			component: Valuation
		},
		{
			// 初审
			path: '/firstCheck/:id/:hid/:oprid',
			name: 'firstCheck',
			component: FirstCheck
		},
		{
			// 
			path: '/firstDetail/:name/:id?',
			name: 'firstDetail',
			component: FirstDetail
		},
		{
			// 二审
			path: '/secondCheck/:id/:hid/:oprid',
			name: 'secondCheck',
			component: SecondCheck
		},
		{
			// 产品匹配
			path: '/match/:id/:hid/:oprid',
			name: 'match',
			component: Match
		},
		{
			// 联系产品供应方
			path: '/contact/:id/:hid/:oprid',
			name: 'contact',
			component: Contact
		},
		{
			// 补充资料
			path: '/add/:id/:hid/:oprid',
			name: 'add',
			component: Add
		},
		{
			// 下户
			path: '/xiahu/:id/:hid/:oprid',
			name: 'xiahu',
			component: Xiahu
		},
		{
			// 产品终审
			path: '/lastCheck/:id/:hid/:oprid',
			name: 'lastCheck',
			component: LastCheck
		},
		{
			// 打印合同
			path: '/printDeal/:id/:hid/:oprid',
			name: 'printDeal',
			component: PrintDeal
		},
		{
			// 产品方面签公证
			path: '/notarization/:id/:hid/:oprid',
			name: 'notarization',
			component: Notarization
		},
		{
			// 产品方进抵
			path: '/jindi/:id/:hid/:oprid',
			name: 'jindi',
			component: Jindi
		},
		{
			// 产品方放款
			path: '/loan/:id/:hid/:oprid',
			name: 'loan',
			component: Loan
		},
		{
			// 归档
			path: '/file/:id/:hid/:oprid',
			name: 'file',
			component: File
		},
		{
			// 查看所有资料
			path: '/look/:id/:hid',
			name: 'look',
			component: Look
		},
		// {
		// 	// 估值确认
		// 	path: '/confirmValuation',
		// 	name: 'confirmValuation',
		// 	component: ConfirmValuation
		// },
		// {
		// 	// 正式报单
		// 	path: '/form',
		// 	name: 'form',
		// 	component: Form
		// },
		// {
		// 	// 初审确认
		// 	path: '/confirmFirstCheck',
		// 	name: 'confirmFirstCheck',
		// 	component: ConfirmFirstCheck
		// },
		// {
		// 	// 立项
		// 	path: '/setUpProject',
		// 	name: 'setUpProject',
		// 	component: SetUpProject
		// },
		// {
		// 	// 产品匹配确认
		// 	path: '/confirmMatch',
		// 	name: 'confirmMatch',
		// 	component: ConfirmMatch
		// },
		// {
		// 	// 补充资料
		// 	path: '/addData',
		// 	name: 'addData',
		// 	component: AddData
		// },
		// {
		// 	// 产品终审结果确认
		// 	path: '/confirmLastCheck',
		// 	name: 'confirmLastCheck',
		// 	component: ConfirmLastCheck
		// },


	]
})
