<template>
	<div class="opList">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="操作列表" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="gotoIndex">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
				<span slot="right" @click="gotoLook">查看资料</span>
			</yd-navbar>

			<div @click="handleTapOp(index)" v-for="(item,index) in opList" :key="index" class="op-item" :class="{'warn':item.Status == 0}">
				<yd-icon v-if="item.Status != 0" class="op-item-icon" color="#ffffff" size=".4rem" name="shield-outline"></yd-icon>
				<yd-icon v-if="item.Status == 0" class="op-item-icon" color="#ffffff" size=".4rem" name="time"></yd-icon>
				<!-- 姓名 -->
				<span class="op-item-name">{{item.OperationName}}</span>
				<yd-navbar-next-icon class="op-item-next" color="#ffffff"></yd-navbar-next-icon>
			</div>


	    </yd-layout>



	</div>
</template>

<script>

export default {
	components:{
	// Button,Field
	},
	name: 'OpList',
	data () {
		return {
			// 订单列表
			opList: [
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "预报单",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "估值",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "估值确认",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "正式报单",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "初审",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "初审确认",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "立项",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "立项报告",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "二审",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品匹配",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品匹配确认",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "联系产品供应方",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "补充资料",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "下户",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品终审",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品终审结果确认",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "打印合同",
					"CreationDateTime" : "",
					"Status" : "0", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品方面签公证",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品方进抵",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "产品方放款",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				},
				{
					"Id" : "AAA",
					"OperationId" : "12354",
					"OperationName" : "归档",
					"CreationDateTime" : "",
					"Status" : "1", // 0，未操作，1，已操作
				}
			], 
		}
	},
	mounted () {
		console.log(this.$route.params.id)
	},
	methods:{

		gotoLook() {
			// 调到预报单
			const id = this.$route.params.id
			console.log(id)
			this.$router.push({ name: 'look', params: { id }})
		},
		
		// 首页
		gotoIndex() {
			this.$router.push({ name : 'index' })
		},

		// 处理点击操作
		handleTapOp(idx) {
			if (this.opList && idx < this.opList.length) {
				const op = this.opList[idx]
				const name = op.OperationName

				if (name == '估值确认') {
					this.$router.push({ name : 'confirmValuation' })
				}
				if (name == '正式报单') {
					this.$router.push({ name : 'form' })
				}
				if (name == '初审确认') {
					this.$router.push({ name : 'confirmFirstCheck' })
				}
				if (name == '立项') {
					this.$router.push({ name : 'setUpProject' })
				}
				if (name == '产品匹配确认') {
					this.$router.push({ name : 'confirmMatch' })
				}
				if (name == '补充资料') {
					this.$router.push({ name : 'addData' })
				}
				if (name == '产品终审结果确认') {
					this.$router.push({ name : 'confirmLastCheck' })
				}
				if (name == '打印合同') {
					this.$router.push({ name : 'printDeal' })
				}
			}
		},

	},


}
</script>

<style scoped>
.opList {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.op-item {
	height: 1rem;
	line-height: 1rem;
	margin: 0.2rem;
	background-color: #808eda;
	color: #ffffff;
	text-align: left;
	border-radius: .1rem;
	padding: 0px .2rem;
	position: relative;
}
.op-item.warn {
	background-color: #ffb400;
}
.op-item.on {

}
.op-item-icon {
	position: absolute;
}
.op-item-name {
	margin-left: .6rem;
}
.op-item-next {
	position: absolute;
	right: .2rem;
}

</style>
