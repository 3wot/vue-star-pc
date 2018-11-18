<template>
	<div class="second-check">
		<el-container class="c-outer">

			<Header back="true" title="二审"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">操作</span></p>
					<el-form :size="formSize" label-width="150px" label-position="left">
						<el-row :gutter="15">
							<el-col :span="12">
								<el-form-item label="借款主体风险分析" class="label-danger">
									<el-input v-model="val1" type="textarea"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="还款来源分析" class="label-danger">
									<el-input v-model="val2" type="textarea"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="偿债能力分析" class="label-danger">
									<el-input v-model="val3" type="textarea"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="风控建议" class="label-danger">
									<el-input v-model="val4" type="textarea"></el-input>
								</el-form-item>
							</el-col>

						</el-row>
						

					</el-form>
				</div>
				
				<div class="sec">
					<p class="main-title"><span class="span-title">表格</span></p>
					<table class="show-table show-table-sm" cellpadding="0" cellspacing="0" border="1">
						<tbody>
							<tr>
								<td colspan="2" rowspan="2">
									<img class="header1" src="../../static/header1.png">
								</td>
								<td colspan="6">
									<span>风控意见书</span>
								</td>
								
							</tr>
							<tr>
								<td colspan="6">编号:{{OrderNo || '-'}}</td>
								
							</tr>
							<tr>
								<td colspan="8">借款相关主体</td>
							</tr>
							<tr>
								<td colspan="2"></td>
								<td colspan="2">客户</td>
								<td colspan="2">客户配偶</td>
								<td colspan="2">企业</td>
							</tr>
							<tr>
								<td colspan="2">名称：</td>
								<td colspan="2">{{BorrowerName||'-'}}</td>
								<td colspan="2">{{BorrowerSpouseName||'-'}}</td>
								<td colspan="2">{{CompanyName||'-'}}</td>
							</tr>
							<tr>
								<td colspan="2">证件号码：</td>
								<td colspan="2">{{BorrowerIDNO||'-'}}</td>
								<td colspan="2">{{BorrowerSpouseIDNO||'-'}}</td>
								<td colspan="2">{{CompanySecurityIDNO||'-'}}</td>
							</tr>
							<tr>
								<td colspan="2">联系电话：</td>
								<td colspan="2">{{BorrowerMobile||'-'}}</td>
								<td colspan="2">{{BorrowerSpouseMobile||'-'}}</td>
								<td colspan="2">{{CompanyPhone||'-'}}</td>
							</tr>
							<tr>
								<td colspan="8">借款项目</td>
							</tr>
							<tr>
								<td colspan="2">申请贷款金额(万)：</td>
								<td colspan="2">{{ExpectedBorrowAmount||'-'}}</td>
								<td colspan="2">申请贷款期限(月)：</td>
								<td colspan="2">{{ExpectedBorrowPeriodInMonth||'-'}}</td>
							</tr>
							<tr>
								<td colspan="2">借款用途：</td>
								<td colspan="6">{{BorrowUsage||'-'}}</td>
							</tr>
							<tr>
								<td colspan="2">利息还款来源：</td>
								<td colspan="6">{{InterestReturnSource||'-'}}</td>
							</tr>
							<tr>
								<td colspan="2">本金还款来源：</td>
								<td colspan="6">{{PrincipalReturnSource||'-'}}</td>
							</tr>
							
							<tr>
								<td colspan="8">抵押物信息</td>
							</tr>
							<tr>
								<td>房屋坐落：</td>
								<td colspan="7">{{Location||'-'}}</td>
							</tr>
							<tr>
								<td>房屋性质：</td>
								<td>{{Type||'-'}}</td>
								<td>共有情况：</td>
								<td>{{ShareOwnerInfo||'-'}}</td>
								<td>房屋建筑面积(㎡)：</td>
								<td>{{Area||'-'}}</td>
								<td>用途：</td>
								<td>{{Usage||'-'}}</td>
							</tr>
							<tr>
								<td>房屋使用状态：</td>
								<td>{{PledgeInfo||'-'}}</td>
								<td>房屋总价(万)：</td>
								<td>{{HouseTotalPrice||'-'}}</td>
								<td>抵押成数：</td>
								<td>{{PledgePercentage||'-'}}</td>
								<td>抵押总价(万)：</td>
								<td>{{PledgePrice||'-'}}</td>
							</tr>
							<tr>
								<td colspan="8">风控意见</td>
							</tr>
							<tr>
								<td colspan="2">借款主体风险分析</td>
								<td colspan="6">{{val1||'-'}}</td>
							</tr>
							<tr>
								<td colspan="2">还款来源分析</td>
								<td colspan="6">{{val2||'-'}}</td>
							</tr>
							<tr>
								<td colspan="2">偿债能力分析</td>
								<td colspan="6">{{val3||'-'}}</td>
							</tr>
							<tr>
								<td colspan="2">风控建议</td>
								<td colspan="6">{{val4||'-'}}</td>
							</tr>

						</tbody>
					</table>
					

					<el-form :size="formSize" class="m-t-20" label-width="120px" label-position="left">
						<el-row :gutter="15">
							<el-col :span="24">
								<el-form-item label="上传二审报告" class="label-danger">
									<ImgUpload :arr="SecondAuditionImageUrl" :arrc="C_SecondAuditionImageUrl" :max="1"></ImgUpload>
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

