<template>
	<div class="print-deal">
		<el-container class="c-outer">

			<Header back="true" title="打印合同"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<el-form class="m-t-20" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label="合同照片">
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
		Header, ImgUpload, ImgList
	},
	name: 'PrintDeal',
	data () {
		return {


		}
	},
	mounted () {
		console.log(this.$route.params.id)
	},
	methods:{



		

	},


}
</script>

<style scoped>
.print-deal {
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
