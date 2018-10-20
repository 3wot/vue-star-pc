// 接口

// 接口基本地址：http://domain/service.asmx/

// *用户登录接口-All

	// 接口地址: Login
	
	// 输入数据格式:
	{
		"mobile" : "",
		"pwd" : ""
	}

	// 返回数据格式：
	{
		"ret" : "ok",
		"msg" : "",
		"data" : {
				"uid" : "",
				"token" : "",
				"OperatorRoleId" : "",
				"OperatorRoleName" : ""
			}
	}

	// 输入数据格式说明：

		// mobile : 用户登录手机号
		// pwd : 用户登录密码
		
	// 返回数据格式说明：

		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OperatorRoleId : 用户角色id
		// OperatorRoleName : 用户角色名称

// 上传图片接口-All

	// 接口地址: UploadImage
	
	// 接口说明：上传图片并返回url地址，只支持单张图片
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"filename" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
		"data" : { "ThumbnailUrl" : "", "OrignalUrl" : ""}
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// order_type : 获取报单类型，1，正在进行中报单；2，历史报单
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// ThumbnailUrl : 缩略图url
		// OrignalUrl : 原图url

// *获取报单接口-All

	// 接口地址: OrderList
	
	// 接口说明：获取指定销售所有创建的报单
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"order_type" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
		"data" : [
			{ "Id" : "", "BorrowerName" : "", "BorrowerMobile" : "", "BorrowerIDNO" : "", "CreationDateTime" : "", "Status" : "", "CurrentOperation" : ""}
		]
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// order_type : 获取报单类型，0，正在进行中，1，正常结案，2，中途结案 3，历史报单， 不传所有的
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// Id : 报单Id
		// BorrowerName : 借款人姓名
		// BorrowerMobile : 借款人手机号
		// BorrowerIDNO : 借款人身份证号
		// CreationDateTime : 报单创建日期时间, 格式：2018-08-01 18:00:00
		// Status : 报单状态，0，正在进行中，1，正常结案，2，中途结案
		// CurrentOperationName : 报单当前操作名称

// *获取报单操作列表接口-All

	// 接口地址: OrderOperationList
	
	// 接口说明：获取指定报单当前操作列表
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
		"data" : [
			{ "OperationRecordId" : "", "OperationId" : "", "OperationName" : "", "OperationRoleType": "", "CreationDateTime" : "", "Status" : ""}
		]
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// OperationRecordId : 操作在该报单列表里Id
		// OperationId : 操作在操作字典表里Id，及操作类型Id
		// OperationName : 操作名称
		// OperationRoleType : 操作所属角色id
		// CreationDateTime : 操作创建日期时间, 格式：2018-08-01 18:00:00
		// Status : 操作状态，0，未操作，1，已操作

// 获取所有操作类型接口-All

	// 接口地址: OperationList
	
	// 接口说明：获取所有操作列表
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
		"data" : [
			{ "Id" : "", "Name" : ""}
		]
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// Id : 操作在操作字典表里Id，及操作类型Id
		// Name : 操作名称

// *预报单页面接口-销售

	// 接口地址: NewOrder
	
	// 接口说明：创建新报单，及创建预报单
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OwnerName" : "",
		"Location" : "",
		"Usage" : "",
		"Area" : "",
		"HouseCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"]
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
		"data" : { "OrderId" : "", "HouseId" : ""}
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OwnerName : 所有权人姓名
		// Location : 房屋坐落
		// Usage : 用途, 无，住宅*，别墅，商业，公寓，办公
		// Area : 房屋建筑面积
		// HouseCertificateImageUrls : 房产证照片
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// OrderId : 新创建报单id
		// HouseId : 新创建房屋id

// 结案接口-销售
		
	// 接口地址: CancelOrder
	
	// 接口说明：结案
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : "",
		"HouseId" : "",
		"OperationRecordId" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : ""
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		// HouseId : 房屋id
		// OperationRecordId : 操作记录id
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息	

