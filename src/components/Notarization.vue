<template>
	<div class="notarization">
		<el-container class="c-outer">

			<Header back="true" title="产品方面签公证"></Header>

			<el-main class="c-main">

				<div class="sec">
					<el-form class="m-t-20" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label="现场照片" class="label-danger">
									<ImgUpload :arr="SignContractImageUrls" :arrc="C_SignContractImageUrls"></ImgUpload>
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
import ImgList from './ImgList'

export default {
	components:{
		Header, ImgUpload, ImgList
	},
	name: 'PrintDeal',
	data () {
		return {
			SignContractImageUrls:[],
			C_SignContractImageUrls:[],


		}
	},
	mounted () {
		// console.log(this.$route.params.id)
	},
	methods:{

		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			const SignContractImageUrls = this.SignContractImageUrls
			const C_SignContractImageUrls = this.C_SignContractImageUrls

			const param = {
				OrderId: id,
				// HouseId: hid,
				OperationRecordId: oprid,
				SignContractImageUrls:SignContractImageUrls,
				C_SignContractImageUrls:C_SignContractImageUrls,
			}
			// console.log(param)
			if (SignContractImageUrls.length && C_SignContractImageUrls.length) {

			} else {
				this.warn("请上传现场照片！")
				return
			}
			if (UPLOAD_NUM) {
				this.warn('还有图片正在上传！')
				return
			}
			this.pp('CompleteSignContract', param, res => {
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
.notarization {
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
