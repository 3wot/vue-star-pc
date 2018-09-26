
// 域名
const HOST = 'http://domain/service.asmx/'

// 相对地址
const urls = {
	'Login' : 'Login',
	'UploadImage' : 'UploadImage',
	'OrderList' : 'OrderList',
	'OrderOperationList' : 'OrderOperationList',
	'OperationList' : 'OperationList',
	'NewOrder' : 'NewOrder',
}

// 外部方法
const URLS = (key) => {
	if (key && urls[key]) {
		return HOST + urls[key];
	} else {
		console.log("URLS没有当前地址")
		return ''
	}
}
export default URLS