// ？估值页面接口(3)-风控

	// *1. 获取房屋估值页面参数接口

		// 接口地址: GetHouseValuationParams
		
		// 接口说明：获取房屋估值页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"HouseId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				{ 	
					"OrderId" : "",
					"HouseId" : "",
					"OwnerName" : "", 
					"Location" : "", 
					"Usage" : "", 
					"Area" : "", 
					"PledgePercentage" : ""
				}
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// HouseId : 估值房屋id
			
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// OrderId : 报单id
			// HouseId : 估值房屋id
			// OwnerName : 所有权人姓名
			// Location : 房屋坐落
			// Usage : 用途, 无，住宅*，别墅，商业，公寓，办公
			// Area : 房屋建筑面积
			// PledgePercentage : 抵押成数
	
	// ？2. 房屋估值接口

		// 接口地址: HouseValuation
		
		// 接口说明：房屋估值接口
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"HouseId" : "",
			"OwnerName" : "",
			"Location" : "",
			"Usage" : "",
			"Area" : "",
			"PledgePercentage" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				{ 	
					"HouseUnitPrice" : "", 
					"HouseTotalPrice" : "", 
					"HouseAveragePrice" : "", 
					"HousePledgePrice" : "", 
					"HouseDealPeriod" : "", 
					"HouseNearbyAveragePrice1" : "", 
					"HouseNearbyAveragePrice2" : "", 
					"HouseNearbyAveragePrice3" : "", 
					"HouseNearbyAveragePrice4" : ""
				}
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// HouseId : 估值房屋id
			// OwnerName : 所有权人姓名
			// Location : 房屋坐落
			// Usage : 用途, 无，住宅*，别墅，商业，公寓，办公
			// Area : 房屋建筑面积
			// PledgePercentage : 抵押成数
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// Id : 新创建报单id
			// HouseUnitPrice : 房屋单价
			// HouseTotalPrice : 房屋总价
			// HouseAveragePrice : 行政区均价
			// HousePledgePrice : 房屋抵押价格
			// HouseDealPeriod : 房屋成交周期
			// HouseNearbyAveragePrice1 : 周边小区价格1
			// HouseNearbyAveragePrice2 : 周边小区价格2
			// HouseNearbyAveragePrice3 : 周边小区价格3
			// HouseNearbyAveragePrice4 : 周边小区价格4
	
	// *3. 完成房屋估值操作接口

		// 接口地址: CompleteHouseValuation
		
		// 接口说明：完成风控初审操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"HouseId" : "",
			"OperationRecordId" : "",
			"HouseValuationImageUrl" : "",
			"C_HouseValuationImageUrl" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// HouseId : 房屋id
			// OperationRecordId : 操作记录id
			// HouseValuationImageUrl : 单套房产的估值报告照片
			// C_HouseValuationImageUrl : 单套房产的估值报告照片缩图图url
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// *估值报告确认页面接口(2)-销售

	// *1. 获取房屋估值确认页面参数接口

		// 接口地址: GetConfirmHouseValuationParams
		
		// 接口说明：获取房屋估值确认页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"HouseId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				{ 	
					"HouseValuationImageUrl" : "",
					"C_HouseValuationImageUrl" : "",
					"HouseValuationOperatorId" : "",
					"HouseValuationOperatorName" : "", 
					"HouseValuationConfirmDateTime" : ""
				}
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// HouseId : 房屋id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// HouseValuationImageUrl : 房屋估值照片url
			// C_HouseValuationImageUrl : 房屋估值照片缩略图url
			// HouseValuationOperatorId : 房屋估值操作人Id
			// HouseValuationOperatorName : 房屋估值操作人姓名
			// HouseValuationConfirmDateTime : 房屋估值报告确认操作时间

	// *2. 完成房屋估值确认操作

		// 接口地址: CompleteConfirmHouseValuation
		
		// 接口说明：完成房屋估值报告确认操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"HouseId" : "",
			"OperationRecordId" : "",
			"HouseValuationConfirmComment" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// HouseId : 房屋id
			// OperationRecordId : 
			// HouseValuationConfirmComment : 销售确认房屋估值备注
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	
	
// *正式报单页面接口-销售

	// 接口地址: SubmitBorrowerInfo
	
	// 接口说明：正式报单时提交借款人及相关人信息
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : "",
		"OperationRecordId" : "",
		"BorrowerName" : "",
		"BorrowerIDNO" : "",
		"BorrowerMobile" : "",
		"BorrowerMarriageStatus" : "",
		"BorrowerSpouseName" : "",
		"BorrowerSpouseIDNO" : "",
		"BorrowerSpouseMobile" : "",
		"HasCompany" : "",
		"CompanyName" : "",
		"BorrowerIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_BorrowerIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"BorrowerSpouseIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_BorrowerSpouseIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"PermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_PermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"SpousePermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_SpousePermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"PersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_PersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"MarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_MarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"SpousePersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_SpousePersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"]

	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : ""
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 订单id
		// OperationRecordId : 操作记录id
		// BorrowerName : 借款人姓名
		// BorrowerIDNO : 借款人身份证号
		// BorrowerMobile : 借款人手机号
		// BorrowerMarriageStatus : 借款人婚姻状态
		// BorrowUsage : 借款用途
		// BorrowerSpouseName : 借款人配偶姓名
		// BorrowerSpouseIDNO : 借款人配偶身份证号
		// BorrowerSpouseMobile : 借款人配偶手机号
		// HasCompany : 是否有公司
		// CompanyName : 企业名称
		// BorrowerIDNOImageUrls : 借款人身份证照片
		// C_BorrowerIDNOImageUrls : 借款人身份证照片缩略图
		// BorrowerSpouseIDNOImageUrls : 借款人配偶身份证照片
		// C_BorrowerSpouseIDNOImageUrls : 借款人配偶身份证照片缩略图
		// PermanentResidenceBookImageUrls : 借款人户口本照片
		// C_PermanentResidenceBookImageUrls : 借款人户口本照片缩略图
		// SpousePermanentResidenceBookImageUrls : 借款人配偶户口本照片
		// C_SpousePermanentResidenceBookImageUrls : 借款人配偶户口本照片缩略图
		// PersonalCreditReportImageUrls : 借款人征信记录照片
		// C_PersonalCreditReportImageUrls : 借款人征信记录照片缩略图
		// MarriageCertificateImageUrls : 借款人结婚材料照片
		// C_MarriageCertificateImageUrls : 借款人结婚材料照片缩略图
		// SpousePersonalCreditReportImageUrls : 借款人配偶征信照片
		// C_SpousePersonalCreditReportImageUrls : 借款人配偶征信照片缩略图

		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息	
		
