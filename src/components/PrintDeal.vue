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
		}
	},
	mounted () {
		console.log(this.$route.params.id)
	},
	methods:{

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
