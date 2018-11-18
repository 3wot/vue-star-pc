<template>
	<div class="match">
		<el-container class="c-outer">

			<Header back="true" title="产品匹配"></Header>

			<el-main class="c-main">

				<div class="sec">
					<el-form :size="formSize" label-width="130px" label-position="left">
						<el-row>
							<el-col :span="24">
								<el-form-item label="立项报告">
									<table class="show-table show-table-sm" cellpadding="0" cellspacing="0" border="1">
										<tbody>
											<tr>
												<td colspan="6"><span class="f-18">立项报告</span></td>
											</tr>

											<tr>
												<td colspan="6">客户信息</td>
											</tr>
											<tr>
												<td>姓 名</td>
												<td>{{BorrowerName}}</td>
												<td>身份证号</td>
												<td>{{BorrowerIDNO}}</td>
												<td>联系电话</td>
												<td>{{BorrowerMobile}}</td>
											</tr>
											<tr>
												<td>配偶</td>
												<td>{{BorrowerSpouseName}}</td>
												<td>身份证号</td>
												<td>{{BorrowerSpouseIDNO}}</td>
												<td>联系电话</td>
												<td>{{BorrowerSpouseMobile}}</td>
											</tr>

											<tr>
												<td>申请贷款金额(万)</td>
												<td colspan="2">{{ExpectedBorrowAmount}}</td>
												<td>申请贷款期限(月)</td>
												<td colspan="2">{{ExpectedBorrowPeriodInMonth}}</td>
											</tr>
											<tr>
												<td>客户需求侧重</td>
												<td colspan="5">{{LoanPriority}}</td>
											</tr>
											<tr>
												<td>借款用途</td>
												<td colspan="5">{{BorrowUsage}}</td>
											</tr>
											<tr>
												<td>利息还款来源</td>
												<td colspan="5">{{InterestReturnSource}}</td>
											</tr>
											<tr>
												<td>本金还款来源</td>
												<td colspan="5">{{PrincipalReturnSource}}</td>
											</tr>

											<tr>
												<td colspan="6">抵押物信息</td>
											</tr>
											<tr>
												<td>房屋坐落</td>
												<td colspan="5">{{Location}}</td>
											</tr>
											<tr>
												<td>用途</td>
												<td>{{Usage}}</td>
												<td>共有情况</td>
												<td>{{ShareOwnerInfo}}</td>
												<td>房屋建筑面积(㎡)</td>
												<td>{{Area}}</td>
											</tr>
											<tr>
												<td>房屋现状</td>
												<td colspan="5">{{PledgeInfo}}</td>
											</tr>
											<tr>
												<td>抵押状况</td>
												<td>{{IsPledged?"已抵押":"未抵押"}}</td>
												<td>抵押机构</td>
												<td>{{PledgeOrgnization || '-'}}</td>
												<td>抵押金额(万)</td>
												<td>{{PledgePrice || '-'}}</td>
											</tr>
											<tr>
												<td>是否结清</td>
												<td colspan="2">
													<span v-if="IsPledged">{{IsLoanPaidOff?"已结清":"未结清"}}</span>
													<span v-if="!IsPledged">-</span>
												</td>
												<td>是否转单</td>
												<td colspan="2">
													<span v-if="IsPledged">{{IsZhuanDan?"是":"否"}}</span>
													<span v-if="!IsPledged">-</span>
												</td>
											</tr>


											<tr>
												<td colspan="6">企业信息</td>
											</tr>
											<tr>
												<td>企业名称</td>
												<td colspan="2">{{CompanyName}}</td>
												<td>统一社会信用代码</td>
												<td colspan="2">{{CompanySecurityIDNO || '-'}}</td>
											</tr>
											<tr>
												<td>法定代表人姓名</td>
												<td colspan="2">{{CompanyLegalPersonName}}</td>
												<td>法定代表人身份证号</td>
												<td colspan="2">{{CompanyLegalPersonIDNO}}</td>
											</tr>
											
											<tr>
												<td>经营范围</td>
												<td colspan="5">{{BusinessScope}}</td>
											</tr>
											<tr>
												<td>销售经理立项建议</td>
												<td colspan="5">{{SaleOrderValidationComment}}</td>
											</tr>
											
										</tbody>
									</table>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="估值报告">
									<ImgList :arr="HouseValuationImageUrl" :arrc="C_HouseValuationImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="一审报告">
									<ImgList :arr="FirstAuditionImageUrl" :arrc="C_FirstAuditionImageUrl"></ImgList>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="二审报告">
									<ImgList :arr="SecondAuditionImageUrl" :arrc="C_SecondAuditionImageUrl"></ImgList>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</div>
				
				<div class="sec">
					
					<el-form :size="formSize" label-width="130px" label-position="left">
						<el-row>
							<el-col :span="24">
								<el-form-item label="产品列表" class="label-danger">
									<el-checkbox-group class="pull-left text-left" v-model="MatchProductIds">
										<el-tooltip v-for="(op,index) in optionList" :key="index" effect="dark" :content="op.Description" placement="top">
											<el-checkbox class="check-item" :label="op.Id">{{op.Name + '（类别：'+op.ClassName+'）'}}</el-checkbox>
										</el-tooltip>
									</el-checkbox-group>
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
name: 'Valuation',
data () {
	return {

		formSize : 'small',		
		// 初始化
		"BorrowerName" : "",
		"BorrowerIDNO" : "",
		"BorrowerMobile" : "",
		"BorrowerSpouseName" : "",
		"BorrowerSpouseIDNO" : "",
		"BorrowerSpouseMobile" : "",
		"ExpectedBorrowAmount" : "",
		"ExpectedBorrowPeriodInMonth" : "",
		"LoanPriority" : "",
		"BorrowUsage" : "",
		"InterestReturnSource" : "",
		"PrincipalReturnSource" : "",
		"Location" : "",
		"Usage" : "",
		"ShareOwnerInfo" : "",
		"Area" : "",
		"PledgeInfo" : "",
		"IsPledged" : "",
		"PledgeOrgnization" : "",
		"PledgePrice" : "",
		"IsLoanPaidOff" : "",
		"IsZhuanDan" : "",
		"CompanyName" : "",
		"CompanySecurityIDNO" : "",
		"CompanyLegalPersonName" : "",
		"CompanyLegalPersonIDNO" : "",
		"BusinessScope" : "",
		"SaleOrderValidationComment" : "",
		"SecondAuditionImageUrl" : "",
		"C_SecondAuditionImageUrl" : "",
		HouseValuationImageUrl:'',
		C_HouseValuationImageUrl: '',
		FirstAuditionImageUrl: '',
		C_FirstAuditionImageUrl:'',

		// 产品列表
		optionList: [],
		MatchProductIds: [],

		OrderNo: '',

	}
},
mounted () {
	this.init()
},
methods:{

	// 初始化
	init () {
		const { id, hid } = this.$route.params
		const param = {
			OrderId: id,
			HouseId: hid,
		}
		// 获取初始化数据
		this.pp('GetProductMatchParams', param, res => {
			if (res.ret) {
				const { 
					BorrowerName,
					BorrowerIDNO,
					BorrowerMobile,
					BorrowerSpouseName,
					BorrowerSpouseIDNO,
					BorrowerSpouseMobile,
					ExpectedBorrowAmount,
					ExpectedBorrowPeriodInMonth,
					LoanPriority,
					BorrowUsage,
					InterestReturnSource,
					PrincipalReturnSource,
					Location,
					Usage,
					ShareOwnerInfo,
					Area,
					PledgeInfo,
					IsPledged,
					PledgeOrgnization,
					PledgePrice,
					IsLoanPaidOff,
					IsZhuanDan,
					CompanyName,
					CompanySecurityIDNO,
					CompanyLegalPersonName,
					CompanyLegalPersonIDNO,
					BusinessScope,
					SaleOrderValidationComment,
					SecondAuditionImageUrl,
					C_SecondAuditionImageUrl,
					OrderNo,
					HouseValuationImageUrl,
					C_HouseValuationImageUrl,
					FirstAuditionImageUrl,
					C_FirstAuditionImageUrl,
				} = res.data || {}
					this.BorrowerName = BorrowerName
					this.BorrowerIDNO = BorrowerIDNO
					this.BorrowerMobile = BorrowerMobile
					this.BorrowerSpouseName = BorrowerSpouseName
					this.BorrowerSpouseIDNO = BorrowerSpouseIDNO
					this.BorrowerSpouseMobile = BorrowerSpouseMobile
					this.ExpectedBorrowAmount = parseFloat(ExpectedBorrowAmount/10000)
					this.ExpectedBorrowPeriodInMonth = ExpectedBorrowPeriodInMonth
					this.LoanPriority = LoanPriority
					this.BorrowUsage = BorrowUsage
					this.InterestReturnSource = InterestReturnSource
					this.PrincipalReturnSource = PrincipalReturnSource
					this.Location = Location
					this.Usage = Usage
					this.ShareOwnerInfo = ShareOwnerInfo
					this.Area = Area
					this.PledgeInfo = PledgeInfo
					this.IsPledged = IsPledged
					this.PledgeOrgnization = PledgeOrgnization
					this.PledgePrice = parseFloat(PledgePrice/10000)
					this.IsLoanPaidOff = IsLoanPaidOff
					this.IsZhuanDan = IsZhuanDan
					this.CompanyName = CompanyName
					this.CompanySecurityIDNO = CompanySecurityIDNO
					this.CompanyLegalPersonName = CompanyLegalPersonName
					this.CompanyLegalPersonIDNO = CompanyLegalPersonIDNO
					this.BusinessScope = BusinessScope
					this.SaleOrderValidationComment = SaleOrderValidationComment
					this.SecondAuditionImageUrl = SecondAuditionImageUrl
					this.C_SecondAuditionImageUrl = C_SecondAuditionImageUrl
					this.OrderNo = OrderNo
					this.HouseValuationImageUrl = HouseValuationImageUrl
					this.C_HouseValuationImageUrl = C_HouseValuationImageUrl
					this.FirstAuditionImageUrl = FirstAuditionImageUrl
					this.C_FirstAuditionImageUrl = C_FirstAuditionImageUrl
			} else {
				this.warn(res.msg)
			}
		})

		// 获取产品列表
		this.pp('GetProductList', param, res => {
			if (res.ret) {
				this.optionList = res.data
			} else {
				this.warn(res.msg)
			}
		})


	},
	
	// 确认
	sub () {
		const { id, hid, oprid } = this.$route.params
		const MatchProductIds = this.MatchProductIds
		const param = {
			OrderId : id,
			OperationRecordId : oprid,
			MatchProductIds,
		}
		if (MatchProductIds.length) {

		} else {
			this.warn('请选择产品！')
			return
		}
		// console.log(param)
		this.pp('CompleteProductMatch', param, res => {
			if (res.ret) {
				// 跳到操作页面
				this.$router.push({ name : 'opList', params: { id, hid }})
			} else {
				this.warn(res.msg)
			}
		})

	},


},


}
</script>

<style scoped>
.match {
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
	min-width: 110px;


}
.check-item {
	margin-right: 30px;
	margin-left: 0px !important;
}


</style>