// ？初审页面接口(3)-风控
	
	// *1. 获取初审页面参数接口

		// 接口地址: GetAuditBorrowerInfoParams
		
		// 接口说明：获取初审页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				{ 	
					"BorrowerName" : "",
					"BorrowerIDNO" : "",
					"BorrowerMobile" : "",
					"BorrowerSpouseName" : "",
					"BorrowerSpouseIDNO" : "",
					"BorrowerSpouseMobile" : "",
					"CompanyName" : "",
					"CompanyPhone" : ""
				}
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// BorrowerName : 借款人姓名
			// BorrowerIDNO : 借款人身份证号
			// BorrowerMobile : 借款人手机号
			// BorrowUsage : 借款用途
			// BorrowerSpouseName : 借款人配偶姓名
			// BorrowerSpouseIDNO : 借款人配偶身份证号
			// BorrowerSpouseMobile : 借款人配偶手机号
			// CompanyName : 企业名称
			// CompanyPhone : 企业电话

	// ？2. 获取借款人及其配偶风控信息接口

		// 接口地址: AuditBorrowerInfo
		
		// 接口说明：对借款人及相关人员进行风控筛查,获取返回风控数据
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"BorrowerName" : "",
			"BorrowerIDNO" : "",
			"BorrowerMobile" : "",
			"BorrowerSpouseName" : "",
			"BorrowerSpouseIDNO" : "",
			"BorrowerSpouseMobile" : "",
			"CompanyName" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : {
				"SecurityInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
				"LawsuitInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
				"EnforcementInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
				"CreditInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
				"P2PBlacklistInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
				"TaxInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
				"CriminalInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
				"LoanExpirationInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
				"MultipointLendingInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
				"CompanyInfo" : {"BusinessInfo" : "", "AdministrativePenaltyInfo" : "", "SharePledgeInfo" : "", "MovablesPledgeInfo" : "", "TaxOwingInfo" : "", "JudicialSaleInfo" : "", "LawsuitInfo" : "", "CourtAnnouncementInfo" : "", "TrialInfo" : "", "CreditEnforcementInfo" : "", "CourtEnforcementInfo" : "", "CriminalInfo" : "", "RiskInfo" : "", "BusinessScope" : ""}
			}
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// BorrowerName : 借款人姓名
			// BorrowerIDNO : 借款人身份证号
			// BorrowerMobile : 借款人手机号
			// BorrowerSpouseName : 借款人配偶姓名
			// BorrowerSpouseIDNO : 借款人配偶身份证号
			// BorrowerSpouseMobile : 借款人配偶手机号	
			// CompanyName : 企业名称
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	
			// SecurityInfo : 公安不良行为
			// LawsuitInfo : 法院涉诉
			// EnforcementInfo : 法院被执行人
			// CreditInfo : 失信被执行人
			// P2PBlacklistInfo : 网络借贷黑名单
			// TaxInfo : 税务负面
			// CriminalInfo : 严重违法
			// LoanExpirationInfo : 信贷逾期
			// MultipointLendingInfo : 多头借贷
			// CompanyInfo : 企业信息
			// BusinessInfo : 经营异常
			// AdministrativePenaltyInfo : 行政处罚
			// SharePledgeInfo : 股权出质
			// MovablesPledgeInfo : 动产抵押
			// TaxOwingInfo : 欠税公告
			// JudicialSaleInfo : 司法拍卖
			// LawsuitInfo : 法律诉讼
			// CourtAnnouncementInfo : 法院公告
			// TrialInfo : 开庭公告
			// CreditEnforcementInfo : 失信被执行人
			// CourtEnforcementInfo : 法院被执行人
			// CriminalInfo : 严重违法
			// RiskInfo : 企业风险
			// BusinessScope : 经营范围

	// *3. 完成风控初审操作接口

		// 接口地址: CompleteAuditBorrowerInfo
		
		// 接口说明：完成风控初审操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : "",
			"FirstAuditionImageUrl" : "",
			"C_FirstAuditionImageUrl" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// OperationRecordId : 操作记录id
			// FirstAuditionImageUrl : 初审结果照片url
			// C_FirstAuditionImageUrl : 初审结果照片缩略图url
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// *初审确认页面接口(2)-销售

	// *1. 获取初审确认页面参数接口

		// 接口地址: GetConfirmAuditBorrowerInfoParams
		
		// 接口说明：获取初审确认页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				{ 	
					"FirstAuditionImageUrl" : "",
					"FirstAuditionOperatorId" : "",
					"FirstAuditionOperatorName" : "", 
					"FirstAuditionConfirmDateTime" : ""
				}
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// FirstAuditionImageUrl : 风控初审照片url
			// FirstAuditionOperatorId : 风控初审操作人Id
			// FirstAuditionOperatorName : 风控初审操作人姓名
			// FirstAuditionConfirmDateTime : 风控初审报告确认操作时间

	// *2. 完成风控初审确认操作

		// 接口地址: CompleteConfirmAuditBorrowerInfo
		
		// 接口说明：完成风控初审报告确认操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : "",
			"FirstAuditionConfirmComment" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// OperationRecordId : 操作记录id
			// FirstAuditionConfirmComment : 销售确认风控初审报告备注
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// ?立项页面接口(2)-销售

	// 1. 获取立项页面参数接口

		// 接口地址: GetOrderValidationParams
		
		// 接口说明：获取立项页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : {
				"HasCompany" : "true|false"
			}
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id

		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// HasCompany : 是否有公司
	
	// 2. 提交立项页面数据接口

		// 接口地址: OrderValidation
		
		// 接口说明：立项
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : "",
			"ExpectedBorrowAmount" : "",
			"ExpectedBorrowPeriodInMonth" : "",
			"BorrowUsage" : "",
			"InterestReturnSource" : "",
			"PrincipalReturnSource" : "",
			"ShareOwnerInfo" : "",
			"PledgeInfo" : "",
			"IsPledged" : "",
			"PledgeOrgnization" : "",
			"PledgePrice" : "",
			"IsLoanPaidOff" : "",
			"IsZhuanDan" : "",
			"HasCompany" : "",
			"CompanySecurityIDNO" : "",
			"CompanyPhone" : "",
			"CompanyLicenseImageUrl" : "",
			"C_CompanyLicenseImageUrl" : "",
			"CompanyLegalPersonName" : "",
			"CompanyLegalPersonIDNO" : "",
			"CompanyArticlesImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"C_CompanyArticlesImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"C_BankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LoanPriority" : "",
			"SaleOrderValidationComment" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// OperationRecordId : 报单记录id
			// ExpectedBorrowAmount : 申请贷款金额
			// ExpectedBorrowPeriodInMonth : 申请贷款期限
			// BorrowUsage : 借款用途
			// InterestReturnSource : 利息还款来源
			// PrincipalReturnSource" : 本金还款来源
			// ShareOwnerInfo : 共有情况
			// PledgeInfo : 房屋抵押现状
			// IsPledged : 抵押状况
			// PledgeOrgnization : 抵押机构
			// PledgePrice : 抵押金额
			// IsLoanPaidOff : 是否结清
			// IsZhuanDan : 是否转单
			// HasCompany : 是否有公司
			// CompanySecurityIDNO : 企业统一社会代码
			// CompanyPhone : 企业电话号码
			// CompanyLicenseImageUrl : 公司营业执照副本
			// C_CompanyLicenseImageUrl : 公司营业执照副本缩略图
			// CompanyLegalPersonName : 企业法定代表人姓名
			// CompanyLegalPersonIDNO : 企业法定代表人身份证号
			// CompanyArticlesImageUrls : 企业章程照片
			// C_CompanyArticlesImageUrls : 企业章程照片缩略图
			// BankAccountStatementImageUrls : 银行流水
			// C_BankAccountStatementImageUrls : 银行流水缩略图
			// LoanPriority : 客户需求侧重
			// SaleOrderValidationComment : 销售经理立项建议
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// *二审页面接口(3)-风控

	// *1. 获取二审页面参数接口

		// 接口地址: GetSecondAuditionParams
		
		// 接口说明：获取二审页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"HouseId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				{ 	
					"BorrowerName" : "",
					"BorrowerIDNO" : "",
					"BorrowerMobile" : "",
					"BorrowerSpouseName" : "",
					"BorrowerSpouseIDNO" : "",
					"BorrowerSpouseMobile" : "",
					"CompanyName" : "",
					"CompanySecurityIDNO" : "",
					"CompanyPhone" : "",
					"ExpectedBorrowAmount" : "",
					"ExpectedBorrowPeriodInMonth" : "",
					"BorrowUsage" : "",
					"InterestReturnSource" : "",
					"PrincipalReturnSource" : "",
					"Location" : "",
					"Type" : "",
					"ShareOwnerInfo" : "",
					"Area" : "",
					"Usage" : "",
					"PledgeInfo" : "",
					"HouseTotalPrice" : "",
					"PledgePercentage" : "",
					"PledgePrice" : ""
				}
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// HouseId : 估值房屋id
			
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// BorrowerName : 借款人姓名
			// BorrowerIDNO : 借款人身份证号
			// BorrowerMobile : 借款人手机号
			// BorrowerSpouseName : 借款人配偶姓名
			// BorrowerSpouseIDNO : 借款人身份证号
			// BorrowerSpouseMobile : 借款人配偶手机号
			// CompanyName : 公司名称
			// CompanySecurityIDNO : 公司社会统一安全号
			// CompanyPhone : 公司手机号
			// ExpectedBorrowAmount : 申请贷款金额
			// ExpectedBorrowPeriodInMonth : 申请贷款期限
			// BorrowUsage : 借款用途
			// InterestReturnSource : 利息还款来源
			// PrincipalReturnSource : 本金还款来源
			// Location : 房屋坐落
			// Type : 房屋性质
			// ShareOwnerInfo : 共有情况
			// Area : 房屋建筑面积
			// Usage : 用途
			// PledgeInfo : 房屋使用状态
			// HouseTotalPrice : 房屋总价
			// PledgePercentage : 抵押成数
			// PledgePrice : 抵押总价	
			
	// *2. 输入二审风控意见

		// 接口地址: SubmitSecondAuditionInfo
		
		// 接口说明：输入二审风控意见
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"SecondAuditionBorrowerSecurityAnalysis" : "",
			"SecondAuditionBorrowerIncomeAnalysis" : "",
			"SecondAuditionBorrowerPayOffAbilityAnalysis" : "",
			"SecondAuditionComment" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// SecondAuditionBorrowerSecurityAnalysis : 借款主体风险分析
			// SecondAuditionBorrowerIncomeAnalysis : 还款来源分析
			// SecondAuditionBorrowerPayOffAbilityAnalysis : 偿债能力分析
			// SecondAuditionComment : 风控建议
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

	// *3. 完成风控二审操作接口

		// 接口地址: CompleteSecondAudition
		
		// 接口说明：完成风控初审操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : "",
			"SecondAuditionImageUrl" : "",
			"C_SecondAuditionImageUrl" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// OperationRecordId : 操作记录id
			// SecondAuditionImageUrl : 二审结果照片url
			// C_SecondAuditionImageUrl : 二审结果缩略图照片url
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// *产品匹配页面接口(4)-客服

	// *1. 获取产品类别列表接口

		// 接口地址: GetProductClassList
		
		// 接口说明：获取产品种类列表
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				[ 	
					{ "Id" : "1", "Name" : "银行",},
					{ "Id" : "2", "Name" : "信托"},
					{ "Id" : "3", "Name" : "其它"}
				]
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// Id : 产品Id
			// Name : 产品种类名称

	// *2. 获取产品类别列表接口

		// 接口地址: GetProductList
		
		// 接口说明：获取产品列表
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				[ 	
					{ "Id" : "", "ClassId": "", "ClassName": "银行", "Name": "银行产品1", "Description" : ""},
					{ "Id" : "", "ClassId": "", "ClassName": "银行", "Name": "银行产品2", "Description" : ""}
				]
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// ClassId : 产品种类Id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// Id : 产品Id
			// ClassId : 产品类别Id
			// ClassName : 产品类别名称
			// Name : 产品名称
			// Description : 产品要素（介绍）

	// *3. 获取产品匹配页面页面参数接口

		// 接口地址: GetProductMatchParams
		
		// 接口说明：获取产品匹配页面页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
			{
				"OrderValidationImageUrl" : "",
				"C_OrderValidationImageUrl" : "",
				"SecondAuditionImageUrl" : "",
				"C_SecondAuditionImageUrl" : ""
			}
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	
			// OrderValidationImageUrl : 立项报告照片url
			// SecondAuditionImageUrl : 二审照片url

	// *4. 完成产品匹配操作接口

		// 接口地址: CompleteProductMatch
		
		// 接口说明：完成产品匹配操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : "",
			"MatchProductIds" : ["1","2"]
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// MatchedProductIds : 匹配产品id数组
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// *产品匹配确认页面(2)-销售

	// *1. 获取产品匹配确认页面参数接口

		// 接口地址: GetConfirmProductMatchParams
		
		// 接口说明：获取产品匹配确认页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : {
				"MatchProducts" : [
					{"Id" : "", "Name" : "", "Description" : "", "ClassId" : "", "ClassName" : ""},
					{"Id" : "", "Name" : "", "Description" : "", "ClassId" : "", "ClassName" : ""}
				],
				"MatchProductOperatorId" : "",
				"MatchProductOperatorName" : "",
				"MatchProductDateTime" : ""

			}
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// Id : 产品Id
			// Name : 产品名称
			// Description : 产品要素（介绍）
			// ClassId : 产品种类Id
			// ClassName : 产品种类名称
			// MatchProductOperatorId : 产品匹配操作人id
			// MatchProductOperatorName : 产品匹配操作人名称
			// MatchProductDateTime : 产品匹配操作时间

	// *2. 完成产品匹配确认操作接口

		// 接口地址: CompleteConfirmProductMatch
		
		// 接口说明：完成产品匹配确认操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : "",
			"ConfirmMatchProductComment" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// ConfirmMatchProductComment : 确认匹配产品操作备注
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// *联系产品供应方页面接口(2)-客服

	// *1. 获取联系产品供应方页面参数接口

		// 接口地址: GetContactProductProviderParams
		
		// 接口说明：获取联系产品供应方页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"HouseId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				{ 	
					"BorrowerIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"BorrowerSpouseIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"CompanyLicenseImageUrl" : "",
					"HouseCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"PermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"SpousePermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"MarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"SpouseMarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"PersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"SpousePersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"BankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"OtherCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_BorrowerIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_BorrowerSpouseIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_CompanyLicenseImageUrl" : "",
					"C_HouseCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_PermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_SpousePermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_MarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_SpouseMarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_PersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_SpousePersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_BankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_OtherCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"]
				}
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// HouseId : 房屋id

		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// BorrowerIDNOImageUrls : 客户身份证照片
			// BorrowerSpouseIDNOImageUrls : 客户配偶身份证照片
			// CompanyLicenseImageUrl : 公司营业执照副本
			// HouseCertificateImageUrls : 房产证照片
			// PermanentResidenceBookImageUrls : 户口本照片
			// SpousePermanentResidenceBookImageUrls : 客户配偶户口本照片
			// MarriageCertificateImageUrls : 婚姻证明材料照片
			// SpouseMarriageCertificateImageUrls : 客户配偶婚姻证明材料照片
			// PersonalCreditReportImageUrls : 征信报告
			// SpousePersonalCreditReportImageUrls : 客户配偶征信报告
			// BankAccountStatementImageUrls : 银行流水
			// OtherCertificateImageUrls : 其它
			// C_BorrowerIDNOImageUrls : 客户身份证照片缩略图
			// C_BorrowerSpouseIDNOImageUrls : 客户配偶身份证照片缩略图
			// C_CompanyLicenseImageUrl : 公司营业执照副本缩略图
			// C_HouseCertificateImageUrls : 房产证照片缩略图
			// C_PermanentResidenceBookImageUrls : 户口本照片缩略图
			// C_SpousePermanentResidenceBookImageUrls : 客户配偶户口本照片缩略图
			// C_MarriageCertificateImageUrls : 婚姻证明材料照片缩略图
			// C_SpouseMarriageCertificateImageUrls : 客户配偶婚姻证明材料照片缩略图
			// C_PersonalCreditReportImageUrls : 征信报告缩略图
			// C_SpousePersonalCreditReportImageUrls : 客户配偶征信报告缩略图
			// C_BankAccountStatementImageUrls : 银行流水缩略图
			// C_OtherCertificateImageUrls : 其它缩略图

	// *2. 完成联系产品供应方操作接口

		// 接口地址: CompleteContactProductProvider
		
		// 接口说明：完成联系产品供应方确认操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : "",
			"ContactProductProviderComment" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// ContactProductProviderComment : 联系产品供应方备注
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// [废弃]补充资料页面接口(2)-销售

	// 1. 获取补充资料页面参数接口

		// 接口地址: GetComplementaryMaterialParams
		
		// 接口说明：获取补充资料页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				{ 	
					"BorrowerSpouseIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"PermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"MarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"HouseCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"RentalContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"BuyContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"DeedTaxInvoiceImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"LoanContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"LoanPaidOffCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"BankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"PersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"CompanyLicenseImageUrl" : ["ImageUrl1", "ImageUrl2"],
					"CompanyCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"CompanyBankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"BuySellContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"GuarantorProofDocumentImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"BankCardImageUrl" : ["ImageUrl1", "ImageUrl2"],
					"CompanyHoldingCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"CompanyFinancialStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"LawsuitFinishCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"OtherCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"]
				}
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// BorrowerSpouseIDNOImageUrls : 客户配偶身份证照片
			// PermanentResidenceBookImageUrls : 户口本照片
			// MarriageCertificateImageUrls : 婚姻证明材料照片
			// HouseCertificateImageUrls : 房产证照片
			// RentalContractImageUrls : 房屋租赁合同照片
			// BuyContractImageUrls : 原始购房合同照片
			// DeedTaxInvoiceImageUrls : 契税发票
			// LoanContractImageUrls : 上家借款合同
			// LoanPaidOffCertificateImageUrls : 上家结清证明
			// BankAccountStatementImageUrls : 银行流水
			// PersonalCreditReportImageUrls : 征信报告
			// CompanyLicenseImageUrl : 公司营业执照副本
			// CompanyCreditReportImageUrls : 企业征信
			// CompanyBankAccountStatementImageUrls : 对公流水
			// BuySellContractImageUrls : 购销合同
			// GuarantorProofDocumentImageUrls : 担保人财产共有人同意提供担保的书面文件
			// BankCardImageUrl : 还款卡
			// CompanyHoldingCertificateImageUrls : 实控人证明
			// CompanyFinancialStatementImageUrls : 企业财务报表
			// LawsuitFinishCertificateImageUrls : 诉讼结案证明
			// OtherCertificateImageUrls : 其它
			
	// 2. 完成补充材料操作接口

		// 接口地址: CompleteComplementaryMaterial
		
		// 接口说明：完成补充材料操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"BorrowerSpouseIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"PermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"MarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"HouseCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"RentalContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BuyContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"DeedTaxInvoiceImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LoanContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LoanPaidOffCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"PersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"CompanyLicenseImageUrl" : ["ImageUrl1", "ImageUrl2"],
			"CompanyCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"CompanyBankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BuySellContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"GuarantorProofDocumentImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BankCardImageUrl" : ["ImageUrl1", "ImageUrl2"],
			"CompanyHoldingCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"CompanyFinancialStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LawsuitFinishCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"OtherCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"]
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// BorrowerSpouseIDNOImageUrls : 客户配偶身份证照片
			// PermanentResidenceBookImageUrls : 户口本照片
			// MarriageCertificateImageUrls : 婚姻证明材料照片
			// HouseCertificateImageUrls : 房产证照片
			// RentalContractImageUrls : 房屋租赁合同照片
			// BuyContractImageUrls : 原始购房合同照片
			// DeedTaxInvoiceImageUrls : 契税发票
			// LoanContractImageUrls : 上家借款合同
			// LoanPaidOffCertificateImageUrls : 上家结清证明
			// BankAccountStatementImageUrls : 银行流水
			// PersonalCreditReportImageUrls : 征信报告
			// CompanyLicenseImageUrl : 公司营业执照副本
			// CompanyCreditReportImageUrls : 企业征信
			// CompanyBankAccountStatementImageUrls : 对公流水
			// BuySellContractImageUrls : 购销合同
			// GuarantorProofDocumentImageUrls : 担保人财产共有人同意提供担保的书面文件
			// BankCardImageUrl : 还款卡
			// CompanyHoldingCertificateImageUrls : 实控人证明
			// CompanyFinancialStatementImageUrls : 企业财务报表
			// LawsuitFinishCertificateImageUrls : 诉讼结案证明
			// OtherCertificateImageUrls : 其它
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// *下户页面接口-客服

	// *接口地址: CompleteHouseVisit
		
	// 接口说明：下户完成操作
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : "",
		"OperationRecordId" : "",
		"HouseVisitImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_HouseVisitImageUrls" : ["ImageUrl1", "ImageUrl2"]
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		// HouseVisitImageUrls : 下户照片
		// C_HouseVisitImageUrls : 下户照片缩略图
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		
// *产品终审页面(批贷)接口-客服

	// *完成产品终审页面(批贷)确认操作接口

		// 接口地址: CompleteLoanApproval
		
		// 接口说明：完成产品终审页面(批贷)确认操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : "",
			"IsLoanApproved" : "",
			"LoanApprovalImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"C_LoanApprovalImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LoanAmount" : "",
			"LoanPeriodInMonth" : "",
			"LoanInterest" : "",
			"LoanRejectionComment" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// IsLoanApproved : 是否批贷通过
			// LoanApprovalImageUrls : 批贷函照片
			// C_LoanApprovalImageUrls : 批贷函照片缩略图
			// LoanAmount : 批贷金额
			// LoanPeriodInMonth : 批贷期限
			// LoanInterest : 批贷利率
			// LoanRejectionComment : 批贷拒绝理由
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// *产品终审结果确认页面接口(2)-销售

	// *1. 获取产品终审结果确认参数接口

		// 接口地址: GetConfirmLoanApprovalParams
		
		// 接口说明：获取产品终审页面(批贷)确认页面参数
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : ""
			
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				{ 	
					"IsLoanApproved" : "",
					"LoanApprovalImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"C_LoanApprovalImageUrls" : ["ImageUrl1", "ImageUrl2"],
					"LoanAmount" : "",
					"LoanPeriodInMonth" : "",
					"LoanInterest" : "",
					"LoanApprovalOperatorId" : "",
					"LoanApprovalOperatorName" : "",
					"LoanApprovalDateTime" : "",
					"LoanRejectionComment" : ""
				}
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// IsLoanApproved : 是否批贷通过
			// LoanApprovalImageUrls : 产品供应方批贷函
			// LoanApprovalImageUrls : 产品供应方批贷函缩略图
			// LoanAmount : 批贷金额
			// LoanPeriodInMonth : 批贷期限
			// LoanInterest : 批贷利率
			// LoanApprovalOperatorId : 操作人id
			// LoanApprovalOperatorName : 操作人名称
			// LoanApprovalDateTime : 操作时间
			// LoanRejectionComment : 批贷拒绝理由

	// *2. 完成产品终审页面(批贷)确认操作接口

		// 接口地址: CompleteConfirmLoanApproval
		
		// 接口说明：完成产品终审页面(批贷)确认操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// *打印合同页面接口(2)-客服

	// *1. 获取合同模板列表接口

		// 接口地址: GetContractTemplateList
		
		// 接口说明：获取合同模板列表
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				[	
					{ "Id" : "", "Name" : "合同模板1", "DocumentUrl" : ""},
					{ "Id" : "", "Name" : "合同模板2", "DocumentUrl" : ""}
				]
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// Id : 合同模板id
			// Name : 合同模板名称
			// DocumentUrl : 合同模板文件url

	// *2. 完成打印合同接口

		// 接口地址: CompletePrintContract
		
		// 接口说明：完成打印合同
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"OperationRecordId" : "",
			"ContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"C_ContractImageUrls" : ["ImageUrl1", "ImageUrl2"]
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			// OperationRecordId : 报单操作记录id
			// ContractImageUrls : 合同照片url
			// C_ContractImageUrls : 合同照片缩略图url
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息

