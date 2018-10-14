<template>
	<div class="first-check">
		<el-container class="c-outer">

			<Header back="true" title="初审"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form :model="form1" :size="formSize" :rules="rules" label-width="120px" label-position="left">
						<el-row>

						  	<el-col :span="24">
							  	
								<el-button class="pull-left" type="primary">初审</el-button>
								
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
								<td colspan="5">编号:系统生成</td>
							</tr>
							<tr>
								<td colspan="7">借款相关主体</td>
							</tr>
							<tr>
								<td></td>
								<td colspan="2">客户人</td>
								<td colspan="2">客户配偶</td>
								<td colspan="2">企业</td>
							</tr>
							<tr>
								<td>名称：</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
							</tr>
							<tr>
								<td>证件号码：</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
							</tr>
							<tr>
								<td>联系电话：</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
								<td colspan="2">XX</td>
							</tr>
							<tr>
								<td colspan="7"></td>
							</tr>
							<tr>
								<td colspan="7">自然人风险</td>
							</tr>
							<tr>
								<td></td>
								<td colspan="3">借款人</td>
								<td colspan="3">借款人配偶</td>
								
							</tr>
							<tr>
								<td>公安不良行为</td>
								<td colspan="3">XX</td>
								<td colspan="3">XXX</td>
								
							</tr>
							<tr>
								<td>法院涉诉</td>
								<td colspan="3">XX</td>
								<td colspan="3">XXX</td>
								
							</tr>
							<tr>
								<td>法院被执行人</td>
								<td colspan="3">XX</td>
								<td colspan="3">XXX</td>
								
							</tr>
							<tr>
								<td>失信被执行人</td>
								<td colspan="3">XX</td>
								<td colspan="3">XXX</td>
								
							</tr>
							<tr>
								<td>网络借贷黑名单</td>
								<td colspan="3">XX</td>
								<td colspan="3">XXX</td>
								
							</tr>
							<tr>
								<td>税务负面</td>
								<td colspan="3">XX</td>
								<td colspan="3">XXX</td>
								
							</tr>
							<tr>
								<td>严重违法</td>
								<td colspan="3">XX</td>
								<td colspan="3">XXX</td>
								
							</tr>
							<tr>
								<td>信贷逾期</td>
								<td colspan="3">XX</td>
								<td colspan="3">XXX</td>
								
							</tr>
							<tr>
								<td>多头借贷</td>
								<td colspan="3">XX</td>
								<td colspan="3">XXX</td>
								
							</tr>
							<tr>
								<td colspan="7"></td>
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
								<td colspan="6">XXXX</td>
								
							</tr>
							<tr>
								<td>行政处罚</td>								
								<td colspan="6">XXXX</td>
								
							</tr>
							<tr>
								<td>股权出质</td>								
								<td colspan="6">XXXX</td>
								
							</tr>
							<tr>
								<td>动产抵押</td>								
								<td colspan="6">XXXX</td>
								
							</tr>
							<tr>
								<td>欠税公告</td>								
								<td colspan="6">XXXX</td>
								
							</tr>
							<tr>
								<td>司法拍卖</td>								
								<td colspan="6">XXXX</td>
								
							</tr>
							<tr>
								<td>法律诉讼</td>								
								<td colspan="6">XXXX</td>
								
							</tr>
							<tr>
								<td>法院公告</td>								
								<td colspan="6">XXXX</td>
								
							</tr>
							<tr>
								<td>开庭公告</td>								
								<td colspan="6">XXXX</td>
								
							</tr>
							<tr>
								<td>失信被执行人</td>								
								<td colspan="6">XXXX</td>
							</tr>
							<tr>
								<td>法院被执行人</td>								
								<td colspan="6">XXXX 详情</td>
							</tr>
							<tr>
								<td>严重违法</td>								
								<td colspan="6">XXXX</td>
							</tr>
							<tr>
								<td>企业风险</td>								
								<td colspan="6">XXXX</td>
							</tr>
							<tr>
								<td>经营范围</td>								
								<td colspan="6">XXXX</td>
							</tr>

							
						</tbody>
					</table>
					

					<el-form :size="formSize" class="m-t-20" :model="form2" label-width="120px" label-position="left">
						<el-row gutter="15">

							<el-col :span="24">
							  	<el-form-item label="上传初审表" prop="">
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
import ImgList from './ImgList'

export default {
	components:{
	// Button,Field
	Header, ImgUpload, ImgList
},
name: 'FirstCheck',
data () {
	return {

		formSize : 'small',
		arr1: [],


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


}
</style>
