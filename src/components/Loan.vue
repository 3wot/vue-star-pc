<template>
	<div class="loan">
		<el-container class="c-outer">

			<Header back="true" title="产品方放款"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					
					<el-form class="m-t-20" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label="操作放款" class="label-danger">
									<el-button class="pull-left" type="primary" @click="sub">放款</el-button>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
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
	name: 'Loan',
	data () {
		return {

		}
	},
	mounted () {
		// console.log(this.$route.params.id)
	},
	methods:{

		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			const param = {
				OrderId: id,
				// HouseId: hid,
				OperationRecordId: oprid,
			}
			// console.log(param)
			this.pp('CompleteLoanReceived', param, res => {
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
.loan {
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
