<template>
	<div class="file">
		<el-container class="c-outer">

			<Header back="true" title="归档"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form class="m-t-20" label-width="150px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label="客户身份证照片">
									<ImgList :arr="BorrowerIDNOImageUrls" :arrc="C_BorrowerIDNOImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户配偶身份证照片">
									<ImgList :arr="BorrowerSpouseIDNOImageUrls" :arrc="C_BorrowerSpouseIDNOImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="户口本照片">
									<ImgList :arr="PermanentResidenceBookImageUrls" :arrc="C_PermanentResidenceBookImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="婚姻证明材料照片">
									<ImgList :arr="MarriageCertificateImageUrls" :arrc="C_MarriageCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="房产证照片">
									<ImgList :arr="HouseCertificateImageUrls" :arrc="C_HouseCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="房屋租赁合同照片">
									<ImgList :arr="RentalContractImageUrls" :arrc="C_RentalContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="原始购房合同照片">
									<ImgList :arr="BuyContractImageUrls" :arrc="C_BuyContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="契税发票">
									<ImgList :arr="DeedTaxInvoiceImageUrls" :arrc="C_DeedTaxInvoiceImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="上家借款合同">
									<ImgList :arr="LoanContractImageUrls" :arrc="C_LoanContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="上家结清证明">
									<ImgList :arr="LoanPaidOffCertificateImageUrls" :arrc="C_LoanPaidOffCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="银行流水">
									<ImgList :arr="BankAccountStatementImageUrls" :arrc="C_BankAccountStatementImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="征信报告">
									<ImgList :arr="PersonalCreditReportImageUrls" :arrc="C_PersonalCreditReportImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="公司营业执照副本">
									<ImgList :arr="CompanyLicenseImageUrl" :arrc="C_CompanyLicenseImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业征信">
									<ImgList :arr="CompanyCreditReportImageUrls" :arrc="C_CompanyCreditReportImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="对公流水">
									<ImgList :arr="CompanyBankAccountStatementImageUrls" :arrc="C_CompanyBankAccountStatementImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="购销合同">
									<ImgList :arr="BuySellContractImageUrls" :arrc="C_BuySellContractImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="担保人财产共有人同意提供担保的书面文件">
									<ImgList :arr="GuarantorProofDocumentImageUrls" :arrc="C_GuarantorProofDocumentImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="还款卡">
									<ImgList :arr="BankCardImageUrl" :arrc="C_BankCardImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="实控人证明">
									<ImgList :arr="CompanyHoldingCertificateImageUrls" :arrc="C_CompanyHoldingCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="企业财务报表">
									<ImgList :arr="CompanyFinancialStatementImageUrls" :arrc="C_CompanyFinancialStatementImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="诉讼结案证明">
									<ImgList :arr="LawsuitFinishCertificateImageUrls" :arrc="C_LawsuitFinishCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="其它">
									<ImgList :arr="OtherCertificateImageUrls" :arrc="C_OtherCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户电话">
									<el-input type="number" @change="BorrowerMobileChange" v-model="BorrowerMobile" placeholder="请输入客户电话"></el-input>
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
			
			BorrowerIDNOImageUrls: [],
			C_BorrowerIDNOImageUrls: [],

			BorrowerSpouseIDNOImageUrls: [],
			C_BorrowerSpouseIDNOImageUrls: [],

			PermanentResidenceBookImageUrls: [],
			C_PermanentResidenceBookImageUrls: [],
		
			MarriageCertificateImageUrls: [],
			C_MarriageCertificateImageUrls: [],

			HouseCertificateImageUrls: [],
			C_HouseCertificateImageUrls: [],

			RentalContractImageUrls: [],
			C_RentalContractImageUrls: [],

			BuyContractImageUrls: [],
			C_BuyContractImageUrls: [],

			DeedTaxInvoiceImageUrls: [],
			C_DeedTaxInvoiceImageUrls: [],
			
			LoanContractImageUrls: [],
			C_LoanContractImageUrls: [],
		
			LoanPaidOffCertificateImageUrls: [],
			C_LoanPaidOffCertificateImageUrls: [],

			BankAccountStatementImageUrls: [],
			C_BankAccountStatementImageUrls: [],

			PersonalCreditReportImageUrls: [],
			C_PersonalCreditReportImageUrls: [],

			CompanyLicenseImageUrl: [],
			C_CompanyLicenseImageUrl: [],

			CompanyCreditReportImageUrls: [],
			C_CompanyCreditReportImageUrls: [],

			CompanyBankAccountStatementImageUrls: [],
			C_CompanyBankAccountStatementImageUrls: [],

			BuySellContractImageUrls: [],
			C_BuySellContractImageUrls: [],

			GuarantorProofDocumentImageUrls: [],
			C_GuarantorProofDocumentImageUrls: [],

			BankCardImageUrl: [],
			C_BankCardImageUrl: [],

			CompanyHoldingCertificateImageUrls: [],
			C_CompanyHoldingCertificateImageUrls: [],

			CompanyFinancialStatementImageUrls: [],
			C_CompanyFinancialStatementImageUrls: [],

			LawsuitFinishCertificateImageUrls: [],
			C_LawsuitFinishCertificateImageUrls: [],

			OtherCertificateImageUrls: [],
			C_OtherCertificateImageUrls: [],

			BorrowerMobile: '',
		}
	},
	mounted () {
		this.init()
	},
	methods:{

		BorrowerMobileChange() {
			const BorrowerMobile = this.BorrowerMobile + ''
			if (BorrowerMobile.length>11) {
				this.BorrowerMobile = BorrowerMobile.substring(0,11)
			}
		},

		// 初始化
		init () {
			const id = this.$route.params.id
			// const hid = this.$route.params.hid
			const param = {
				OrderId: id,
				// HouseId: hid,
			}
			this.pp('GetOrderInfo', param, res => {
				if (res.ret) {
					const { 
						BorrowerIDNOImageUrls,
						C_BorrowerIDNOImageUrls,

						BorrowerSpouseIDNOImageUrls,
						C_BorrowerSpouseIDNOImageUrls,

						PermanentResidenceBookImageUrls,
						C_PermanentResidenceBookImageUrls,
					
						MarriageCertificateImageUrls,
						C_MarriageCertificateImageUrls,

						HouseCertificateImageUrls,
						C_HouseCertificateImageUrls,

						RentalContractImageUrls,
						C_RentalContractImageUrls,

						BuyContractImageUrls,
						C_BuyContractImageUrls,

						DeedTaxInvoiceImageUrls,
						C_DeedTaxInvoiceImageUrls,
						
						LoanContractImageUrls,
						C_LoanContractImageUrls,
					
						LoanPaidOffCertificateImageUrls,
						C_LoanPaidOffCertificateImageUrls,

						BankAccountStatementImageUrls,
						C_BankAccountStatementImageUrls,

						PersonalCreditReportImageUrls,
						C_PersonalCreditReportImageUrls,

						CompanyLicenseImageUrl,
						C_CompanyLicenseImageUrl,

						CompanyCreditReportImageUrls,
						C_CompanyCreditReportImageUrls,

						CompanyBankAccountStatementImageUrls,
						C_CompanyBankAccountStatementImageUrls,

						BuySellContractImageUrls,
						C_BuySellContractImageUrls,

						GuarantorProofDocumentImageUrls,
						C_GuarantorProofDocumentImageUrls,

						BankCardImageUrl,
						C_BankCardImageUrl,

						CompanyHoldingCertificateImageUrls,
						C_CompanyHoldingCertificateImageUrls,

						CompanyFinancialStatementImageUrls,
						C_CompanyFinancialStatementImageUrls,

						LawsuitFinishCertificateImageUrls,
						C_LawsuitFinishCertificateImageUrls,

						OtherCertificateImageUrls,
						C_OtherCertificateImageUrls,

						BorrowerMobile, // 电话
					} = res.data || {}
					this.BorrowerIDNOImageUrls = BorrowerIDNOImageUrls
					this.C_BorrowerIDNOImageUrls = C_BorrowerIDNOImageUrls
					this.BorrowerSpouseIDNOImageUrls = BorrowerSpouseIDNOImageUrls
					this.C_BorrowerSpouseIDNOImageUrls = C_BorrowerSpouseIDNOImageUrls
					this.PermanentResidenceBookImageUrls = PermanentResidenceBookImageUrls
					this.C_PermanentResidenceBookImageUrls = C_PermanentResidenceBookImageUrls
					this.MarriageCertificateImageUrls = MarriageCertificateImageUrls
					this.C_MarriageCertificateImageUrls = C_MarriageCertificateImageUrls
					this.HouseCertificateImageUrls = HouseCertificateImageUrls
					this.C_HouseCertificateImageUrls = C_HouseCertificateImageUrls
					this.RentalContractImageUrls = RentalContractImageUrls
					this.C_RentalContractImageUrls = C_RentalContractImageUrls
					this.BuyContractImageUrls = BuyContractImageUrls
					this.C_BuyContractImageUrls = C_BuyContractImageUrls
					this.DeedTaxInvoiceImageUrls = DeedTaxInvoiceImageUrls
					this.C_DeedTaxInvoiceImageUrls = C_DeedTaxInvoiceImageUrls
					this.LoanContractImageUrls = LoanContractImageUrls
					this.C_LoanContractImageUrls = C_LoanContractImageUrls
					this.LoanPaidOffCertificateImageUrls = LoanPaidOffCertificateImageUrls
					this.C_LoanPaidOffCertificateImageUrls = C_LoanPaidOffCertificateImageUrls
					this.BankAccountStatementImageUrls = BankAccountStatementImageUrls
					this.C_BankAccountStatementImageUrls = C_BankAccountStatementImageUrls
					this.PersonalCreditReportImageUrls = PersonalCreditReportImageUrls
					this.C_PersonalCreditReportImageUrls = C_PersonalCreditReportImageUrls
					this.CompanyLicenseImageUrl = CompanyLicenseImageUrl
					this.C_CompanyLicenseImageUrl = C_CompanyLicenseImageUrl
					this.CompanyCreditReportImageUrls = CompanyCreditReportImageUrls
					this.C_CompanyCreditReportImageUrls = C_CompanyCreditReportImageUrls
					this.CompanyBankAccountStatementImageUrls = CompanyBankAccountStatementImageUrls
					this.C_CompanyBankAccountStatementImageUrls = C_CompanyBankAccountStatementImageUrls
					this.BuySellContractImageUrls = BuySellContractImageUrls
					this.C_BuySellContractImageUrls = C_BuySellContractImageUrls
					this.GuarantorProofDocumentImageUrls = GuarantorProofDocumentImageUrls
					this.C_GuarantorProofDocumentImageUrls = C_GuarantorProofDocumentImageUrls
					this.BankCardImageUrl = BankCardImageUrl
					this.C_BankCardImageUrl = C_BankCardImageUrl
					this.CompanyHoldingCertificateImageUrls = CompanyHoldingCertificateImageUrls
					this.C_CompanyHoldingCertificateImageUrls = C_CompanyHoldingCertificateImageUrls
					this.CompanyFinancialStatementImageUrls = CompanyFinancialStatementImageUrls
					this.C_CompanyFinancialStatementImageUrls = C_CompanyFinancialStatementImageUrls
					this.LawsuitFinishCertificateImageUrls = LawsuitFinishCertificateImageUrls
					this.C_LawsuitFinishCertificateImageUrls = C_LawsuitFinishCertificateImageUrls
					this.OtherCertificateImageUrls = OtherCertificateImageUrls
					this.C_OtherCertificateImageUrls = C_OtherCertificateImageUrls

					this.BorrowerMobile = BorrowerMobile
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