// *面签公证页面接口-客服

	// 接口地址: CompleteSignContract
		
	// 接口说明：面签公证操作完成
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : "",
		"OperationRecordId" : "",
		"SignContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_SignContractImageUrls" : ["ImageUrl1", "ImageUrl2"]
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		// SignContractImageUrls : 面签现场照片
		// C_SignContractImageUrls : 面签现场照片缩略图
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息

// *进抵页面接口-客服

	// 接口地址: CompletePledge
		
	// 接口说明：进抵操作完成
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : "",
		"OperationRecordId" : "",
		"PledgeImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_PledgeImageUrls" : ["ImageUrl1", "ImageUrl2"]
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		// PledgeImageUrls : 进抵现场照片
		// C_PledgeImageUrls : 进抵现场照片缩略图
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息

// *放款页面接口-客服

	// 接口地址: CompleteLoanReceived
		
	// 接口说明：放款操作完成
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : "",
		"OperationRecordId" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		// LoanReceivedImageUrls : 放款现场照片
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息

// *提交收款凭证接口-客服

	// 接口地址: CompleteUploadLoanReceivedCertificate
		
	// 接口说明：提交收款凭证操作完成
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : "",
		"OperationRecordId" : "",
		"LoanReceivedImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"C_LoanReceivedImageUrls" : ["ImageUrl1", "ImageUrl2"]
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		// LoanReceivedImageUrls : 放款现场照片
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息

