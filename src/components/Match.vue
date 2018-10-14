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
												<td>XX</td>
												<td>身份证号</td>
												<td>XX</td>
												<td>联系电话</td>
												<td>XX</td>
											</tr>
											<tr>
												<td>配偶</td>
												<td>XX</td>
												<td>身份证号</td>
												<td>XX</td>
												<td>联系电话</td>
												<td>XX</td>
											</tr>

											<tr>
												<td>申请贷款金额</td>
												<td colspan="2"></td>
												<td>申请贷款期限</td>
												<td colspan="2"></td>
											</tr>
											<tr>
												<td>客户需求侧重</td>
												<td colspan="5"></td>
											</tr>
											<tr>
												<td>借款用途</td>
												<td colspan="5"></td>
											</tr>
											<tr>
												<td>利息还款来源</td>
												<td colspan="5"></td>
											</tr>
											<tr>
												<td>本金还款来源</td>
												<td colspan="5"></td>
											</tr>

											<tr>
												<td colspan="6">抵押物信息</td>
											</tr>
											<tr>
												<td>房屋坐落</td>
												<td colspan="5"></td>
											</tr>
											<tr>
												<td>用途</td>
												<td>XX</td>
												<td>共有情况</td>
												<td>XX</td>
												<td>房屋建筑面积</td>
												<td>XX</td>
											</tr>
											<tr>
												<td>房屋现状</td>
												<td colspan="5"></td>
											</tr>
											<tr>
												<td>抵押状况</td>
												<td>XX</td>
												<td>抵押机构</td>
												<td>XX</td>
												<td>抵押金额</td>
												<td>XX</td>
											</tr>
											<tr>
												<td>是否结清</td>
												<td colspan="2">XX</td>
												<td>是否转单</td>
												<td colspan="2">XX</td>
											</tr>


											<tr>
												<td colspan="6">企业信息</td>
											</tr>
											<tr>
												<td>企业名称</td>
												<td colspan="2"></td>
												<td>统一社会信用代码</td>
												<td colspan="2"></td>
											</tr>
											<tr>
												<td>法定代表人姓名</td>
												<td colspan="2"></td>
												<td>法定代表人身份证号</td>
												<td colspan="2"></td>
											</tr>
											
											<tr>
												<td>经营范围</td>
												<td colspan="5"></td>
											</tr>
											<tr>
												<td>销售经理立项建议</td>
												<td colspan="5"></td>
											</tr>
											
										</tbody>
									</table>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="24">
							  	<el-form-item label="二审报告">
									<ImgList :arr="op1"></ImgList>
								</el-form-item>
						  	</el-col>
						</el-row>
					</el-form>
				</div>
				
				<div class="sec">
					
					<el-form :model="form1" :size="formSize" :rules="rules" label-width="130px" label-position="left">
						<el-row>

						  	<el-col :span="24">
						  		<el-form-item label="产品渠道名称分类">
								    <el-select class="w-100" placeholder="请选择产品渠道名称分类">
								      	<el-option v-for="(item,index) in op2" :key="index" :label="item" :value="item"></el-option>
								      	
								    </el-select>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="24">
						  		<el-form-item label="产品名称二级菜单">
								    <el-checkbox-group class="pull-left" v-model="checkList">
								    	<el-checkbox label="复选框 A"></el-checkbox>
									    <el-checkbox label="复选框 B"></el-checkbox>
									    <el-checkbox label="复选框 C"></el-checkbox>
								  	</el-checkbox-group>
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
import ImgList from './ImgList'

export default {
	components:{
	// Button,Field
	Header, ImgUpload, ImgList
},
name: 'Valuation',
data () {
	return {

		formSize : 'small',
		val1: '',
		checkList: [],

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


</style>
