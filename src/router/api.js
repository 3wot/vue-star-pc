// 接口

// 接口基本地址：http://domain/service.asmx/

// 用户登录接口-All

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
				"token" : ""
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

// 获取报单接口-All

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
			{ 
				"Id" : "",
				"BorrowerName" : "", 
				"BorrowerMobile" : "", 
				"BorrowerIDNO" : "", 
				"CreationDateTime" : "", 
				"Status" : "", 
				"CurrentOperation" : ""
			}
		]
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// order_type : 获取报单类型，1，正在进行中报单；2，历史报单
		
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

// 获取报单操作列表接口-All

	// 接口地址: OrderOperationList
	
	// 接口说明：获取指定报单当前操作列表
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"order_id" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : "",
		"data" : [
			{ "Id" : "", "OperationId" : "", "OperationName" : "", "CreationDateTime" : "", "Status" : ""}
		]
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// order_id : 报单id
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// Id : 操作在该报单列表里Id
		// OperationId : 操作在操作字典表里Id，及操作类型Id
		// CreationDateTime : 操作创建日期时间, 格式：2018-08-01 18:00:00
		// Status : 操作状态，0，未操作，1，已操作

// 获取所以操作类型接口-All

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
		// order_id : 报单id
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// Id : 操作在操作字典表里Id，及操作类型Id
		// Name : 操作名称

// 预报单页面接口-销售

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
		"data" : { "Id" : "", "HouseId" : ""}
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// order_id : 报单id
		// OwnerName : 所有权人姓名
		// Location : 房屋坐落
		// Usage : 用途, 无，住宅*，别墅，商业，公寓，办公
		// Area : 房屋建筑面积
		// HouseCertificateImageUrls : 房产证照片
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息
		// Id : 新创建报单id
		// HouseId : 新创建房屋id

// 估值页面接口(4)-风控

	// 1. 获取房屋估值页面参数接口

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
	
	// 2. 房屋估值接口

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
			"PledgePercentage" : "",
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
	
	// 3. 上传房屋估值报告接口

		// 接口地址: UploadHouseValuationReport
		
		// 接口说明：上传估值报告图片
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"HouseId" : "",
			"HouseValuationImageUrl" : ""

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
			// HouseValuationImageUrl : 单套房产的估值报告照片
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
	
	// 4. 完成房屋估值操作接口

		// 接口地址: CompleteHouseValuationInfo
		
		// 接口说明：完成风控初审操作
		
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
			// OperationRecordId : 操作记录id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// 估值报告确认页面接口(2)-销售

	// 1. 获取房屋估值确认页面参数接口

		// 接口地址: GetConfirmHouseValuationParams
		
		// 接口说明：获取房屋估值确认页面参数
		
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
					"HouseValuationImageUrl" : "",
					"HouseValuationOperatorId" : "",
					"HouseValuationOperatorName" : "", 
					"HouseValuationConfirmDateTime" : ""
				}
			
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// OrderId : 报单id
			
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息
			// HouseValuationImageUrl : 房屋估值照片url
			// HouseValuationOperatorId : 房屋估值操作人Id
			// HouseValuationOperatorName : 房屋估值操作人姓名
			// HouseValuationConfirmDateTime : 房屋估值报告确认操作时间

	// 2. 完成房屋估值确认操作

		// 接口地址: CompleteConfirmHouseValuation
		
		// 接口说明：完成房屋估值报告确认操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"IsClosed" : "0|1",
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
			// IsClosed : 是否结案
			// HouseValuationConfirmComment : 销售确认房屋估值备注
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	
	
