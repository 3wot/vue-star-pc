<template>
	<div class="print-deal">
		<el-container class="c-outer">

			<Header back="true" title="打印合同"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<el-form class="m-t-20" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label="合同模板">
									<table class="show-table" cellpadding="0" cellspacing="0" border="1">
										<thead>
											<th width="400">模板名称</th>
											<th width="120">点击下载</th>
										</thead>
										<tbody>
											<tr v-for="(dd,index) in DocumentUrls" :key="index">
												<td>{{dd.Name}}</td>
												<td><a :href="dd.DocumentUrl" :download="dd.Name+'.doc'">点击下载</a></td>
											</tr>
										</tbody>
									</table>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-form-item label="合同照片" class="label-danger">
									<ImgUpload :arr="ContractImageUrls" :arrc="C_ContractImageUrls"></ImgUpload>
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
			ContractImageUrls: [],
			C_ContractImageUrls: [],

			DocumentUrls: [],
		}
	},
	mounted () {
		// console.log(this.$route.params.id)
		this.init()
	},
	methods:{

		// 初始化
		init() {
			const param = {}
			this.pp('GetContractTemplateList', param, res => {
				if (res.ret) {
					this.DocumentUrls = res.data
				} else {
					this.warn(res.msg)
				}
			})

		},


		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			const ContractImageUrls = this.ContractImageUrls
			const C_ContractImageUrls = this.C_ContractImageUrls

			const param = {
				OrderId: id,
				// HouseId: hid,
				OperationRecordId: oprid,
				ContractImageUrls,
				C_ContractImageUrls,
			}
			// console.log(param)
			if (ContractImageUrls.length && C_ContractImageUrls.length) {

			} else {
				this.warn("请上传合同照片！")
				return
			}
			if (UPLOAD_NUM) {
				this.warn('还有图片正在上传！')
				return
			}
			this.pp('CompletePrintContract', param, res => {
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