export default {
	components:{
		Header, ImgUpload
	},
	name: 'SecondCheck',
	data () {
		return {

			formSize : 'small',
			// 初始化
			"Area": "",
            "BorrowUsage": "",
            "BorrowerIDNO": "",
            "BorrowerMobile": "",
            "BorrowerName": "",
            "BorrowerSpouseIDNO": "",
            "BorrowerSpouseMobile": "",
            "BorrowerSpouseName": "",
            "CompanyName": "",
            "CompanyPhone": "",
            "CompanySecurityIDNO": "",
            "ExpectedBorrowAmount": "",
            "ExpectedBorrowPeriodInMonth": "",
            "HouseTotalPrice": "",
            "InterestReturnSource": "",
            "Location": "",
            "PledgeInfo": "",
            "PledgePercentage": "",
            "PledgePrice": "",
            "PrincipalReturnSource": "",
            "ShareOwnerInfo": "",
            "Type": "",
            "Usage": "",
            // 截图
            SecondAuditionImageUrl: [],
            C_SecondAuditionImageUrl: [],

            val1: '',
            val2: '',
            val3: '',
            val4: '',

            OrderNo: '',
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

		// 初始化
		init () {
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const param = {
				OrderId: id,
				HouseId: hid,
			}
			this.pp('GetSecondAuditionParams', param, res => {
				if (res.ret) {
					const { 
						Area,
			            BorrowUsage,
			            BorrowerIDNO,
			            BorrowerMobile,
			            BorrowerName,
			            BorrowerSpouseIDNO,
			            BorrowerSpouseMobile,
			            BorrowerSpouseName,
			            CompanyName,
			            CompanyPhone,
			            CompanySecurityIDNO,
			            ExpectedBorrowAmount,
			            ExpectedBorrowPeriodInMonth,
			            HouseTotalPrice,
			            InterestReturnSource,
			            Location,
			            PledgeInfo,
			            PledgePercentage,
			            PledgePrice,
			            PrincipalReturnSource,
			            ShareOwnerInfo,
			            Type,
			            Usage,
			            OrderNo,
					} = res.data || {}
					this.Area = Area
					this.BorrowUsage = BorrowUsage
					this.BorrowerIDNO = BorrowerIDNO
					this.BorrowerMobile = BorrowerMobile
					this.BorrowerName = BorrowerName
					this.BorrowerSpouseIDNO = BorrowerSpouseIDNO
					this.BorrowerSpouseMobile = BorrowerSpouseMobile
					this.BorrowerSpouseName = BorrowerSpouseName

					this.CompanyName = CompanyName
					this.CompanyPhone = CompanyPhone
					this.CompanySecurityIDNO = CompanySecurityIDNO
					this.ExpectedBorrowAmount = parseFloat(ExpectedBorrowAmount/10000)
					this.ExpectedBorrowPeriodInMonth = ExpectedBorrowPeriodInMonth

					this.HouseTotalPrice = parseFloat(HouseTotalPrice/10000)
					this.InterestReturnSource = InterestReturnSource
					this.Location = Location
					this.PledgeInfo = PledgeInfo
					this.PledgePercentage = parseFloat(PledgePercentage)

					this.PledgePrice = parseFloat(HouseTotalPrice*PledgePercentage/100000)
					this.PrincipalReturnSource = PrincipalReturnSource
					this.ShareOwnerInfo = ShareOwnerInfo
					this.Type = Type
					this.Usage = Usage
					this.OrderNo = OrderNo
				} else {
					this.warn(res.msg)
				}
			})
		},

		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			const SecondAuditionImageUrl = this.SecondAuditionImageUrl
			const C_SecondAuditionImageUrl = this.C_SecondAuditionImageUrl

			const param = {
				OrderId: id,
				// HouseId: hid,
				OperationRecordId: oprid,
				SecondAuditionImageUrl:SecondAuditionImageUrl.join(),
				C_SecondAuditionImageUrl:C_SecondAuditionImageUrl.join(),
			}
			if (SecondAuditionImageUrl.length && C_SecondAuditionImageUrl.length) {

			} else {
				this.warn("请上传二审报告")
				return
			}
			const val1 = this.val1
			const val2 = this.val2
			const val3 = this.val3
			const val4 = this.val4
			if (val1 && val2 && val3 && val4) {

			} else {
				this.warn("请输入风控意见")
				return
			}
			if (UPLOAD_NUM) {
				this.warn('还有图片正在上传！')
				return
			}

			// console.log(param)
			this.pp('CompleteSecondAudition', param, res => {
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
.second-check {
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
table {
	width: 800px;
}
table td {
    min-width: 90px;
    max-width: 160px;
    padding: 2px;

}


</style>