// *归档页面接口-销售

	// 接口地址: CompleteFiling
		
	// 接口说明：归档操作完成
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : "",
		"OperationRecordId" : "",
		"BorrowerMobile" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		// BorrowerMobile : 客户电话
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息

// 获取报单当前信息接口-All

	// 接口地址: GetOrderInfo
		
	// 接口说明：归档操作完成
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
		"data" : {

			"Id" : "",
			"CreationDateTime" : "",
			"CurrentOperationName" : "",
			"Status" : "",
			"HouseValuationImageUrl" : "",
			"HouseValuationOperatorName" : "",
			"HouseValuationDateTime" : "",
			"FirstAuditionImageUrl" : "",
			"FirstAuditionOperatorName" : "",
			"FirstAuditionImageDateTime" : "",
			"OrderValidationImageUrl" : "",
			"OrderValidationOperatorName" : "",
			"OrderValidationDateTime" : "",
			"SecondAuditionImageUrl" : "",
			"SecondAuditionOperatorName" : "",
			"SecondAuditionDateTime" : "",
			"MatchProductClass" : "",
			"MatchProductName" : "",
			"MatchProductDescription" : "",
			"MatchProductOperatorName" : "",
			"MatchProductOperatorDateTime" : "",
			"HouseVisitImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"HouseVisitOperatorName" : "",
			"HouseVisitDateTime" : "",
			"IsLoanApproved" : "",
			"LoanApprovalImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LoanAmount" : "",
			"LoanPeriodInMonth" : "",
			"LoanInterest" : "",
			"LoanApprovalOperatorName" : "",
			"LoanApprovalDateTime" : "",
			"ContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"ContractOperatorName" : "",
			"ContractDateTime" : "",
			"SignContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"SignContractOperatorName" : "",
			"SignContractDateTime" : "",
			"PledgeImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"PledgeOperatorName" : "",
			"PledgeDateTime" : "",
			"LoanReceivedImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LoanReceivedOperatorName" : "",
			"LoanReceivedDateTime" : "",
			"FilingImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"FilingOperatorName" : "",
			"FilingDateTime" : "",
			"BorrowerIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BorrowerSpouseIDNOImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"PermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"MarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"HouseCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"RentalContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BuyContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"DeedTaxInvoiceImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LoanContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LoanPaidOffCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"PersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"CompanyLicenseImageUrl" : ["ImageUrl1", "ImageUrl2"],
			"CompanyCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"CompanyBankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BuySellContractImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"GuarantorProofDocumentImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"BankCardImageUrl" : ["ImageUrl1", "ImageUrl2"],
			"CompanyHoldingCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"CompanyFinancialStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"LawsuitFinishCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
			"OtherCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"]
		}
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// Id : 报单id,
		// CreationDateTime : 报单创建时间,
		// CurrentOperationName : 当前操作名称,
		// Status : 报单状态, 0，正在进行中，1，正常结案，2，中途结案
		// HouseValuationImageUrl : 房屋估值报告照片url
		// HouseValuationOperatorName : 房屋估值操作人名称
		// HouseValuationDateTime : 房屋估值日期时间
		// FirstAuditionImageUrl : 一审报告照片url
		// FirstAuditionOperatorName : 一审操作人名称
		// FirstAuditionImageDateTime : 一审时间
		// OrderValidationImageUrl : 立项报告照片url
		// OrderValidationOperatorName : 立项操作人名称
		// OrderValidationDateTime : 立项时间
		// SecondAuditionImageUrl : 二审照片url
		// SecondAuditionOperatorName : 二审操作人名称
		// SecondAuditionDateTime : 二审日期时间
		// MatchProductClass : 产品种类
		// MatchProductName : 产品名称
		// MatchProductDescription : 产品要素（介绍）
		// MatchProductOperatorName : 匹配产品操作人
		// MatchProductOperatorDateTime : 匹配产品操作时间
		// HouseVisitImageUrls : 下户照片
		// HouseVisitOperatorName : 下户操作人
		// HouseVisitDateTime : 下户操作时间
		// IsLoanApproved : 是否批贷通过
		// LoanApprovalImageUrls : 批贷函照片
		// LoanAmount : 批贷金额
		// LoanPeriodInMonth : 批贷期限
		// LoanInterest : 批贷利率
		// LoanApprovalOperatorName : 批贷(产品终审)操作人
		// LoanApprovalDateTime : 批贷(产品终审)操作时间
		// ContractImageUrls : 合同照片url
		// ContractOperatorName : 打印合同操作人
		// ContractDateTime : 打印合同操作时间
		// SignContractImageUrls : 公证面签现场照片
		// SignContractOperatorName : 公证面签操作人
		// SignContractDateTime : 公证面签操作时间
		// PledgeImageUrls : 进抵现场照片
		// PledgeOperatorName : 进抵操作人
		// PledgeDateTime : 进抵操作时间
		// LoanReceivedImageUrls : 放款现场照片
		// LoanReceivedOperatorName : 放款操作人
		// LoanReceivedDateTime : 放款操作时间
		// BorrowerIDNOImageUrls : 客户身份证照片
		// BorrowerSpouseIDNOImageUrls : 客户配偶身份证照片
		// PermanentResidenceBookImageUrls : 户口本照片
		// MarriageCertificateImageUrls : 婚姻证明材料照片
		// HouseCertificateImageUrls : 房产证照片
		// RentalContractImageUrls : 房屋租赁合同照片
		// BuyContractImageUrls : 原始购房合同照片
		// DeedTaxInvoiceImageUrls : 契税发票
		// LoanContractImageUrls : 上家借款合同
		// LoanPaidOffCertificateImageUrls : 上家结清证明
		// BankAccountStatementImageUrls : 银行流水
		// PersonalCreditReportImageUrls : 征信报告
		// CompanyLicenseImageUrl : 公司营业执照副本
		// CompanyCreditReportImageUrls : 企业征信
		// CompanyBankAccountStatementImageUrls : 对公流水
		// BuySellContractImageUrls : 购销合同
		// GuarantorProofDocumentImageUrls : 担保人财产共有人同意提供担保的书面文件
		// BankCardImageUrl : 还款卡
		// CompanyHoldingCertificateImageUrls : 实控人证明
		// CompanyFinancialStatementImageUrls : 企业财务报表
		// LawsuitFinishCertificateImageUrls : 诉讼结案证明
		// OtherCertificateImageUrls : 其它

