<template>
	<div class="jindi">
		<el-container class="c-outer">

			<Header back="true" title="产品方进抵"></Header>

			<el-main class="c-main">
				
				
				
				<div class="sec">
					
					

					<el-form :size="formSize" class="m-t-20" :model="form2" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
							  	<el-form-item label="现场照片">
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
name: 'Jindi',
data () {
	return {

		formSize : 'small',

		form2 : {

		},

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
.jindi {
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
