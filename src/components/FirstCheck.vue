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
					<p class="main-title"><span class="span-title">表格</span></p>
					<table class="show-table" cellpadding="0" cellspacing="0" border="1">
						<tbody>
							
							
						</tbody>
					</table>
					<p class="tip">备注【评估信息仅供参考，最终估值以下户为准】</p>

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

table td {
	width : 130px;


}
</style>
