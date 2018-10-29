
// 域名
const HOST = 'http://www.windant.com:9005/Service1.svc/'

// 相对地址
const urls = {

	'Login' : 'Login',
	'NewOrder': 'NewOrder',
	'OrderList' : 'OrderList',
	'OrderOperationList' : 'OrderOperationList',
	'GetHouseValuationParams' : 'GetHouseValuationParams',

	'HouseValuation' : 'HouseValuation',
	'CompleteHouseValuation': 'CompleteHouseValuation',
	'GetConfirmHouseValuationParams' : 'GetConfirmHouseValuationParams',
	'CompleteConfirmHouseValuation' : 'CompleteConfirmHouseValuation',
	'SubmitBorrowerInfo' : 'SubmitBorrowerInfo',

	'GetAuditBorrowerInfoParams' : 'GetAuditBorrowerInfoParams',
	'AuditBorrowerInfo' : 'AuditBorrowerInfo',
	'CompleteAuditBorrowerInfo' : 'CompleteAuditBorrowerInfo',
	'GetConfirmAuditBorrowerInfoParams' : 'GetConfirmAuditBorrowerInfoParams',
	'CompleteConfirmAuditBorrowerInfo' : 'CompleteConfirmAuditBorrowerInfo',

	'OrderValidation' : 'OrderValidation',
	'GetSecondAuditionParams' : 'GetSecondAuditionParams',
	'CompleteSecondAudition' : 'CompleteSecondAudition',
	'GetProductClassList' : 'GetProductClassList',
	'GetProductList' : 'GetProductList',

	'GetProductMatchParams' : 'GetProductMatchParams',
	'CompleteProductMatch' : 'CompleteProductMatch',
	'GetConfirmProductMatchParams' : 'GetConfirmProductMatchParams',
	'CompleteConfirmProductMatch' : 'CompleteConfirmProductMatch',
	'GetContactProductProviderParams' : 'GetContactProductProviderParams',

	'CompleteContactProductProvider' : 'CompleteContactProductProvider',
	'CompleteHouseVisit' : 'CompleteHouseVisit',
	'CompleteLoanApproval' : 'CompleteLoanApproval',
	'GetConfirmLoanApprovalParams' : 'GetConfirmLoanApprovalParams',
	'CompleteConfirmLoanApproval' : 'CompleteConfirmLoanApproval',

	'GetContractTemplateList' : 'GetContractTemplateList',
	'UploadContract' : 'UploadContract',
	'CompletePrintContract' : 'CompletePrintContract',
	'CompleteSignContract' : 'CompleteSignContract',
	'CompletePledge' : 'CompletePledge',

	'CompleteLoanReceived' : 'CompleteLoanReceived',
	'CompleteUploadLoanReceivedCertificate' : 'CompleteUploadLoanReceivedCertificate',
	'CompleteFiling' : 'CompleteFiling',
	'CancelOrder' : 'CancelOrder',

	'GetOrderInfo': 'GetOrderInfo',

	'CanSubmitMaterialList': 'CanSubmitMaterialList',
	'NeedToSupplementMaterial': 'NeedToSupplementMaterial',
	'SupplementMaterial': 'SupplementMaterial',
	'GetSubmittedMaterialList': 'GetSubmittedMaterialList',
	'SubmitMaterialList': 'SubmitMaterialList',
	'GetMaterialList': 'GetMaterialList',

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