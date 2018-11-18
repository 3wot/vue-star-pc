<template>
	<div class="print-deal">
		<el-container class="c-outer">

			<Header back="true" title="详情"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<el-form class="m-t-20" label-width="120px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label=" ">
									<table class="show-table" cellpadding="0" cellspacing="0" border="1">
										<thead>
											<th width="100">案件编号</th>
											<th width="100">案件状态</th>
											<th width="100">法院名称</th>
											<th width="100">实体号</th>
											<th width="100">实体名称</th>
											<th width="100">执行金额</th>
											<th width="100">日期</th>
										</thead>
										<tbody v-if="data.length">
											<tr v-for="(dd,index) in data" :key="index">
												<td>{{dd.caseCode}}</td>
												<td>{{dd.caseState}}</td>
												<td>{{dd.courtName}}</td>
												<td>{{dd.entityId}}</td>
												<td>{{dd.entityName}}</td>
												<td>{{dd.execMoney}}</td>
												<td>{{dd.regDate}}</td>
											</tr>
										</tbody>
										<tbody v-if="!data.length">
											<tr>
												<td colspan="7">暂无数据</td>
											</tr>
										</tbody>
									</table>
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
	name: 'FirstDetail',
	data () {
		return {
			data: []
		}
	},
	mounted () {
		// console.log(this.$route.params.id)
		this.init()
	},
	methods:{

		// 初始化
		init() {
			const { name } = this.$route.params
			const id = this.$route.params.id || ''
			const param = {
				name,
				idNo: id,
			}
			this.pp('GetEnforcementInfoDetail', param, res => {
				if (res.ret) {
					this.data = res.data
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
