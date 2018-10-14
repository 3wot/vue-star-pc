<template>
	<div class="add">
		<el-container class="c-outer">

			<Header back="true" title="补充资料"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">操作</span></p>
					<el-form :model="form1" :size="formSize" :rules="rules" label-width="120px" label-position="left">
						<el-row>
							<el-col :span="24">
							  	<el-form-item label="需要补充的资料">
									<el-checkbox-group class="pull-left" v-model="checkbox1">
								      	<el-checkbox class="pull-left check-item" v-for="(item,index) in op1" :key="index" :label="item" border></el-checkbox>
								    </el-checkbox-group>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="备注">
									<el-input type="textarea" :rows="4" placeholder="请输入内容"></el-input>
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

export default {
	components:{
	Header,
},
name: 'Add',
data () {
	return {

		formSize : 'small',
		checkbox1 : [],

		form1 : {

		},
		form2 : {

		},
		op1 : ['商品房','经济适用房','央产房','已购公房','客户配偶身份证照片客户配偶身份证照片'],
		

		


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
.add {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.check-item {
	min-width: 150px;
	float: left;
	margin-left: 0 !important;
	margin-right: 15px;
	margin-bottom: 15px;
}



</style>
