<template>
	<div class="file">
		<el-container class="c-outer">

			<Header back="true" title="归档"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form :size="formSize" class="m-t-20" :model="form2" label-width="150px" label-position="left">
						<el-row :gutter="15">

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
							  	<el-form-item label="户口本照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="婚姻证明材料照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="房产证照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="房屋租赁合同照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="原始购房合同照片">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="契税发票">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="上家借款合同">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="上家结清证明">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="银行流水">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="征信报告">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="公司营业执照副本">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="企业征信">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="对公流水">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="购销合同">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="担保人财产共有人同意提供担保的书面文件">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="还款卡">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="实控人证明">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="企业财务报表">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="诉讼结案证明">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="其它">
									<ImgList :arr="arr1"></ImgList>
								</el-form-item>
						  	</el-col>
						  	<el-col :span="24">
							  	<el-form-item label="客户电话">
									<el-input placeholder="请输入客户电话"></el-input>
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
name: 'File',
data () {
	return {

		formSize : 'small',

		form2 : {

		},

		arr1 : ['a','b','c'],


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
.file {
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
