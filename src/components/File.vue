<template>
	<div class="file">
		<el-container class="c-outer">

			<Header back="true" title="归档"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form class="m-t-20 text-left" label-width="170px" label-position="left">
						<el-row :gutter="15">
							<el-col :span="24">
								<el-form-item label="报单ID：">
									<div>{{$route.params.id}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="报单状态：">
									<div>{{Status == 0 ? '进行中' : (Status == 1 ? '正常结案' : '中途结案')}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="最后操作人：">
									<div>{{LastOperatorName}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="最后操作时间：">
									<div>{{LastOperationDateTime}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="最后操作：">
									<div>{{LastOperationName}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24" v-if="CancelOrderComment">
								<el-form-item label="结案理由：">
									<div>{{CancelOrderComment}}</div>
								</el-form-item>
							</el-col>
							
							<el-col :span="24">
								<el-form-item label="房产证照片：">
									<ImgList :arr="HouseCertificateImageUrls" :arrc="C_HouseCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>




							<el-col :span="24">
								<el-form-item label="房屋建筑面积(㎡)：">
									<div>{{HouseArea}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="房屋坐落：">
									<div>{{HouseLocation1}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="房屋性质：">
									<div>{{HouseType}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="用途：">
									<div>{{HouseUsage}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="抵押成数：">
									<div>{{HousePledgePercentage}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="房屋朝向：">
									<div>{{HouseOrientation}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="总楼层数：">
									<div>{{HouseTotalFloor}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="所在楼层：">
									<div>{{HouseFloor}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="建成年代：">
									<div>{{HouseBuildingFinishYear}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="房屋估值报告：">
									<ImgList :arr="HouseValuationImageUrl" :arrc="C_HouseValuationImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="估值确认意见：">
									<div>{{HouseValuationConfirmComment}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户姓名：">
									<div>{{BorrowerName}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户身份证号：">
									<div>{{BorrowerIDNO}}</div>
								</el-form-item>
							</el-col>
							<!-- <el-col :span="24">
								<el-form-item label="客户电话：">
									<div>{{BorrowerMobile}}</div>
								</el-form-item>
							</el-col> -->
							<el-col :span="24">
								<el-form-item label="客户身份证照片：">
									<ImgList :arr="BorrowerIDNOImageUrls" :arrc="C_BorrowerIDNOImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户户口本照片：">
									<ImgList :arr="PermanentResidenceBookImageUrls" :arrc="C_PermanentResidenceBookImageUrls"></ImgList>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="客户婚姻证明材料照片：">
									<ImgList :arr="MarriageCertificateImageUrls" :arrc="C_MarriageCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户征信报告照片：">
									<ImgList :arr="PersonalCreditReportImageUrls" :arrc="C_PersonalCreditReportImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="银行流水照片：">
									<ImgList :arr="BankAccountStatementImageUrls" :arrc="C_BankAccountStatementImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="婚姻状况：">
									<div>{{BorrowerMarriageStatus}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="配偶姓名：">
									<div>{{BorrowerSpouseName}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="配偶身份证号：">
									<div>{{BorrowerSpouseIDNO}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="配偶电话：">
									<div>{{BorrowerSpouseMobile}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="配偶身份证照片：">
									<ImgList :arr="BorrowerSpouseIDNOImageUrls" :arrc="C_BorrowerSpouseIDNOImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="配偶户口本照片：">
									<ImgList :arr="SpousePermanentResidenceBookImageUrls" :arrc="C_SpousePermanentResidenceBookImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="配偶婚姻证明材料照片：">
									<ImgList :arr="SpouseMarriageCertificateImageUrls" :arrc="C_SpouseMarriageCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="配偶征信报告照片：">
									<ImgList :arr="SpousePersonalCreditReportImageUrls" :arrc="C_SpousePersonalCreditReportImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="是否有公司：">
									<div>{{HasCompany}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业名称：">
									<div>{{CompanyName}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业统一社会信用代码：">
									<div>{{CompanySecurityIDNO}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业电话：">
									<div>{{CompanyPhone}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业法定代表人姓名：">
									<div>{{CompanyLegalPersonName}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业法人身份证号：">
									<div>{{CompanyLegalPersonIDNO}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="公司营业执照副本照片：">
									<ImgList :arr="CompanyLicenseImageUrl" :arrc="C_CompanyLicenseImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业征信照片：">
									<ImgList :arr="CompanyCreditReportImageUrls" :arrc="C_CompanyCreditReportImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="对公流水照片：">
									<ImgList :arr="CompanyBankAccountStatementImageUrls" :arrc="C_CompanyBankAccountStatementImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业财务报表照片：">
									<ImgList :arr="CompanyFinancialStatementImageUrls" :arrc="C_CompanyFinancialStatementImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="一审报告：">
									<ImgList :arr="FirstAuditionImageUrl" :arrc="C_FirstAuditionImageUrl"></ImgList>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="初审意见（待确定）：">
									<div>{{FirstAuditionComment}}</div>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="一审确认意见：">
									<div>{{FirstAuditionConfirmComment}}</div>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="申请贷款金额（万元）：">
									<div>{{ExpectedBorrowAmount}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="申请贷款期限（月）：">
									<div>{{ExpectedBorrowPeriodInMonth}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="借款用途：">
									<div>{{BorrowUsage}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="利息还款来源：">
									<div>{{InterestReturnSource}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="本金还款来源：">
									<div>{{PrincipalReturnSource}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="共有情况：">
									<div>{{ShareOwnerInfo}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="抵押物现状：">
									<div>{{PledgeInfo}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="抵押状况：">
									<div>{{IsPledged}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="抵押机构：">
									<div>{{PledgeOrgnization}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="抵押金额（万元）:">
									<div>{{PledgePrice}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="是否结清：">
									<div>{{IsLoanPaidOff}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="是否转单：">
									<div>{{IsZhuanDan}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户需求侧重：">
									<div>{{LoanPriority}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="销售立项意见：">
									<div>{{SaleOrderValidationComment}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="借款主体风险分析：">
									<div>{{SecondAuditionBorrowerSecurityAnalysis}}</div>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="还款来源分析：">
									<div>{{SecondAuditionBorrowerIncomeAnalysis}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="偿债能力分析：">
									<div>{{SecondAuditionBorrowerPayOffAbilityAnalysis}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="风控建议：">
									<div>{{SecondAuditionComment}}</div>
								</el-form-item>
							</el-col>


							
							<el-col :span="24">
								<el-form-item label="二审报告：">
									<ImgList :arr="SecondAuditionImageUrl" :arrc="C_SecondAuditionImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="二审确认意见：">
									<div>{{SecondAuditionConfirmComment}}</div>
								</el-form-item>
							</el-col>
							
							<el-col :span="24">
								<el-form-item label="匹配产品：">
									<el-tag class="look-tag" v-for="(item,index) in MatchProducts" :key="index">{{item}}</el-tag>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="匹配产品确认意见：">
									<div>{{ConfirmMatchProductComment}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="联系产品供应方意见：">
									<div>{{ContactProductProviderComment}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="下户照片：">
									<ImgList :arr="HouseVisitImageUrls" :arrc="C_HouseVisitImageUrls"></ImgList>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="是否批贷通过：">
									<div>{{IsLoanApproved ? '通过' : '未通过'}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24" v-if="!IsLoanApproved">
								<el-form-item label="贷款拒绝意见：">
									<div>{{LoanRejectionComment}}</div>
								</el-form-item>
							</el-col>
							
							<el-col :span="24">
								<el-form-item label="批贷金额(万元)：">
									<div>{{LoanAmount}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="批贷期限(月)：">
									<div>{{LoanPeriodInMonth}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="批贷月利率(%)：">
									<div>{{LoanInterest}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="批贷函照片：">
									<ImgList :arr="LoanApprovalImageUrls" :arrc="C_LoanApprovalImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="合同照片：">
									<ImgList :arr="ContractImageUrls" :arrc="C_ContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="公证面签现场照片：">
									<ImgList :arr="SignContractImageUrls" :arrc="C_SignContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="进抵现场照片：">
									<ImgList :arr="PledgeImageUrls" :arrc="C_PledgeImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="收放款凭证照片：">
									<ImgList :arr="LoanReceivedImageUrls" :arrc="C_LoanReceivedImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							
							
							
							<el-col :span="24">
								<el-form-item label="房屋租赁合同照片：">
									<ImgList :arr="RentalContractImageUrls" :arrc="C_RentalContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="原始购房合同照片：">
									<ImgList :arr="BuyContractImageUrls" :arrc="C_BuyContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="契税发票照片：">
									<ImgList :arr="DeedTaxInvoiceImageUrls" :arrc="C_DeedTaxInvoiceImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="上家借款合同照片：">
									<ImgList :arr="LoanContractImageUrls" :arrc="C_LoanContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="上家结清证明照片：">
									<ImgList :arr="LoanPaidOffCertificateImageUrls" :arrc="C_LoanPaidOffCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							
							<el-col :span="24">
								<el-form-item label="担保人财产共有人同意提供担保的书面文件：">
									<ImgList :arr="GuarantorProofDocumentImageUrls" :arrc="C_GuarantorProofDocumentImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="银行卡照片：">
									<ImgList :arr="BankCardImageUrl" :arrc="C_BankCardImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="实控人证明照片：">
									<ImgList :arr="CompanyHoldingCertificateImageUrls" :arrc="C_CompanyHoldingCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							
							<el-col :span="24">
								<el-form-item label="诉讼结案证明照片：">
									<ImgList :arr="LawsuitFinishCertificateImageUrls" :arrc="C_LawsuitFinishCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="购销合同照片：">
									<ImgList :arr="BuySellContractImageUrls" :arrc="C_BuySellContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业章程：">
									<ImgList :arr="CompanyArticlesImageUrls" :arrc="CompanyArticlesImageUrls"></ImgList>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="其它照片：">
									<ImgList :arr="OtherCertificateImageUrls" :arrc="C_OtherCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="客户电话">
									<input class="el-input__inner" type="text" placeholder="请输入客户电话" v-model="BorrowerMobile" @input="BorrowerMobileChange">
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</div>

				<div class="sec">
					
					<el-button class="pull-left" type="primary" @click="sub">完成</el-button>

					
				</div>


			</el-main>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'
import ImgUpload from './ImgUpload'
import ImgList from './ImgList'

export default {
	components:{
		Header, ImgUpload, ImgList
	},
	name: 'File',
	data () {
		return {
			LastOperatorName: '',
			LastOperationDateTime: '',
			CancelOrderComment: '',
			HouseArea: '',
			HouseLocation1: '',
			HouseType: '',
			HouseUsage: '',
			HousePledgePercentage: '',
			HouseOrientation: '',
			HouseTotalFloor: '',
			HouseFloor: '',
			HouseBuildingFinishYear: '',
			HouseValuationConfirmComment: '',
			BorrowerName: '',
			BorrowerIDNO: '',

			BorrowerMarriageStatus: '',
			BorrowerSpouseName: '',
			BorrowerSpouseIDNO: '',
			BorrowerSpouseMobile: '',
			HasCompany: '',
			CompanyName: '',
			CompanySecurityIDNO: '',
			CompanyPhone: '',
			CompanyLegalPersonName: '',
			CompanyLegalPersonIDNO: '',
			ExpectedBorrowAmount: '',
			ExpectedBorrowPeriodInMonth: '',
			BorrowUsage: '',
			InterestReturnSource: '',
			PrincipalReturnSource: '',
			ShareOwnerInfo: '',
			PledgeInfo: '',
			IsPledged : '',
			PledgeOrgnization: '',
			PledgePrice: '',
			IsLoanPaidOff: '',
			IsZhuanDan: '',
			LoanPriority: '',
			SecondAuditionBorrowerSecurityAnalysis: '',
			SecondAuditionBorrowerIncomeAnalysis: '',
			SecondAuditionBorrowerPayOffAbilityAnalysis: '',
			LoanReceivedDateTime: '',
			CompanyArticlesImageUrls: '',

			FirstAuditionComment: '',

			LastOperationName: '',
			CurrentOperationName: '', // 当前操作名称,
			Status: '', // 报单状态: [], 0，正在进行中，1，正常结案，2，中途结案
			HouseValuationImageUrl: '', // 房屋估值报告照片url
			C_HouseValuationImageUrl: '', // 房屋估值报告照片缩略图url
			// HouseValuationOperatorName: [], // 房屋估值操作人名称
			// HouseValuationDateTime: [], // 房屋估值日期时间
			FirstAuditionImageUrl: '', // 一审报告照片url
			C_FirstAuditionImageUrl: '', // 一审报告照片缩略图url
			// FirstAuditionOperatorName: [], // 一审操作人名称
			// FirstAuditionImageDateTime: [], // 一审时间
			OrderValidationImageUrl: '', // 立项报告照片url
			C_OrderValidationImageUrl: '', // 立项报告照片缩略图url
			// OrderValidationOperatorName: [], // 立项操作人名称
			// OrderValidationDateTime: [], // 立项时间
			SecondAuditionImageUrl: '', // 二审照片url
			C_SecondAuditionImageUrl: '', // 二审照片缩略图url
			// SecondAuditionOperatorName: [], // 二审操作人名称
			// SecondAuditionDateTime: [], // 二审日期时间
			MatchProducts: [], // 匹配产品数组
			// MatchProductOperatorName: [], // 匹配产品操作人
			// MatchProductDateTime: [], // 匹配产品操作时间
			HouseVisitImageUrls: [], // 下户照片url
			C_HouseVisitImageUrls: [], // 下户照片缩略图url
			// HouseVisitOperatorName: [], // 下户操作人
			// HouseVisitDateTime: [], // 下户操作时间
			IsLoanApproved: '', // 是否批贷通过
			LoanApprovalImageUrls: [], // 批贷函照片url
			C_LoanApprovalImageUrls: [], // 批贷函照片缩略图url
			LoanAmount: '', // 批贷金额
			LoanPeriodInMonth: '', // 批贷期限
			LoanInterest: '', // 批贷利率
			// LoanApprovalOperatorName: [], // 批贷(产品终审)操作人
			// LoanApprovalDateTime: [], // 批贷(产品终审)操作时间
			ContractImageUrls: [], // 合同照片url
			C_ContractImageUrls: [], // 合同照片缩略图url
			// ContractOperatorName: [], // 打印合同操作人
			// ContractDateTime: [], // 打印合同操作时间
			SignContractImageUrls: [], // 公证面签现场照片url
			C_SignContractImageUrls: [], // 公证面签现场照片缩略图url
			// SignContractOperatorName: [], // 公证面签操作人
			// SignContractDateTime: [], // 公证面签操作时间
			PledgeImageUrls: [], // 进抵现场照片url
			C_PledgeImageUrls: [], // 进抵现场照片缩略图url
			// PledgeOperatorName: [], // 进抵操作人
			// PledgeDateTime: [], // 进抵操作时间
			LoanReceivedImageUrls: [], // 放款现场照片url
			C_LoanReceivedImageUrls: [], // 放款现场照片缩略图url
			// LoanReceivedOperatorName: [], // 放款操作人
			
			BorrowerIDNOImageUrls: [], // 客户身份证照片url
			BorrowerSpouseIDNOImageUrls: [], // 客户配偶身份证照片url
			PermanentResidenceBookImageUrls: [], // 客户户口本照片url
			SpousePermanentResidenceBookImageUrls: [], // 客户配偶户口本照片url
			MarriageCertificateImageUrls: [], // 客户婚姻证明材料照片url

			SpouseMarriageCertificateImageUrls: [], // 客户配偶婚姻证明材料照片url
			HouseCertificateImageUrls: [], // 房产证照片url
			RentalContractImageUrls: [], // 房屋租赁合同照片url
			BuyContractImageUrls: [], // 原始购房合同照片url
			DeedTaxInvoiceImageUrls: [], // 契税发票照片url

			LoanContractImageUrls: [], // 上家借款合同照片url
			LoanPaidOffCertificateImageUrls: [], // 上家结清证明照片url
			BankAccountStatementImageUrls: [], // 银行流水照片url
			PersonalCreditReportImageUrls: [], // 客户征信报告照片url
			SpousePersonalCreditReportImageUrls: [], // 客户配偶征信报告照片url
			CompanyLicenseImageUrl: [], // 公司营业执照副本照片url
			CompanyCreditReportImageUrls: [], // 企业征信照片url
			CompanyBankAccountStatementImageUrls: [], // 对公流水照片url
			BuySellContractImageUrls: [], // 购销合同照片url
			GuarantorProofDocumentImageUrls: [], // 担保人财产共有人同意提供担保的书面文件照片url
			BankCardImageUrl: [], // 还款卡照片url
			CompanyHoldingCertificateImageUrls: [], // 实控人证明照片url
			CompanyFinancialStatementImageUrls: [], // 企业财务报表照片url
			LawsuitFinishCertificateImageUrls: [], // 诉讼结案证明照片url
			OtherCertificateImageUrls: [], // 其它照片url

			C_BorrowerIDNOImageUrls: [], // 客户身份证照片缩略图url
			C_BorrowerSpouseIDNOImageUrls: [], // 客户配偶身份证照片缩略图url
			C_PermanentResidenceBookImageUrls: [], // 客户户口本照片缩略图url
			C_SpousePermanentResidenceBookImageUrls: [], // 客户配偶户口本照片缩略图url
			C_MarriageCertificateImageUrls: [], // 客户婚姻证明材料照片缩略图url
			C_SpouseMarriageCertificateImageUrls: [], // 客户配偶婚姻证明材料照片缩略图url
			C_HouseCertificateImageUrls: [], // 房产证照片缩略图url
			C_RentalContractImageUrls: [], // 房屋租赁合同照片缩略图url
			C_BuyContractImageUrls: [], // 原始购房合同照片缩略图url
			C_DeedTaxInvoiceImageUrls: [], // 契税发票照片缩略图url
			C_LoanContractImageUrls: [], // 上家借款合同照片缩略图url
			C_LoanPaidOffCertificateImageUrls: [], // 上家结清证明照片缩略图url
			C_BankAccountStatementImageUrls: [], // 银行流水照片缩略图url
			C_PersonalCreditReportImageUrls: [], // 客户征信报告照片缩略图url
			C_SpousePersonalCreditReportImageUrls: [], // 客户配偶征信报告照片缩略图url
			C_CompanyLicenseImageUrl: [], // 公司营业执照副本照片缩略图url
			C_CompanyCreditReportImageUrls: [], // 企业征信照片缩略图url
			C_CompanyBankAccountStatementImageUrls: [], // 对公流水照片缩略图url
			C_BuySellContractImageUrls: [], // 购销合同照片缩略图url
			C_GuarantorProofDocumentImageUrls: [], // 担保人财产共有人同意提供担保的书面文件照片缩略图url
			C_BankCardImageUrl: [], // 还款卡照片缩略图url
			C_CompanyHoldingCertificateImageUrls: [], // 实控人证明照片缩略图url
			C_CompanyFinancialStatementImageUrls: [], // 企业财务报表照片缩略图url
			C_LawsuitFinishCertificateImageUrls: [], // 诉讼结案证明照片缩略图url
			C_OtherCertificateImageUrls: [], // 其它照片缩略图url

			BorrowerMobile: '',
			FirstAuditionConfirmComment: '',
			SaleOrderValidationComment: '',
			SecondAuditionComment: '',
			SecondAuditionConfirmComment: '',
			ContactProductProviderComment: '',
			ConfirmMatchProductComment: '',
			LoanRejectionComment: '',
		}
	},
	mounted () {
		this.init()
	},
	methods:{

		BorrowerMobileChange() {
			const BorrowerMobile = this.BorrowerMobile.replace(/\D/,'')
			let rData = ''
			if (BorrowerMobile.length>11) {
				rData = BorrowerMobile.substr(0,11)
			} else {
				rData = BorrowerMobile
			}
			this.BorrowerMobile = rData
		},

		// 格式化
		format (dd) {
			if (dd) {
				const kk = Object.keys(dd)
				kk.map(item => {
					if (dd[item] == null && item.indexOf('Url')!=-1) {
						dd[item] = []
					}
				})
				return dd
			}
		},
		
		// 初始化
		init () {
			const { id, hid } = this.$route.params
			const param = {
				OrderId: id,
				// HouseId: hid,
			}
			this.pp('GetOrderInfo', param, res => {
				if (res.ret) {
					const formatData = this.format(res.data)
					const {
						LastOperatorName,
						LastOperationDateTime,
						CancelOrderComment,
						HouseArea,
						HouseLocation1,
						HouseType,
						HouseUsage,
						HousePledgePercentage,
						HouseOrientation,
						HouseTotalFloor,
						HouseFloor,
						HouseBuildingFinishYear,
						HouseValuationConfirmComment,
						BorrowerName,
						BorrowerIDNO,

						BorrowerMarriageStatus,
						BorrowerSpouseName,
						BorrowerSpouseIDNO,
						BorrowerSpouseMobile,
						HasCompany,
						CompanyName,
						CompanySecurityIDNO,
						CompanyPhone,
						CompanyLegalPersonName,
						CompanyLegalPersonIDNO,
						ExpectedBorrowAmount,
						ExpectedBorrowPeriodInMonth,
						BorrowUsage,
						InterestReturnSource,
						PrincipalReturnSource,
						ShareOwnerInfo,
						PledgeInfo,
						IsPledged ,
						PledgeOrgnization,
						PledgePrice,
						IsLoanPaidOff,
						IsZhuanDan,
						LoanPriority,
						SecondAuditionBorrowerSecurityAnalysis,
						SecondAuditionBorrowerIncomeAnalysis,
						SecondAuditionBorrowerPayOffAbilityAnalysis,
						LoanReceivedDateTime,
						CompanyArticlesImageUrls,

						FirstAuditionComment,


						LastOperationName,
						CurrentOperationName, // 当前操作名称,
						Status, // 报单状态, 0，正在进行中，1，正常结案，2，中途结案
						HouseValuationImageUrl, // 房屋估值报告照片url
						C_HouseValuationImageUrl, // 房屋估值报告照片缩略图url
						// HouseValuationOperatorName, // 房屋估值操作人名称
						// HouseValuationDateTime, // 房屋估值日期时间
						FirstAuditionImageUrl, // 一审报告照片url
						C_FirstAuditionImageUrl, // 一审报告照片缩略图url
						// FirstAuditionOperatorName, // 一审操作人名称
						// FirstAuditionImageDateTime, // 一审时间
						OrderValidationImageUrl, // 立项报告照片url
						C_OrderValidationImageUrl, // 立项报告照片缩略图url
						// OrderValidationOperatorName, // 立项操作人名称
						// OrderValidationDateTime, // 立项时间
						SecondAuditionImageUrl, // 二审照片url
						C_SecondAuditionImageUrl, // 二审照片缩略图url
						// SecondAuditionOperatorName, // 二审操作人名称
						// SecondAuditionDateTime, // 二审日期时间
						MatchProducts, // 匹配产品数组
						// MatchProductOperatorName, // 匹配产品操作人
						// MatchProductDateTime, // 匹配产品操作时间
						HouseVisitImageUrls, // 下户照片url
						C_HouseVisitImageUrls, // 下户照片缩略图url
						// HouseVisitOperatorName, // 下户操作人
						// HouseVisitDateTime, // 下户操作时间
						IsLoanApproved, // 是否批贷通过
						LoanApprovalImageUrls, // 批贷函照片url
						C_LoanApprovalImageUrls, // 批贷函照片缩略图url
						LoanAmount, // 批贷金额
						LoanPeriodInMonth, // 批贷期限
						LoanInterest, // 批贷利率
						// LoanApprovalOperatorName, // 批贷(产品终审)操作人
						// LoanApprovalDateTime, // 批贷(产品终审)操作时间
						ContractImageUrls, // 合同照片url
						C_ContractImageUrls, // 合同照片缩略图url
						// ContractOperatorName, // 打印合同操作人
						// ContractDateTime, // 打印合同操作时间
						SignContractImageUrls, // 公证面签现场照片url
						C_SignContractImageUrls, // 公证面签现场照片缩略图url
						// SignContractOperatorName, // 公证面签操作人
						// SignContractDateTime, // 公证面签操作时间
						PledgeImageUrls, // 进抵现场照片url
						C_PledgeImageUrls, // 进抵现场照片缩略图url
						// PledgeOperatorName, // 进抵操作人
						// PledgeDateTime, // 进抵操作时间
						LoanReceivedImageUrls, // 放款现场照片url
						C_LoanReceivedImageUrls, // 放款现场照片缩略图url
						// LoanReceivedOperatorName, // 放款操作人
						
						BorrowerIDNOImageUrls, // 客户身份证照片url
						BorrowerSpouseIDNOImageUrls, // 客户配偶身份证照片url
						PermanentResidenceBookImageUrls, // 客户户口本照片url
						SpousePermanentResidenceBookImageUrls, // 客户配偶户口本照片url
						MarriageCertificateImageUrls, // 客户婚姻证明材料照片url
						SpouseMarriageCertificateImageUrls, // 客户配偶婚姻证明材料照片url
						HouseCertificateImageUrls, // 房产证照片url
						RentalContractImageUrls, // 房屋租赁合同照片url
						BuyContractImageUrls, // 原始购房合同照片url
						DeedTaxInvoiceImageUrls, // 契税发票照片url
						LoanContractImageUrls, // 上家借款合同照片url
						LoanPaidOffCertificateImageUrls, // 上家结清证明照片url
						BankAccountStatementImageUrls, // 银行流水照片url
						PersonalCreditReportImageUrls, // 客户征信报告照片url
						SpousePersonalCreditReportImageUrls, // 客户配偶征信报告照片url
						CompanyLicenseImageUrl, // 公司营业执照副本照片url
						CompanyCreditReportImageUrls, // 企业征信照片url
						CompanyBankAccountStatementImageUrls, // 对公流水照片url
						BuySellContractImageUrls, // 购销合同照片url
						GuarantorProofDocumentImageUrls, // 担保人财产共有人同意提供担保的书面文件照片url
						BankCardImageUrl, // 还款卡照片url
						CompanyHoldingCertificateImageUrls, // 实控人证明照片url
						CompanyFinancialStatementImageUrls, // 企业财务报表照片url
						LawsuitFinishCertificateImageUrls, // 诉讼结案证明照片url
						OtherCertificateImageUrls, // 其它照片url

						C_BorrowerIDNOImageUrls, // 客户身份证照片缩略图url
						C_BorrowerSpouseIDNOImageUrls, // 客户配偶身份证照片缩略图url
						C_PermanentResidenceBookImageUrls, // 客户户口本照片缩略图url
						C_SpousePermanentResidenceBookImageUrls, // 客户配偶户口本照片缩略图url
						C_MarriageCertificateImageUrls, // 客户婚姻证明材料照片缩略图url
						C_SpouseMarriageCertificateImageUrls, // 客户配偶婚姻证明材料照片缩略图url
						C_HouseCertificateImageUrls, // 房产证照片缩略图url
						C_RentalContractImageUrls, // 房屋租赁合同照片缩略图url
						C_BuyContractImageUrls, // 原始购房合同照片缩略图url
						C_DeedTaxInvoiceImageUrls, // 契税发票照片缩略图url
						C_LoanContractImageUrls, // 上家借款合同照片缩略图url
						C_LoanPaidOffCertificateImageUrls, // 上家结清证明照片缩略图url
						C_BankAccountStatementImageUrls, // 银行流水照片缩略图url
						C_PersonalCreditReportImageUrls, // 客户征信报告照片缩略图url
						C_SpousePersonalCreditReportImageUrls, // 客户配偶征信报告照片缩略图url
						C_CompanyLicenseImageUrl, // 公司营业执照副本照片缩略图url
						C_CompanyCreditReportImageUrls, // 企业征信照片缩略图url
						C_CompanyBankAccountStatementImageUrls, // 对公流水照片缩略图url
						C_BuySellContractImageUrls, // 购销合同照片缩略图url
						C_GuarantorProofDocumentImageUrls, // 担保人财产共有人同意提供担保的书面文件照片缩略图url
						C_BankCardImageUrl, // 还款卡照片缩略图url
						C_CompanyHoldingCertificateImageUrls, // 实控人证明照片缩略图url
						C_CompanyFinancialStatementImageUrls, // 企业财务报表照片缩略图url
						C_LawsuitFinishCertificateImageUrls, // 诉讼结案证明照片缩略图url
						C_OtherCertificateImageUrls, // 其它照片缩略图url

						BorrowerMobile,
						FirstAuditionConfirmComment,
						SaleOrderValidationComment,
						SecondAuditionComment,
						SecondAuditionConfirmComment,
						ContactProductProviderComment,
						ConfirmMatchProductComment,
						LoanRejectionComment,
					} = formatData || {}
					this.LastOperatorName = LastOperatorName
					this.LastOperationDateTime = LastOperationDateTime
					this.CancelOrderComment = CancelOrderComment
					this.HouseArea = HouseArea
					this.HouseLocation1 = HouseLocation1
					this.HouseType = HouseType
					this.HouseUsage = HouseUsage
					this.HousePledgePercentage = HousePledgePercentage
					this.HouseOrientation = HouseOrientation
					this.HouseTotalFloor = HouseTotalFloor
					this.HouseFloor = HouseFloor
					this.HouseBuildingFinishYear = HouseBuildingFinishYear
					this.HouseValuationConfirmComment = HouseValuationConfirmComment
					this.BorrowerName = BorrowerName
					this.BorrowerIDNO = BorrowerIDNO

					this.BorrowerMarriageStatus = BorrowerMarriageStatus
					this.BorrowerSpouseName = BorrowerSpouseName
					this.BorrowerSpouseIDNO = BorrowerSpouseIDNO
					this.BorrowerSpouseMobile = BorrowerSpouseMobile
					this.HasCompany = HasCompany
					this.CompanyName = CompanyName
					this.CompanySecurityIDNO = CompanySecurityIDNO
					this.CompanyPhone = CompanyPhone
					this.CompanyLegalPersonName = CompanyLegalPersonName
					this.CompanyLegalPersonIDNO = CompanyLegalPersonIDNO
					this.ExpectedBorrowAmount = parseFloat(ExpectedBorrowAmount/10000)
					this.ExpectedBorrowPeriodInMonth = ExpectedBorrowPeriodInMonth
					this.BorrowUsage = BorrowUsage
					this.InterestReturnSource = InterestReturnSource
					this.PrincipalReturnSource = PrincipalReturnSource
					this.ShareOwnerInfo = ShareOwnerInfo
					this.PledgeInfo = PledgeInfo
					this.IsPledged  = IsPledged 
					this.PledgeOrgnization = PledgeOrgnization
					this.PledgePrice = parseFloat(PledgePrice/10000)
					this.IsLoanPaidOff = IsLoanPaidOff
					this.IsZhuanDan = IsZhuanDan
					this.LoanPriority = LoanPriority
					this.SecondAuditionBorrowerSecurityAnalysis = SecondAuditionBorrowerSecurityAnalysis
					this.SecondAuditionBorrowerIncomeAnalysis = SecondAuditionBorrowerIncomeAnalysis
					this.SecondAuditionBorrowerPayOffAbilityAnalysis = SecondAuditionBorrowerPayOffAbilityAnalysis
					this.LoanReceivedDateTime = LoanReceivedDateTime
					this.CompanyArticlesImageUrls = CompanyArticlesImageUrls

					this.FirstAuditionComment = FirstAuditionComment


					this.LastOperationName = LastOperationName
					this.CurrentOperationName = CurrentOperationName // 当前操作名称,
					this.Status = Status // 报单状态, 0，正在进行中，1，正常结案，2，中途结案
					this.HouseValuationImageUrl = HouseValuationImageUrl // 房屋估值报告照片url
					this.C_HouseValuationImageUrl = C_HouseValuationImageUrl // 房屋估值报告照片缩略图url
		
					this.FirstAuditionImageUrl = FirstAuditionImageUrl // 一审报告照片url
					this.C_FirstAuditionImageUrl = C_FirstAuditionImageUrl // 一审报告照片缩略图url
				
					this.OrderValidationImageUrl = OrderValidationImageUrl // 立项报告照片url
					this.C_OrderValidationImageUrl = C_OrderValidationImageUrl // 立项报告照片缩略图url
				
					this.SecondAuditionImageUrl = SecondAuditionImageUrl // 二审照片url
					this.C_SecondAuditionImageUrl = C_SecondAuditionImageUrl // 二审照片缩略图url
				
					this.MatchProducts = MatchProducts // 匹配产品数组
					
					this.HouseVisitImageUrls = HouseVisitImageUrls // 下户照片url
					this.C_HouseVisitImageUrls = C_HouseVisitImageUrls // 下户照片缩略图url

					this.IsLoanApproved = IsLoanApproved // 是否批贷通过
					this.LoanApprovalImageUrls = LoanApprovalImageUrls // 批贷函照片url
					this.C_LoanApprovalImageUrls = C_LoanApprovalImageUrls // 批贷函照片缩略图url
					this.LoanAmount = parseFloat(LoanAmount/10000) || '-'// 批贷金额
					this.LoanPeriodInMonth = LoanPeriodInMonth // 批贷期限
					this.LoanInterest = LoanInterest // 批贷利率
										
					this.ContractImageUrls = ContractImageUrls // 合同照片url
					this.C_ContractImageUrls = C_ContractImageUrls // 合同照片缩略图url
					
					this.SignContractImageUrls = SignContractImageUrls // 公证面签现场照片url
					this.C_SignContractImageUrls = C_SignContractImageUrls // 公证面签现场照片缩略图url
					
					this.PledgeImageUrls = PledgeImageUrls // 进抵现场照片url
					this.C_PledgeImageUrls = C_PledgeImageUrls // 进抵现场照片缩略图url
					
					this.LoanReceivedImageUrls = LoanReceivedImageUrls // 放款现场照片url
					this.C_LoanReceivedImageUrls = C_LoanReceivedImageUrls // 放款现场照片缩略图url
					
					this.BorrowerIDNOImageUrls = BorrowerIDNOImageUrls // 客户身份证照片url
					this.BorrowerSpouseIDNOImageUrls = BorrowerSpouseIDNOImageUrls // 客户配偶身份证照片url
					this.PermanentResidenceBookImageUrls = PermanentResidenceBookImageUrls // 客户户口本照片url
					this.SpousePermanentResidenceBookImageUrls = SpousePermanentResidenceBookImageUrls // 客户配偶户口本照片url
					this.MarriageCertificateImageUrls = MarriageCertificateImageUrls // 客户婚姻证明材料照片url
					this.SpouseMarriageCertificateImageUrls = SpouseMarriageCertificateImageUrls // 客户配偶婚姻证明材料照片url
					this.HouseCertificateImageUrls = HouseCertificateImageUrls // 房产证照片url
					this.RentalContractImageUrls = RentalContractImageUrls // 房屋租赁合同照片url
					this.BuyContractImageUrls = BuyContractImageUrls // 原始购房合同照片url
					this.DeedTaxInvoiceImageUrls = DeedTaxInvoiceImageUrls // 契税发票照片url
					this.LoanContractImageUrls = LoanContractImageUrls // 上家借款合同照片url
					this.LoanPaidOffCertificateImageUrls = LoanPaidOffCertificateImageUrls // 上家结清证明照片url
					this.BankAccountStatementImageUrls = BankAccountStatementImageUrls // 银行流水照片url
					this.PersonalCreditReportImageUrls = PersonalCreditReportImageUrls // 客户征信报告照片url
					this.SpousePersonalCreditReportImageUrls = SpousePersonalCreditReportImageUrls // 客户配偶征信报告照片url
					this.CompanyLicenseImageUrl = CompanyLicenseImageUrl // 公司营业执照副本照片url
					this.CompanyCreditReportImageUrls = CompanyCreditReportImageUrls // 企业征信照片url
					this.CompanyBankAccountStatementImageUrls = CompanyBankAccountStatementImageUrls // 对公流水照片url
					this.BuySellContractImageUrls = BuySellContractImageUrls // 购销合同照片url
					this.GuarantorProofDocumentImageUrls = GuarantorProofDocumentImageUrls // 担保人财产共有人同意提供担保的书面文件照片url
					this.BankCardImageUrl = BankCardImageUrl // 还款卡照片url
					this.CompanyHoldingCertificateImageUrls = CompanyHoldingCertificateImageUrls // 实控人证明照片url
					this.CompanyFinancialStatementImageUrls = CompanyFinancialStatementImageUrls // 企业财务报表照片url
					this.LawsuitFinishCertificateImageUrls = LawsuitFinishCertificateImageUrls // 诉讼结案证明照片url
					this.OtherCertificateImageUrls = OtherCertificateImageUrls // 其它照片url

					this.C_BorrowerIDNOImageUrls = C_BorrowerIDNOImageUrls // 客户身份证照片缩略图url
					this.C_BorrowerSpouseIDNOImageUrls = C_BorrowerSpouseIDNOImageUrls // 客户配偶身份证照片缩略图url
					this.C_PermanentResidenceBookImageUrls = C_PermanentResidenceBookImageUrls // 客户户口本照片缩略图url
					this.C_SpousePermanentResidenceBookImageUrls = C_SpousePermanentResidenceBookImageUrls // 客户配偶户口本照片缩略图url
					this.C_MarriageCertificateImageUrls = C_MarriageCertificateImageUrls // 客户婚姻证明材料照片缩略图url
					this.C_SpouseMarriageCertificateImageUrls = C_SpouseMarriageCertificateImageUrls // 客户配偶婚姻证明材料照片缩略图url
					this.C_HouseCertificateImageUrls = C_HouseCertificateImageUrls // 房产证照片缩略图url
					this.C_RentalContractImageUrls = C_RentalContractImageUrls // 房屋租赁合同照片缩略图url
					this.C_BuyContractImageUrls = C_BuyContractImageUrls // 原始购房合同照片缩略图url
					this.C_DeedTaxInvoiceImageUrls = C_DeedTaxInvoiceImageUrls // 契税发票照片缩略图url
					this.C_LoanContractImageUrls = C_LoanContractImageUrls // 上家借款合同照片缩略图url
					this.C_LoanPaidOffCertificateImageUrls = C_LoanPaidOffCertificateImageUrls // 上家结清证明照片缩略图url
					this.C_BankAccountStatementImageUrls = C_BankAccountStatementImageUrls // 银行流水照片缩略图url
					this.C_PersonalCreditReportImageUrls = C_PersonalCreditReportImageUrls // 客户征信报告照片缩略图url
					this.C_SpousePersonalCreditReportImageUrls = C_SpousePersonalCreditReportImageUrls // 客户配偶征信报告照片缩略图url
					this.C_CompanyLicenseImageUrl = C_CompanyLicenseImageUrl // 公司营业执照副本照片缩略图url
					this.C_CompanyCreditReportImageUrls = C_CompanyCreditReportImageUrls // 企业征信照片缩略图url
					this.C_CompanyBankAccountStatementImageUrls = C_CompanyBankAccountStatementImageUrls // 对公流水照片缩略图url
					this.C_BuySellContractImageUrls = C_BuySellContractImageUrls // 购销合同照片缩略图url
					this.C_GuarantorProofDocumentImageUrls = C_GuarantorProofDocumentImageUrls // 担保人财产共有人同意提供担保的书面文件照片缩略图url
					this.C_BankCardImageUrl = C_BankCardImageUrl // 还款卡照片缩略图url
					this.C_CompanyHoldingCertificateImageUrls = C_CompanyHoldingCertificateImageUrls // 实控人证明照片缩略图url
					this.C_CompanyFinancialStatementImageUrls = C_CompanyFinancialStatementImageUrls // 企业财务报表照片缩略图url
					this.C_LawsuitFinishCertificateImageUrls = C_LawsuitFinishCertificateImageUrls // 诉讼结案证明照片缩略图url
					this.C_OtherCertificateImageUrls = C_OtherCertificateImageUrls // 其它照片缩略图url

					this.BorrowerMobile = BorrowerMobile
					this.FirstAuditionConfirmComment = FirstAuditionConfirmComment
					this.SaleOrderValidationComment = SaleOrderValidationComment
					this.SecondAuditionComment = SecondAuditionComment
					this.SecondAuditionConfirmComment = SecondAuditionConfirmComment
					this.ContactProductProviderComment = ContactProductProviderComment
					this.ConfirmMatchProductComment = ConfirmMatchProductComment
					this.LoanRejectionComment = LoanRejectionComment
				} else {
					this.warn(res.msg)
				}
			})
		},


		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			const BorrowerMobile = this.BorrowerMobile
			const param = {
				OrderId: id,
				// HouseId: hid,
				OperationRecordId: oprid,
				BorrowerMobile,
			}
			if (BorrowerMobile) {

			} else {
				this.warn("电话不能为空！")
				return
			}
			// console.log(param)
			this.pp('CompleteFiling', param, res => {
				if (res.ret) {
					// 跳到操作页面
					this.$router.push({ name:'opList', params: { id, hid }})
				} else {
					this.warn(res.msg)
				}
			})
		},

	},


}
</script>

<style scoped>
.file {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.header1 {
	width :190px;
	height:50px;
}
table td {
	width :130px;

}

</style>