// *结案接口

	// 接口地址: CancelOrder
		
	// 接口说明：结案
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"OrderId" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// OrderId : 报单id
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息

// 新补充资料接口(6)

	// 1. 获取所有补充资料选项

		// 接口地址: GetMaterialList
		
		// 接口说明：获取所有补充资料选项
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				[	
					{ "Id" : "1", "FieldName" : "BorrowerIDNOImageUrls", "Name" : "客户身份证照片"},
					{ "Id" : "2", "FieldName" : "PermanentResidenceBookImageUrls", "Name" : "客户户口本照片"}
				]
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// Id : 补充资料id
			// FieldName : 补充资料字段名称
			// Name : 补充资料显示名称

	// 2. 风控或客服提交已选补充资料选项接口

		// 接口地址: SubmitMaterialList
		
		// 接口说明：风控或客服提交已选补充资料选项
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"MaterialIds" : ["1", "2"]
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// MaterialIds : 补充资料id数组
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息

	// 3. 销售获取风控或客服已选补充资料选项接口

		// 接口地址: GetSubmittedMaterialList
		
		// 接口说明：销售风控或客服提交已选补充资料选项
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : 
				[	
					{ "Id" : "1", "FieldName" : "BorrowerIDNOImageUrls", "Name" : "客户身份证照片"},
					{ "Id" : "2", "FieldName" : "PermanentResidenceBookImageUrls", "Name" : "客户户口本照片"}
				]
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// Id : 补充资料id
			// FieldName : 补充资料字段名称
			// Name : 补充资料显示名称

	// 4. 风控或客服是否可以发起补充资料请求接口

		// 接口地址: CanSubmitMaterialList
		
		// 接口说明：风控或客服是否可以发起补充资料请求
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : {
				"CanSubmitMaterialList" : "true|false"
			}
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// MaterialIds : 补充资料id数组
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// CanSubmitMaterialList : 是否可以发起补充资料请求

	// 5. 销售是否需要补充资料接口

		// 接口地址: NeedToSupplementMaterial
		
		// 接口说明：销售是否需要补充资料
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
			"data" : {
				"NeedToSupplementMaterial" : "true|false"
			}
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// NeedToSupplementMaterial : 销售是否需要补充资料

	// 6. 销售提交已选补充资料接口

		// 接口地址: SupplementMaterial
		
		// 接口说明：销售提交已选补充资料
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"Materials" : [
				{ "Id" : "1", "ImageUrls" : ["ImageUrl1", "ImageUrl2"], "C_ImageUrls" : ["ImageUrl1", "ImageUrl2"] },
				{ "Id" : "2", "ImageUrls" : ["ImageUrl1", "ImageUrl2"], "C_ImageUrls" : ["ImageUrl1", "ImageUrl2"] },
			]
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : "",
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// Materials : 补充资料数组
			// Id : 补充材料id
			// ImageUrls : 补充材料图片url
			// C_ImageUrls : 补充材料缩略图图片url
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息

