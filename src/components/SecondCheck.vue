<template>
	<div class="second-check">
		<el-container class="c-outer">

			<Header back="true" title="二审"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">操作</span></p>
					<el-form :model="form1" :size="formSize" :rules="rules" label-width="130px" label-position="left">
						<el-row :gutter="15">
						  	<el-col :span="12">
							  	<el-form-item label="借款主体风险分析">
									<el-input type="textarea"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="还款来源分析">
									<el-input type="textarea"></el-input>
								</el-form-item>
						  	</el-col>

					  		<el-col :span="12">
							  	<el-form-item label="偿债能力分析">
									<el-input type="textarea"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="风控建议">
									<el-input type="textarea"></el-input>
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
								<td colspan="6">编号:系统生成</td>
								
							</tr>
							<tr>
								<td colspan="8"></td>
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
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
							</tr>
							<tr>
								<td colspan="2">证件号码：</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
							</tr>
							<tr>
								<td colspan="2">联系电话：</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
							</tr>
							

							<tr>
								<td colspan="8"></td>
							</tr>
							<tr>
								<td colspan="8">借款项目</td>
							</tr>
							<tr>
								<td colspan="2">申请贷款金额：</td>
								<td colspan="2">XXX</td>
								<td colspan="2">申请贷款期限：</td>
								<td colspan="2">XXX</td>
							</tr>
							<tr>
								<td colspan="2">借款用途：</td>
								<td colspan="6">XX</td>
							</tr>
							<tr>
								<td colspan="2">利息还款来源：</td>
								<td colspan="6">XX</td>
							</tr>
							<tr>
								<td colspan="2">本金还款来源：</td>
								<td colspan="6">XX</td>
							</tr>
							
							<tr>
								<td colspan="8"></td>
							</tr>
							<tr>
								<td colspan="8">抵押物信息</td>
							</tr>
							<tr>
								<td>房屋坐落：</td>
								<td colspan="7"></td>
							</tr>
							<tr>
								<td>房屋性质：</td>
								<td></td>
								<td>共有情况：</td>
								<td></td>
								<td>房屋建筑面积：</td>
								<td></td>
								<td>用途：</td>
								<td></td>
							</tr>
							<tr>
								<td>房屋使用状态：</td>
								<td></td>
								<td>房屋总价：</td>
								<td></td>
								<td>抵押成数：</td>
								<td></td>
								<td>抵押总价：</td>
								<td></td>
							</tr>

							<tr>
								<td colspan="8"></td>
							</tr>
							<tr>
								<td colspan="8">风控意见</td>
							</tr>
							<tr>
								<td colspan="2">借款主体风险分析</td>
								<td colspan="6"></td>
							</tr>
							<tr>
								<td colspan="2">还款来源分析</td>
								<td colspan="6"></td>
							</tr>
							<tr>
								<td colspan="2">偿债能力分析</td>
								<td colspan="6"></td>
							</tr>
							<tr>
								<td colspan="2">风控建议</td>
								<td colspan="6"></td>
							</tr>

						</tbody>
					</table>
					

					<el-form :size="formSize" class="m-t-20" :model="form2" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
							  	<el-form-item label="上传二审报告">
									<ImgUpload :arr="arr1"></ImgUpload>
								</el-form-item>
						  	</el-col>
						</el-row>
					</el-form>
				</div>


				<div class="sec">
					<el-button class="pull-left" type="primary">完成</el-button>
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
	// Button,Field
	Header, ImgUpload
},
name: 'SecondCheck',
data () {
	return {

		formSize : 'small',
		val1: '',

		form1 : {

		},
		form2 : {

		},
		op1 : ['商品房','经济适用房','央产房','已购公房','其它'],
		op2 : ['住宅','别墅','商业','公寓','办公'],
		op3 : [6.5,5],
		op4 : ['无','北','南','西','东','东北','西北','东南','西南'],

		rules : {},

		arr1 : [],


	}
},
mounted () {
	console.log(this.$route.params.id)
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
table td {
	width : 130px;


}


</style>
