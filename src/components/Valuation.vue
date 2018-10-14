<template>
	<div class="valuation">
		<el-container class="c-outer">

			<Header back="true" title="估值"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">操作</span></p>
					<el-form :model="form1" :size="formSize" :rules="rules" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
							  	<el-form-item label="房本照片">
									<ImgList :arr="op1"></ImgList>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
							  	<el-form-item label="房屋坐落">
									<el-input placeholder="请输入房屋坐落"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="房屋建筑面积">
									<el-input placeholder="请输入房屋建筑面积"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="房屋性质">
								    <el-select class="w-100" v-model="val1" placeholder="请选择房屋性质">
								      	<el-option v-for="(item,index) in op1" :key="index" :label="item" :value="item"></el-option>
								    </el-select>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="用途">
								    <el-select class="w-100" placeholder="请选择用途">
								      	<el-option v-for="(item,index) in op2" :key="index" :label="item" :value="item"></el-option>
								      	
								    </el-select>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="抵押成数">
								    <el-select class="w-100" placeholder="请选择抵押成数">
								      	<el-option v-for="(item,index) in op3" :key="index" :label="item" :value="item"></el-option>
								      	
								    </el-select>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="房屋朝向">
								    <el-select class="w-100" placeholder="请选择房屋朝向">
								      	<el-option v-for="(item,index) in op4" :key="index" :label="item" :value="item"></el-option>
								      	
								    </el-select>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
							  	<el-form-item label="总楼层数">
									<el-input placeholder="请输入总楼层数"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
							  	<el-form-item label="所在楼层">
									<el-input placeholder="请输入所在楼层"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
							  	<el-form-item label="建成年代">
									<el-date-picker class="w-100" type="year" placeholder="请选择建成年代"></el-date-picker>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="24">
							  	
								<el-button class="pull-left" type="primary">估值</el-button>
								
						  	</el-col>
						
						</el-row>
						

					</el-form>
				</div>
				
				<div class="sec">
					<p class="main-title"><span class="span-title">表格</span></p>
					<table class="show-table" cellpadding="0" cellspacing="0" border="1">
						<tbody>
							<tr>
								<td colspan="2">
									<img class="header1" src="../../static/header1.png">
								</td>
								<td colspan="3">
									<span>房屋估值情况表</span>
								</td>
								
							</tr>
							<tr>
								<td>编号</td>
								<td colspan="4">系统生成</td>
							</tr>
							<tr>
								<td>房屋坐落</td>
								<td colspan="4">XXXXXXX</td>
							</tr>
							<tr>
								<td>房屋建筑面积</td>
								<td>123</td>
								<td>用途</td>
								<td colspan="2">XXXX</td>
							</tr>
							<tr>
								<td>总楼层数</td>
								<td>123</td>
								<td>房屋所在楼层</td>
								<td colspan="2">XXXX</td>
							</tr>
							<tr>
								<td>房屋朝向</td>
								<td>123</td>
								<td>建成年代</td>
								<td colspan="2">XXXX</td>
							</tr>
							<tr>
								<td>房屋单价</td>
								<td>123</td>
								<td>房屋总价</td>
								<td colspan="2">XXXX</td>
							</tr>
							<tr>
								<td>抵押成数</td>
								<td>123</td>
								<td>抵押总价</td>
								<td colspan="2">XXXX</td>
							</tr>
							<tr>
								<td>行政区均价</td>
								<td>123</td>
								<td>成交周期</td>
								<td colspan="2">XXXX</td>
							</tr>
							<tr>
								<td rowspan="2">周边小区价格</td>
								<td>小区1</td>
								<td>XX</td>
								<td>小区2</td>
								<td>XX</td>
							</tr>
							<tr>
								<td>小区3</td>
								<td>XX</td>
								<td>小区4</td>
								<td>XX</td>
							</tr>
							
						</tbody>
					</table>
					<p class="tip">备注【评估信息仅供参考，最终估值以下户为准】</p>

					<el-form :size="formSize" class="m-t-20" :model="form2" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
							  	<el-form-item label="上传估值报告">
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
name: 'Valuation',
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
.valuation {
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
