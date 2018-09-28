<template>
	<div class="index">
		<el-container class="c-outer">
	
			<!-- <el-header class="c-header">
				<span>首页</span>
				<span class="logout pull-right">退出</span>
			</el-header> -->
			<Header></Header>
		  	<el-main class="c-main">
				<el-button-group>
				  	<el-button type="primary" :plain="type != 1" class="btn-150" @click="changeType(1)">进行中报单</el-button>
				  	<el-button type="primary" :plain="type != 2" class="btn-150" @click="changeType(2)">历史报单</el-button>
				</el-button-group>
				
				<!-- <div class="table-outer"> -->
					<el-table
						:data="orderList"
						border
						height="'calc(100% - 80px)'"
						class="index-table"
						:row-class-name="RowClass">
						<el-table-column
							prop="BorrowerName"
							label="姓名"
							width="200">
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
			// 1 进行 2 历史
			type: 1,
			// 订单列表
			orderList: [
				{
					"Id" : "111",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 0, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "222",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 1, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "333",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 2, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "222",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 1, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "333",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 2, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "222",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 1, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "333",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 2, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "222",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 1, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "333",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 2, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "222",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 1, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "333",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 2, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "222",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 1, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "333",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 2, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "222",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 1, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "333",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 2, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "222",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 1, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "333",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 2, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "222",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 1, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "333",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 2, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},
				{
					"Id" : "444",
					"BorrowerName" : "张三", 
					"BorrowerMobile" : "15111112222", 
					"BorrowerIDNO" : "XXXXXXXXXX", 
					"CreationDateTime" : "2018-08-01 18:00:00", 
					"Status" : 0, // 报单状态，0，正在进行中，1，正常结案，2，中途结案
					"CurrentOperation" : "估值"
				},	
			],
		}
	},
	mounted () {
		
	},
	methods:{

		changeType(type) {
			this.type = type
			const param = {
				order_type: type,
			}
			// this.GETJSON('OrderList', param, res => {
			// 	console.log(res)
			// 	if (res.ret) {
					
			// 	} else {
			// 		this.$dialog.toast({
			// 			mes: res.mes,
			// 			icon: 'none',
			// 			timeout: 2000,
			// 		})
			// 	}
			// })
		},
		
		// 新增
		gotoAdd() {
			// 调到预报单
			this.$router.push({ name : 'addOrder' })
		},

		// 操作列表页面
		gotoOpList (idx) {
			if (this.orderList && idx < this.orderList.length) {
				const order = this.orderList[idx]
				const id = order.Id
				this.$router.push({ name : 'opList', params: { id }})
			}
			
		},


		formatter (row, column, cellValue, index) {
			console.log(row)
			console.log(cellValue)
			console.log(index)
			console.log('_______________________')
			const { Status, CurrentOperation } = row || {}
			if (Status == 0) {
				return CurrentOperation
			} else if (Status == 1) {
				return "正常结案"
			} else if (Status == 2) {
				return "中途结案"
			}

		},

		RowClass ({row, rowIndex}) {
			const { Status } = row || {}
			if (Status == 1) {
				return 'success-row'
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
