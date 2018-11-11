<template>
	<div class="index">
		<el-container class="c-outer">
	
			<!-- <el-header class="c-header">
				<span>首页</span>
				<span class="logout pull-right">退出</span>
			</el-header> -->
			<Header title="首页"></Header>
		  	<el-main class="c-main">
				<el-button-group>
				  	<el-button type="primary" :plain="type != 0" class="btn-150" @click="changeType(0)">进行中报单</el-button>
				  	<el-button type="primary" :plain="type != 3" class="btn-150" @click="changeType(3)">历史报单</el-button>
				</el-button-group>
				
				<!-- <div class="table-outer"> -->
					<el-table
						:data="orderList"
						border
						height="'calc(100% - 80px)'"
						class="index-table"
						>
						<el-table-column
							prop="BorrowerName"
							:formatter="formatterName"
							label="客户姓名"
							width="150">
						</el-table-column>
						<el-table-column
							prop="CreationDateTime"
							label="创建时间"
							width="300">
						</el-table-column>
						<el-table-column
							:formatter="formatter"
							label="状态">
						</el-table-column>
						<el-table-column
							label="操作">
							<template slot-scope="scope">
					        	<el-button
					          		@click.native.prevent="handleClick(scope.$index)"
						          	type="text"
						          	size="small">
					          		详情
					        	</el-button>
					        	<el-button
					          		@click.native.prevent="handleLookClick(scope.$index)"
						          	type="text"
						          	size="small">
					          		全部资料
					        	</el-button>
					      	</template>
						</el-table-column>
					</el-table>
				<!-- </div> -->

		  	</el-main>
		</el-container>
		
		


	</div>
</template>

<script>
// import Router from 'vue-router'
import URLS from '../router/link'
import Header from './Header'

export default {
	components:{
	// Button,Field
		Header
	},
	name: 'Index',
	data () {
		return {
			// 0 进行 3 历史
			type: 0,
			// 订单列表
			orderList: [
				// {
				// 	"BorrowerIDNO": null,
	   //              "BorrowerName": null,
	   //              "CreationDateTime": "2018-10-20 05:53:15",
	   //              "CurrentOperation": null,
	   //              "HouseId": "11",
	   //              "OrderId": "17",
	   //              "Status": "0"
				// },
				// {
				// 	"BorrowerIDNO": null,
	   //              "BorrowerName": null,
	   //              "CreationDateTime": "2018-10-20 05:53:15",
	   //              "CurrentOperation": null,
	   //              "HouseId": "11",
	   //              "OrderId": "17",
	   //              "Status": "0"
				// },
			],
		}
	},
	mounted () {
		this.changeType(0)
	},
	methods:{

		// 点击进行中或者历史
		changeType(type) {
			this.type = type
			const param = {
				order_type: type,
			}
			this.pp('OrderList', param, res => {
				// console.log(res)
				if (res.ret) {
					this.orderList = res.data
				} else {
					this.warn(res.msg)
				}
			})
		},
		
		// 新增
		gotoAdd() {
			// 调到预报单
			this.$router.push({ name : 'addOrder' })
		},

		// 操作列表页面
		handleClick (idx) {
			if (this.orderList && idx < this.orderList.length) {
				const order = this.orderList[idx]
				const id = order.OrderId
				const hid = order.HouseId

				this.$router.push({ name : 'opList', params: { id, hid }})
			}
		},

		// 全部资料页面
		handleLookClick (idx) {
			if (this.orderList && idx < this.orderList.length) {
				const order = this.orderList[idx]
				const id = order.OrderId
				const hid = order.HouseId
				window.sessionStorage.setItem('OrderId',id)
				this.$router.push({ name : 'look', params: { id, hid }})
			}
		},

		// 格式化函数
		formatter (row, column, cellValue, index) {
			const { Status, CurrentOperation } = row || {}
			if (Status == 0) {
				return CurrentOperation || '进行中'
			} else if (Status == 1) {
				return "正常结案"
			} else if (Status == 2) {
				return "中途结案"
			}
		},

		// 名字格式化函数
		formatterName (row, column, cellValue, index) {
			const { BorrowerName } = row || {}
			return BorrowerName || '暂无'
		},
		
		// 换色
		RowClass ({row, rowIndex}) {
			const { Status } = row || {}
			if (Status == 1) {
				// return 'success-row'
				return ''
			} else if (Status == 2) {
				return 'warn-row'
			}
			return ''
		},

	},


}
</script>

<style scoped>
.index {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.table-outer {
	height: calc(100% - 80px);
	margin-top: 20px;
}
.index-table {
	height: calc(100% - 80px);
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	margin-top: 20px;
	text-align: left;
}




</style>
