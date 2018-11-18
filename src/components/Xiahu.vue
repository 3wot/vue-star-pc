<template>
	<div class="xiahu">
		<el-container class="c-outer">

			<Header back="true" title="下户"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form class="m-t-20" :size="formSize" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label="下户照片" class="label-danger">
									<ImgUpload :arr="HouseVisitImageUrls" :arrc="C_HouseVisitImageUrls"></ImgUpload>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</div>

				<div class="sec">
					<el-button class="pull-left" type="primary" @click="sub">完成</el-button>
				</div>


			</el-main>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'
import ImgUpload from './ImgUpload'

export default {
	components:{
		Header, ImgUpload,
	},
	name: 'Xiahu',
	data () {
		return {
			formSize:'small',
			HouseVisitImageUrls: [],
			C_HouseVisitImageUrls: [],
		}
	},
	mounted () {
		console.log(this.$route.params.id)
	},

	methods:{
		
		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			const HouseVisitImageUrls = this.HouseVisitImageUrls
			const C_HouseVisitImageUrls = this.C_HouseVisitImageUrls

			const param = {
				OrderId: id,
				// HouseId: hid,
				OperationRecordId: oprid,
				HouseVisitImageUrls:HouseVisitImageUrls,
				C_HouseVisitImageUrls:C_HouseVisitImageUrls,
			}
			if (HouseVisitImageUrls.length && C_HouseVisitImageUrls.length) {

			} else {
				this.warn("请上传下户照片！")
				return
			}
			if (UPLOAD_NUM) {
				this.warn('还有图片正在上传！')
				return
			}
			// console.log(param)
			this.pp('CompleteHouseVisit', param, res => {
				if (res.ret) {
					// 跳到操作页面
					this.$router.push({ name : 'opList', params: { id, hid }})
				} else {
					this.warn(res.msg)
				}
			})
		},
		
	},


}
</script>

<style scoped>
.xiahu {
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
