<template>
	<div class="contact">
		<el-container class="c-outer">

			<Header back="true" title="联系产品供应方"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form :size="formSize" label-width="150px" label-position="left">
						<el-row>

							<el-col :span="24">
							  	<el-form-item label="客户身份证照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="客户配偶身份证照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="公司营业执照副本">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="房产证照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="客户户口本照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="客户婚姻证明材料照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="客户征信报告">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="配偶户口本照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="配偶婚姻证明材料照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="配偶征信报告">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="银行流水">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="其它">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						</el-row>
					</el-form>
				</div>

				<div class="sec">
					
					<el-button class="pull-left" type="primary">完成</el-button>
					
					<el-button class="pull-left" type="primary" @click="gotoAdd">补充资料</el-button>
					
				</div>


			</el-main>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'
import ImgList from './ImgList'

export default {
	components:{
	// Button,Field
	Header, ImgList
},
name: 'Contact',
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

		arr1 : ['商品房','经济适用房','央产房','已购公房','其它'],

	}
},
mounted () {
	console.log(this.$route.params.id)
},
methods:{

	gotoAdd() {
		
		this.$router.push({ name: 'add' })
	},
	
	// 首页
	gotoIndex() {
		this.$router.push({ name : 'index' })
	},

		

	},


}
</script>

<style scoped>
.contact {
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
