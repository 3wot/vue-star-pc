<template>
	<div class="last-check">
		<el-container class="c-outer">

			<Header back="true" title="产品终审"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">操作</span></p>
					<el-form :model="form1" :size="formSize" :rules="rules" label-width="130px" label-position="left">
						<el-row :gutter="15">
							
							<el-col :span="24">
							  	<el-form-item label="是否通过批贷">
									<el-radio-group v-model="radio2">
									    <el-radio :label="true">通过</el-radio>
									    <el-radio :label="false">拒绝</el-radio>
								  	</el-radio-group>
								</el-form-item>
						  	</el-col>							

						  	<div v-if="radio2">

						  		<el-col :span="24">
								  	<el-form-item label="产品供应方批贷函">
										<ImgUpload :arr="op1"></ImgUpload>
									</el-form-item>
							  	</el-col>
							  	<el-col :span="24">
								  	<el-form-item label="批贷金额">
										<el-input placeholder="请输入批贷金额"></el-input>
									</el-form-item>
							  	</el-col>
							  	<el-col :span="24">
								  	<el-form-item label="批贷期限">
										<el-input placeholder="请输入批贷期限"></el-input>
									</el-form-item>
							  	</el-col>
							  	<el-col :span="24">
								  	<el-form-item label="批贷利率">
										<el-input placeholder="请输入批贷利率"></el-input>
									</el-form-item>
							  	</el-col>

						  	</div>

						  	<div v-if="!radio2">
						  		<el-col :span="24">
								  	<el-form-item label="拒绝理由">
										<el-input type="textarea" :rows="4" placeholder="请输入拒绝理由"></el-input>
									</el-form-item>
							  	</el-col>

						  	</div>

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
name: 'LastCheck',
data () {
	return {

		formSize : 'small',
		radio2: true,

		op1 : ['a','b','c'],
		
		form1 : {

		},
		


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
