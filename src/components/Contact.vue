<template>
	<div class="contact">
		<el-container class="c-outer">

			<Header back="true" title="联系产品供应方"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form :size="formSize" label-width="170px" label-position="left">
						<el-row>

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
								<el-form-item label="公司营业执照副本">
									<ImgList :arr="CompanyLicenseImageUrl" :arrc="C_CompanyLicenseImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="房产证照片">
									<ImgList :arr="HouseCertificateImageUrls" :arrc="C_HouseCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户户口本照片">
									<ImgList :arr="PermanentResidenceBookImageUrls" :arrc="C_PermanentResidenceBookImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户婚姻证明材料照片">
									<ImgList :arr="MarriageCertificateImageUrls" :arrc="C_MarriageCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="客户征信报告">
									<ImgList :arr="PersonalCreditReportImageUrls" :arrc="C_PersonalCreditReportImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="配偶户口本照片">
									<ImgList :arr="SpousePermanentResidenceBookImageUrls" :arrc="C_SpousePermanentResidenceBookImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="配偶婚姻证明材料照片">
									<ImgList :arr="SpouseMarriageCertificateImageUrls" :arrc="C_SpouseMarriageCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="配偶征信报告">
									<ImgList :arr="SpousePersonalCreditReportImageUrls" :arrc="C_SpousePersonalCreditReportImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="银行流水">
									<ImgList :arr="BankAccountStatementImageUrls" :arrc="C_BankAccountStatementImageUrls"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="其它">
									<ImgList :arr="OtherCertificateImageUrls" :arrc="C_OtherCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</div>

				<div class="sec">
					
					<el-button class="pull-left" type="primary" @click="sub">完成</el-button>
					
					<el-button class="pull-left" type="primary" @click="gotoAdd">补充资料</el-button>
					
				</div>


			</el-main>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'
import ImgList from './ImgList'

