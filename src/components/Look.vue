<template>
	<div class="look">
		
		<el-container class="c-outer">

			<Header back="true" title="查看全部资料"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form label-width="170px" label-position="left" class="text-left">
						<el-row>
							<el-col :span="24">
								<el-form-item label="报单ID：">
									<div>{{$route.params.id}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户电话：">
									<div>{{BorrowerMobile}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="报单状态：">
									<div>{{Status == 0 ? '进行中' : (Status == 1 ? '正常结案' : '中途结案')}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="最后操作：">
									<div>{{LastOperationName}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="房屋估值报告：">
									<ImgList :arr="HouseValuationImageUrl" :arrc="C_HouseValuationImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="一审报告：">
									<ImgList :arr="FirstAuditionImageUrl" :arrc="C_FirstAuditionImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="一审确认意见：">
									<div>{{FirstAuditionConfirmComment}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="销售立项意见：">
									<div>{{SaleOrderValidationComment}}</div>
								</el-form-item>
							</el-col>

							
							<el-col :span="24">
								<el-form-item label="二审报告：">
									<ImgList :arr="SecondAuditionImageUrl" :arrc="C_SecondAuditionImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="二审意见：">
									<div>{{SecondAuditionComment}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="二审确认意见：">
									<div>{{SecondAuditionConfirmComment}}</div>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="联系产品供应方意见：">
									<div>{{ContactProductProviderComment}}</div>
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
								<el-form-item label="放款现场照片：">
									<ImgList :arr="LoanReceivedImageUrls" :arrc="C_LoanReceivedImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户身份证照片：">
									<ImgList :arr="BorrowerIDNOImageUrls" :arrc="C_BorrowerIDNOImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户配偶身份证照片：">
									<ImgList :arr="BorrowerSpouseIDNOImageUrls" :arrc="C_BorrowerSpouseIDNOImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户户口本照片：">
									<ImgList :arr="PermanentResidenceBookImageUrls" :arrc="C_PermanentResidenceBookImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户配偶户口本照片：">
									<ImgList :arr="SpousePermanentResidenceBookImageUrls" :arrc="C_SpousePermanentResidenceBookImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户婚姻证明材料照片：">
									<ImgList :arr="MarriageCertificateImageUrls" :arrc="C_MarriageCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户配偶婚姻证明材料照片：">
									<ImgList :arr="SpouseMarriageCertificateImageUrls" :arrc="C_SpouseMarriageCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="房产证照片：">
									<ImgList :arr="HouseCertificateImageUrls" :arrc="C_HouseCertificateImageUrls"></ImgList>
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
								<el-form-item label="银行流水照片：">
									<ImgList :arr="BankAccountStatementImageUrls" :arrc="C_BankAccountStatementImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户征信报告照片：">
									<ImgList :arr="PersonalCreditReportImageUrls" :arrc="C_PersonalCreditReportImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户配偶征信报告照片：">
									<ImgList :arr="SpousePersonalCreditReportImageUrls" :arrc="C_SpousePersonalCreditReportImageUrls"></ImgList>
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
								<el-form-item label="购销合同照片：">
									<ImgList :arr="BuySellContractImageUrls" :arrc="C_BuySellContractImageUrls"></ImgList>
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
								<el-form-item label="企业财务报表照片：">
									<ImgList :arr="CompanyFinancialStatementImageUrls" :arrc="C_CompanyFinancialStatementImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="诉讼结案证明照片：">
									<ImgList :arr="LawsuitFinishCertificateImageUrls" :arrc="C_LawsuitFinishCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="其它照片：">
									<ImgList :arr="OtherCertificateImageUrls" :arrc="C_OtherCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>

						</el-row>
					</el-form>
				</div>

			</el-main>
		</el-container>

	</div>
</template>

<script>
import ImgList from './ImgList'
import Header from './Header'

export default {
	components:{
		ImgList, Header
	},
	name: 'Look',
	data () {
		return {
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
			// LoanReceivedDateTime: [], // 放款操作时间
			
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
						// LoanReceivedDateTime, // 放款操作时间
						
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
					this.LoanAmount = parseInt(LoanAmount) || '-'// 批贷金额
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



	},


}
</script>

<style scoped>
.look {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.look-tag {
	margin-right: 20px;
	margin-bottom: 20px;
}

</style>