// 正式报单页面接口-销售

	// 接口地址: SubmitBorrowerInfo
	
	// 接口说明：正式报单时提交借款人及相关人信息
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"BorrowerName" : "",
		"BorrowerIDNO" : "",
		"BorrowerMobile" : "",
		"BorrowerMarriageStatus" : "",
		"BorrowerSpouseName" : "",
		"BorrowerSpouseIDNO" : "",
		"BorrowerSpouseMobile" : "",
		"CompanyName" : ""
	}

	// 返回数据格式：

	{
		"ret" : "ok",
		"msg" : ""
	}

	// 输入数据格式说明：

		// uid : 用户唯一标识id
		// token : 用户身份验证token
		// BorrowerName : 借款人姓名
		// BorrowerIDNO : 借款人身份证号
		// BorrowerMobile : 借款人手机号
		// BorrowerMarriageStatus : 借款人婚姻状态
		// BorrowUsage : 借款用途
		// BorrowerSpouseName : 借款人配偶姓名
		// BorrowerSpouseIDNO : 借款人配偶身份证号
		// BorrowerSpouseMobile : 借款人配偶手机号
		// CompanyName : 企业名称

		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息	
		
// 初审页面接口(4)-风控
	
	// 1. 获取初审页面参数接口

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

	// 2. 获取借款人及其配偶风控信息接口

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

	// 3. 上传风控初审结果接口

		// 接口地址: UploadAuditBorrowerInfo
		
		// 接口说明：客服上传风控初审图片
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"FirstAuditionImageUrl" : ""
		}

		// 返回数据格式：

		{
			"ret" : "ok",
			"msg" : ""
		}

		// 输入数据格式说明：

			// uid : 用户唯一标识id
			// token : 用户身份验证token
			// HouseId : 确认估值的房屋id
			// FirstAuditionImageUrl : 初审结果照片url
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

	// 4. 完成风控初审操作接口

		// 接口地址: CompleteAuditBorrowerInfo
		
		// 接口说明：完成风控初审操作
		
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
			// OperationRecordId : 操作记录id
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// 初审确认页面接口(2)-销售

	// 1. 获取初审确认页面参数接口

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

	// 2. 完成风控初审确认操作

		// 接口地址: CompleteConfirmAuditBorrowerInfo
		
		// 接口说明：完成风控初审报告确认操作
		
		// 输入数据格式:
		
		{
			"uid" : "",
			"token" : "",
			"OrderId" : "",
			"IsClosed" : "0|1",
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
			// IsClosed : 是否结案
			// FirstAuditionConfirmComment : 销售确认风控初审报告备注
			
		// 返回数据格式说明：
		
			// ret : 调用接口返回结果标志位，成功：ok，失败：fail
			// msg : 失败错误信息	

// 立项页面接口-销售

	// 接口地址: OrderValidation
	
	// 接口说明：立项
	
	// 输入数据格式:
	
	{
		"uid" : "",
		"token" : "",
		"Usage" : "",
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
		"PermanentResidenceBookImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"MarriageCertificateImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"BankAccountStatementImageUrls" : ["ImageUrl1", "ImageUrl2"],
		"PersonalCreditReportImageUrls" : ["ImageUrl1", "ImageUrl2"],
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
		// Usage : 用途
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
		// CompanyLegalPersonName : 企业法定代表人姓名
		// CompanyLegalPersonIDNO : 企业法定代表人身份证号
		// CompanyArticlesImageUrls : 企业章程照片
		// CompanyName : 企业名称
		// CompanySecurityIDNO : 企业统一社会代码
		// CompanyPhone : 企业电话号码
		// PermanentResidenceBookImageUrls ： 户口本照片
		// MarriageCertificateImageUrls : 婚姻证明材料照片
		// BankAccountStatementImageUrls : 银行流水
		// PersonalCreditReportImageUrls : 征信报告
		// LoanPriority : 客户需求侧重
		// SaleOrderValidationComment : 销售经理立项建议
		
	// 返回数据格式说明：
	
		// ret : 调用接口返回结果标志位，成功：ok，失败：fail
		// msg : 失败错误信息	

// 二审页面接口

// 产品匹配页面接口

// 联系产品供应方页面接口

// 补充资料页面接口

// 下户页面接口

// 产品终审页面(批贷)接口

// 产品终审结果确认页面接口

// 打印合同页面接口

// 面签公证页面接口

// 进抵页面接口

// 放款页面接口

// 归档页面接口





