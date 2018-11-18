<template>
	<div class="last-check">
		<el-container class="c-outer">

			<Header back="true" title="产品终审"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">操作</span></p>
					<el-form label-width="150px" label-position="left">
						<el-row :gutter="15">
							
							<el-col :span="24">
								<el-form-item label="是否通过批贷" class="label-danger">
									<div class="text-left">
										<el-radio-group v-model="IsLoanApproved">
											<el-radio :label="true">通过</el-radio>
											<el-radio :label="false">拒绝</el-radio>
										</el-radio-group>	
									</div>

								</el-form-item>
							</el-col>							

							<div v-if="IsLoanApproved">

								<el-col :span="24">
									<el-form-item label="产品供应方批贷函" class="label-danger">
										<ImgUpload :arr="LoanApprovalImageUrls" :arrc="C_LoanApprovalImageUrls"></ImgUpload>
									</el-form-item>
								</el-col>
								<el-col :span="24">
									<el-form-item label="批贷金额(万元)" class="label-danger">
										<el-input v-model="LoanAmount" placeholder="请输入批贷金额(万元)"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="24">
									<el-form-item label="批贷期限(月)" class="label-danger">
										<el-input  v-model="LoanPeriodInMonth" placeholder="请输入批贷期限(月)"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="24">
									<el-form-item label="批贷月利率(%)" class="label-danger">
										<el-input  v-model="LoanInterest" placeholder="请输入批贷月利率(%)"></el-input>
									</el-form-item>
								</el-col>

							</div>

							<div v-if="!IsLoanApproved">
								<el-col :span="24">
									<el-form-item label="拒绝理由" class="label-danger">
										<el-input type="textarea" v-model="LoanRejectionComment" :rows="4" placeholder="请输入拒绝理由"></el-input>
									</el-form-item>
								</el-col>

							</div>

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
	name: 'LastCheck',
	data () {
		return {

			"IsLoanApproved" : true,
			"LoanApprovalImageUrls" : [],
			"C_LoanApprovalImageUrls" : [],
			"LoanAmount" : "",
			"LoanPeriodInMonth" : "",
			"LoanInterest" : "",
			"LoanRejectionComment" : "",


		}
	},
	mounted () {

	},
	methods:{

		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			
			const {
				IsLoanApproved,
				LoanApprovalImageUrls,
				C_LoanApprovalImageUrls,
				LoanAmount,
				LoanPeriodInMonth,
				LoanInterest,
				LoanRejectionComment,
			} = this
			const param = {
				OrderId: id,
				// HouseId: hid,
				OperationRecordId: oprid,
				IsLoanApproved,
				LoanApprovalImageUrls,
				C_LoanApprovalImageUrls,
				LoanAmount,
				LoanPeriodInMonth,
				LoanInterest,
				LoanRejectionComment,
			}
			// console.log(param)
			if (IsLoanApproved && LoanApprovalImageUrls.length && C_LoanApprovalImageUrls.length && LoanAmount && LoanPeriodInMonth && LoanInterest) {

			} else {
				if (!IsLoanApproved && LoanRejectionComment) {

				} else {
					this.warn('请完成所有标红的项目')
					return	
				}
			}
			if (UPLOAD_NUM) {
				this.warn('还有图片正在上传！')
				return
			}
			this.pp('CompleteLoanApproval', param, res => {
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
.last-check {
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
