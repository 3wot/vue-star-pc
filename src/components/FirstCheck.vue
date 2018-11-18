<template>
	<div class="first-check">
		<el-container class="c-outer">

			<Header back="true" title="初审"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form :size="formSize" label-width="120px" label-position="left">
						<el-row>
							<el-col :span="24">
								<el-button class="pull-left" type="primary" @click="firstCheck">初审</el-button>
								<span v-if="loading" class="loading"><i class="el-icon-loading"></i></span>
							</el-col>
						</el-row>
					</el-form>
				</div>
				
				<div class="sec">
					<!-- <p class="main-title"><span class="span-title">表格</span></p> -->
					<table class="show-table show-table-sm" cellpadding="0" cellspacing="0" border="1">
						<tbody>
							<tr>
								<td colspan="2" rowspan="2">
									<img class="header1" src="../../static/header1.png">
								</td>
								<td colspan="5">
									<span>风控初审表</span>
								</td>
							</tr>
							<tr>
								<td colspan="5">编号:{{OrderNo || '-'}}</td>
							</tr>
							<tr>
								<td colspan="7">借款相关主体</td>
							</tr>
							<tr>
								<td></td>
								<td colspan="2">客户</td>
								<td colspan="2">客户配偶</td>
								<td colspan="2">企业</td>
							</tr>
							<tr>
								<td>名称：</td>
								<td colspan="2">{{BorrowerName||"-"}}</td>
								<td colspan="2">{{BorrowerSpouseName||"-"}}</td>
								<td colspan="2">{{CompanyName||"-"}}</td>
							</tr>
							<tr>
								<td>证件号码：</td>
								<td colspan="2">{{BorrowerIDNO||"-"}}</td>
								<td colspan="2">{{BorrowerSpouseIDNO||"-"}}</td>
								<td colspan="2">-</td>
							</tr>
							<tr>
								<td>联系电话：</td>
								<td colspan="2">{{BorrowerMobile||"-"}}</td>
								<td colspan="2">{{BorrowerSpouseMobile||"-"}}</td>
								<td colspan="2">{{CompanyPhone||"-"}}</td>
							</tr>
							<tr>
								<td colspan="7">自然人风险</td>
							</tr>
							<tr>
								<td></td>
								<td colspan="3">借款人</td>
								<td colspan="3">借款人配偶</td>
							</tr>
							<!-- <tr>
								<td>公安不良行为</td>
								<td colspan="3">{{SecurityInfo.Borrower}}</td>
								<td colspan="3">{{SecurityInfo.BorrowerSpouse}}</td>
								
							</tr> -->
							<tr>
								<td>法院涉诉</td>
								<td colspan="3">{{LawsuitInfo.Borrower}}</td>
								<td colspan="3">{{LawsuitInfo.BorrowerSpouse}}</td>
								
							</tr>
							<tr>
								<td>法院被执行人</td>
								<td colspan="3">
									{{EnforcementInfo.Borrower}}
									<span v-if="BorrowerName && BorrowerIDNO && EnforcementInfo.Borrower && EnforcementInfo.Borrower!='-'" class="first-detail" @click="gotoDetail(1)">详情</span>
								</td>
								<td colspan="3">
									{{EnforcementInfo.BorrowerSpouse}}
									<span v-if="BorrowerSpouseName && BorrowerSpouseIDNO && EnforcementInfo.BorrowerSpouse && EnforcementInfo.BorrowerSpouse!='-'" class="first-detail" @click="gotoDetail(2)">详情</span>
								</td>
								
							</tr>
							<tr>
								<td>失信被执行人</td>
								<td colspan="3">{{CreditInfo.Borrower}}</td>
								<td colspan="3">{{CreditInfo.BorrowerSpouse}}</td>
								
							</tr>
							<tr>
								<td>网络借贷黑名单</td>
								<td colspan="3">{{P2PBlacklistInfo.Borrower}}</td>
								<td colspan="3">{{P2PBlacklistInfo.BorrowerSpouse}}</td>
								
							</tr>
							<tr>
								<td>税务负面</td>
								<td colspan="3">{{TaxInfo.Borrower}}</td>
								<td colspan="3">{{TaxInfo.BorrowerSpouse}}</td>
								
							</tr>
							<tr>
								<td>严重违法</td>
								<td colspan="3">{{CriminalInfo.Borrower}}</td>
								<td colspan="3">{{CriminalInfo.BorrowerSpouse}}</td>
							</tr>
							<tr>
								<td>信贷逾期</td>
								<td colspan="3">{{LoanExpirationInfo.Borrower}}</td>
								<td colspan="3">{{LoanExpirationInfo.BorrowerSpouse}}</td>
								
							</tr>
							<tr>
								<td>多头借贷</td>
								<td colspan="3">{{MultipointLendingInfo.Borrower}}</td>
								<td colspan="3">{{MultipointLendingInfo.BorrowerSpouse}}</td>
								
							</tr>
							<tr>
								<td colspan="7">企业风险</td>
							</tr>
							<tr>
								<td>风险项</td>								
								<td colspan="6">风险描述</td>
								
							</tr>
							<tr>
								<td>经营异常</td>								
								<td colspan="6">{{CompanyInfo.BusinessInfo}}</td>
								
							</tr>
							<tr>
								<td>行政处罚</td>								
								<td colspan="6">{{CompanyInfo.AdministrativePenaltyInfo}}</td>
								
							</tr>
							<tr>
								<td>股权出质</td>								
								<td colspan="6">{{CompanyInfo.SharePledgeInfo}}</td>
								
							</tr>
							<tr>
								<td>动产抵押</td>								
								<td colspan="6">{{CompanyInfo.MovablesPledgeInfo}}</td>
								
							</tr>
							<tr>
								<td>欠税公告</td>								
								<td colspan="6">{{CompanyInfo.TaxOwingInfo}}</td>
								
							</tr>
							<tr>
								<td>司法拍卖</td>								
								<td colspan="6">{{CompanyInfo.JudicialSaleInfo}}</td>
								
							</tr>
							<tr>
								<td>法律诉讼</td>								
								<td colspan="6">{{CompanyInfo.LawsuitInfo}}</td>
								
							</tr>
							<tr>
								<td>法院公告</td>								
								<td colspan="6">{{CompanyInfo.CourtAnnouncementInfo}}</td>
								
							</tr>
							<tr>
								<td>开庭公告</td>								
								<td colspan="6">{{CompanyInfo.TrialInfo}}</td>
								
							</tr>
							<tr>
								<td>失信被执行人</td>								
								<td colspan="6">{{CompanyInfo.CreditEnforcementInfo}}</td>
							</tr>
							<tr>
								<td>法院被执行人</td>								
								<td colspan="6">
									{{CompanyInfo.CourtEnforcementInfo}}
									<span v-if="CompanyName" class="first-detail" @click="gotoDetail(3)">详情</span>
								</td>
							</tr>
							<tr>
								<td>严重违法</td>								
								<td colspan="6">{{CompanyInfo.CriminalInfo}}</td>
							</tr>
							<tr>
								<td>企业风险</td>								
								<td colspan="6">{{CompanyInfo.RiskInfo}}</td>
							</tr>
							<tr>
								<td>经营范围</td>								
								<td colspan="6">{{CompanyInfo.BusinessScope}}</td>
							</tr>

						</tbody>
					</table>
					

					<el-form :size="formSize" class="m-t-20" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label="上传初审表" class="label-danger">
									<ImgUpload :arr="FirstAuditionImageUrl" :arrc="C_FirstAuditionImageUrl" :max="1"></ImgUpload>
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
	// Button,Field
	Header, ImgUpload, ImgList
},
name: 'FirstCheck',
data () {
	return {
		loading: false,
		formSize : 'small',
		// 截图
		FirstAuditionImageUrl: [],
		C_FirstAuditionImageUrl: [],

		// 初始化
		"BorrowerIDNO": "",
        "BorrowerMobile": "",
        "BorrowerName": "",
        "BorrowerSpouseIDNO": "",
        "BorrowerSpouseMobile": "",
        "BorrowerSpouseName": "",
        "CompanyName": "",
        "CompanyPhone": "",

        // 初审返回
        "SecurityInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
		"LawsuitInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
		"EnforcementInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
		"CreditInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
		"P2PBlacklistInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
		"TaxInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
		"CriminalInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
		"LoanExpirationInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
		"MultipointLendingInfo" : { "Borrower" : "", "BorrowerSpouse" : "" },
		"CompanyInfo" : {
			"BusinessInfo" : "",
			"AdministrativePenaltyInfo" : "", 
			"SharePledgeInfo" : "", 
			"MovablesPledgeInfo" : "", 
			"TaxOwingInfo" : "", 
			"JudicialSaleInfo" : "", 
			"LawsuitInfo" : "", 
			"CourtAnnouncementInfo" : "", 
			"TrialInfo" : "", 
			"CreditEnforcementInfo" : "", 
			"CourtEnforcementInfo" : "", 
			"CriminalInfo" : "", 
			"RiskInfo" : "", 
			"BusinessScope" : ""
		},

		OrderNo: '', // 编号

	}
},
mounted () {
	// console.log(this.$route.params.id)
	this.init()
},
methods:{


	gotoLook() {
		// 调到预报单
		const id = this.$route.params.id
		console.log(id)
		this.$router.push({ name: 'look', params: { id }})
	},
	
	// 首页
	gotoIndex() {
		this.$router.push({ name : 'index' })
	},

	// 初审
	firstCheck () {
		const id = this.$route.params.id
		const oprid = this.$route.params.oprid
		const {
			BorrowerIDNO,
			BorrowerMobile,
			BorrowerName,
			BorrowerSpouseIDNO,
			BorrowerSpouseMobile,
			BorrowerSpouseName,
			CompanyName,
		} = this
		let BorrowerMarriageStatus = ''
		if (BorrowerSpouseIDNO || BorrowerSpouseMobile || BorrowerSpouseName) {
			BorrowerMarriageStatus = '已婚'
		}
		const param = {
			OrderId: id,
			OperationRecordId: oprid,
			BorrowerIDNO,
			BorrowerMobile,
			BorrowerName,
			BorrowerSpouseIDNO,
			BorrowerSpouseMobile,
			BorrowerSpouseName,
			CompanyName,
			BorrowerMarriageStatus,
		}
		this.loading = true
		this.pp('AuditBorrowerInfo', param, res => {
			this.loading = false
			if (res.ret) {
				const {
					SecurityInfo,
					LawsuitInfo,
					EnforcementInfo,
					CreditInfo,
					P2PBlacklistInfo,
					TaxInfo,
					CriminalInfo,
					LoanExpirationInfo,
					MultipointLendingInfo,
					CompanyInfo,
				} = res.data || {}
				this.SecurityInfo = SecurityInfo
				this.LawsuitInfo = LawsuitInfo
				this.EnforcementInfo = EnforcementInfo
				this.CreditInfo = CreditInfo
				this.P2PBlacklistInfo = P2PBlacklistInfo
				this.TaxInfo = TaxInfo
				this.CriminalInfo = CriminalInfo
				this.LoanExpirationInfo = LoanExpirationInfo
				this.MultipointLendingInfo = MultipointLendingInfo
				this.CompanyInfo = CompanyInfo
			} else {
				this.warn(res.msg)
			}
		})
	},


	// 初始化
	init () {
		const id = this.$route.params.id
		// const hid = this.$route.params.hid
		const param = {
			OrderId: id,
			// HouseId: hid,
		}
		this.pp('GetAuditBorrowerInfoParams', param, res => {
			if (res.ret) {
				const { 
					BorrowerIDNO,
					BorrowerMobile,
					BorrowerName,
					BorrowerSpouseIDNO,
					BorrowerSpouseMobile,
					BorrowerSpouseName,
					CompanyName,
					CompanyPhone,
					OrderNo,
				} = res.data || {}
				this.BorrowerIDNO = BorrowerIDNO
				this.BorrowerMobile = BorrowerMobile
				this.BorrowerName = BorrowerName
				this.BorrowerSpouseIDNO = BorrowerSpouseIDNO
				this.BorrowerSpouseMobile = BorrowerSpouseMobile
				this.BorrowerSpouseName = BorrowerSpouseName
				this.CompanyName = CompanyName
				this.CompanyPhone = CompanyPhone
				this.OrderNo = OrderNo
			} else {
				this.warn(res.msg)
			}
		})
	},

	// 确认
	sub () {
		const { id, hid, oprid } = this.$route.params
		const FirstAuditionImageUrl = this.FirstAuditionImageUrl
		const C_FirstAuditionImageUrl = this.C_FirstAuditionImageUrl

		if (FirstAuditionImageUrl.length && C_FirstAuditionImageUrl.length) {

		} else {
			this.warn('请上传初审表！')
			return
		}
		if (UPLOAD_NUM) {
			this.warn('还有图片正在上传！')
			return
		}

		const param = {
			OrderId: id,
			// HouseId: hid,
			OperationRecordId: oprid,
			FirstAuditionImageUrl:FirstAuditionImageUrl.join(),
			C_FirstAuditionImageUrl:C_FirstAuditionImageUrl.join(),
		}
		console.log(param)
		this.pp('CompleteAuditBorrowerInfo', param, res => {
			if (res.ret) {
				// 跳到操作页面
				this.$router.push({ name : 'opList', params: { id, hid }})
			} else {
				this.warn(res.msg)
			}
		})
	},


	// 去详情页面
	gotoDetail(type) {
		console.log(type)
		if (type == 1) { // 自己
			const name = this.BorrowerName
			const id = this.BorrowerIDNO
			// this.$router.push({ 'name' : 'firstDetail', params: { name, id }})
			let routeData = this.$router.resolve({
			   	name: "firstDetail",
			   	// query: params,
			   	params:{ name, id }
			});
			window.open(routeData.href, '_blank')
		} else if (type == 2) { // 配偶
			const name = this.BorrowerSpouseName
			const id = this.BorrowerSpouseIDNO
			// this.$router.push({ name : 'firstDetail', params: { name, id }})
			let routeData = this.$router.resolve({
			   	name: "firstDetail",
			   	// query: params,
			   	params:{ name, id }
			});
			window.open(routeData.href, '_blank')
		} else if (type == 3) {
			const name = this.CompanyName
			// this.$router.push({ name : 'firstDetail', params: { name }})
			let routeData = this.$router.resolve({
			   	name: "firstDetail",
			   	// query: params,
			   	params:{ name }
			});
			window.open(routeData.href, '_blank')
		}

	},

},


}
</script>

<style scoped>

.first-check {
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
	padding: 0px;
}
.first-detail {
	color: #409eff;
	cursor: pointer;
}
</style>
