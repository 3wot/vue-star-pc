<template>
	<div class="index">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="销售" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<!-- <yd-icon name="verifycode" slot="right">添加</yd-icon> -->
				<span slot="right" @click="gotoAdd">添加</span>
			</yd-navbar>

		 	<div slot="top" style="height: 1rem;">
	 		 	<span class="line" :class="{ active: type == 1 }" @click="changeType(1)">进行中的报单</span>
	 		 	<span class="line" :class="{ active: type == 2 }" @click="changeType(2)">历史报单</span>
		 	</div>

			<div @click="gotoOpList(index)" v-for="(item,index) in orderList" :key="index" class="order-item" :class="{'warn':item.Status == 2}">
				<yd-icon class="order-item-icon" name="ucenter" color="#ffffff" size=".4rem"></yd-icon>
				<!-- 姓名 -->
				<span class="order-item-name">{{item.BorrowerName}}</span>
				<yd-navbar-next-icon class="order-item-next" color="#ffffff"></yd-navbar-next-icon>
			</div>


	    </yd-layout>



	</div>
</template>

<script>
// import Router from 'vue-router'
import URLS from '../router/link'

export default {
	components:{
	// Button,Field
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
.line {
	display: inline-block;
	width: 50%;
	height: 1rem;
	line-height: 1rem;
	float: left;
	color: #333333;
	text-align: center;
	font-size: .3rem;
}
.line.active {
	color: #5871f5;
}
.order-item {
	height: 1rem;
	line-height: 1rem;
	margin: 0.2rem;
	background-color: #808eda;
	color: #ffffff;
	text-align: left;
	border-radius: .1rem;
	padding: 0px .2rem;
	margin-top: 0px;
	position: relative;
	font-size: .3rem;
}
.order-item.warn {
	background-color: #ffb400;
}
.order-item.on {

}
.order-item-icon {
	position: absolute;
}
.order-item-name {
	margin-left: .6rem;
}
.order-item-next {
	position: absolute;
	right: .2rem;
}

</style>