export default {
	components:{
		Header, ImgList
	},
	name: 'Contact',
	data () {
		return {

			formSize : 'small',
			// 初始化
			"BankAccountStatementImageUrls": [],
			"C_BankAccountStatementImageUrls": [],

			"BorrowerIDNOImageUrls": [],
			"C_BorrowerIDNOImageUrls": [],

			"BorrowerSpouseIDNOImageUrls": [],
			"C_BorrowerSpouseIDNOImageUrls": [],

			"CompanyLicenseImageUrl": "",
			"C_CompanyLicenseImageUrl": "",

			"HouseCertificateImageUrls": [],
			"C_HouseCertificateImageUrls": [],

			"MarriageCertificateImageUrls": [],
			"C_MarriageCertificateImageUrls": [],

			"OtherCertificateImageUrls": [],
			"C_OtherCertificateImageUrls": [],

			"PermanentResidenceBookImageUrls": [],
			"C_PermanentResidenceBookImageUrls": [],

			"PersonalCreditReportImageUrls": [],
			"C_PersonalCreditReportImageUrls": [],

			"SpouseMarriageCertificateImageUrls": [],
			"C_SpouseMarriageCertificateImageUrls": [],

			"SpousePermanentResidenceBookImageUrls": [],
			"C_SpousePermanentResidenceBookImageUrls": [],

			"SpousePersonalCreditReportImageUrls": [],
			"C_SpousePersonalCreditReportImageUrls": [],

		}
	},
	mounted () {
		// console.log(this.$route.params.id)
		this.init()
	},
	methods:{
		// 补充资料
		gotoAdd() {
			const { id, hid, oprid } = this.$route.params
			const param = {
				OrderId: id,
			}
			console.log(param)
			this.pp('CanSubmitMaterialList', param, res => {
				if (res.ret) {
					// 跳到操作补充资料页面
					const { CanSubmitMaterialList } = res.data
					if (CanSubmitMaterialList) {
						this.$router.push({ name: 'add', param: { id, hid, oprid }})
					} else {
						this.warn("暂时不能发起补充资料操作~")
					}
				} else {
					this.warn("暂时不能发起补充资料操作")
				}
			})
			
		},

		// 初始化
		init () {
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const param = {
				OrderId: id,
				HouseId: hid,
			}
			this.pp('GetContactProductProviderParams', param, res => {
				if (res.ret) {
					const {
						BankAccountStatementImageUrls,
						C_BankAccountStatementImageUrls,
						BorrowerIDNOImageUrls,
						C_BorrowerIDNOImageUrls,
						BorrowerSpouseIDNOImageUrls,
						C_BorrowerSpouseIDNOImageUrls,
						CompanyLicenseImageUrl,
						C_CompanyLicenseImageUrl,
						HouseCertificateImageUrls,
						C_HouseCertificateImageUrls,
						MarriageCertificateImageUrls,
						C_MarriageCertificateImageUrls,
						OtherCertificateImageUrls,
						C_OtherCertificateImageUrls,
						PermanentResidenceBookImageUrls,
						C_PermanentResidenceBookImageUrls,
						PersonalCreditReportImageUrls,
						C_PersonalCreditReportImageUrls,
						SpouseMarriageCertificateImageUrls,
						C_SpouseMarriageCertificateImageUrls,
						SpousePermanentResidenceBookImageUrls,
						C_SpousePermanentResidenceBookImageUrls,
						SpousePersonalCreditReportImageUrls,
						C_SpousePersonalCreditReportImageUrls,
					} = res.data || {}
					setTimeout(() => {
						this.BankAccountStatementImageUrls = BankAccountStatementImageUrls
						this.C_BankAccountStatementImageUrls = C_BankAccountStatementImageUrls
						this.BorrowerIDNOImageUrls = BorrowerIDNOImageUrls
						this.C_BorrowerIDNOImageUrls = C_BorrowerIDNOImageUrls
						this.BorrowerSpouseIDNOImageUrls = BorrowerSpouseIDNOImageUrls
						this.C_BorrowerSpouseIDNOImageUrls = C_BorrowerSpouseIDNOImageUrls
						this.CompanyLicenseImageUrl = CompanyLicenseImageUrl
						this.C_CompanyLicenseImageUrl = C_CompanyLicenseImageUrl
						this.HouseCertificateImageUrls = HouseCertificateImageUrls
						this.C_HouseCertificateImageUrls = C_HouseCertificateImageUrls
						this.MarriageCertificateImageUrls = MarriageCertificateImageUrls
						this.C_MarriageCertificateImageUrls = C_MarriageCertificateImageUrls
						this.OtherCertificateImageUrls = OtherCertificateImageUrls
						this.C_OtherCertificateImageUrls = C_OtherCertificateImageUrls
						this.PermanentResidenceBookImageUrls = PermanentResidenceBookImageUrls
						this.C_PermanentResidenceBookImageUrls = C_PermanentResidenceBookImageUrls
						this.PersonalCreditReportImageUrls = PersonalCreditReportImageUrls
						this.C_PersonalCreditReportImageUrls = C_PersonalCreditReportImageUrls
						this.SpouseMarriageCertificateImageUrls = SpouseMarriageCertificateImageUrls
						this.C_SpouseMarriageCertificateImageUrls = C_SpouseMarriageCertificateImageUrls
						this.SpousePermanentResidenceBookImageUrls = SpousePermanentResidenceBookImageUrls
						this.C_SpousePermanentResidenceBookImageUrls = C_SpousePermanentResidenceBookImageUrls
						this.SpousePersonalCreditReportImageUrls = SpousePersonalCreditReportImageUrls
						this.C_SpousePersonalCreditReportImageUrls = C_SpousePersonalCreditReportImageUrls
					},100)
					
				} else {
					this.warn(res.msg)
				}
			})
		},

		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			const ContactProductProviderComment = ''
			const param = {
				OrderId: id,
				// HouseId: hid,
				OperationRecordId: oprid,
				ContactProductProviderComment,
			}
			// console.log(param)
			this.pp('CompleteContactProductProvider', param, res => {
				if (res.ret) {
					// 跳到操作页面
					this.$router.push({ name : 'opList', params: { id, hid }})
				} else {
					this.warn(res.msg)
				}
			})
		},

		// 首页
		gotoIndex() {
			this.$router.push({ name : 'index' })
		},

	},


}
</script>

<style scoped>
.contact {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.header1 {
	width : 190px;
	height: 50px;
}
table td {
	width : 130px;


}


</style>
