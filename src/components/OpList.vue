<template>
	<div class="opList">
		<el-container class="c-outer">
	
			<Header back="true" title="操作列表"></Header>
		  	<el-main class="c-main">
				
				<div @click="handleTapOp(index)" v-for="(item, index) in opList" class="op-item" :class="{'warn': item.Status == 0}">
					<span class="pull-left op-item-icon">
						<i v-if="item.Status == 1" class="el-icon-circle-check"></i>
						<i v-if="item.Status == 0" class="el-icon-time"></i>
					</span>
					<span>{{item.OperationName}}</span>
				</div>

		  	</el-main>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'

export default {
	components:{
	// Button,Field
		Header
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

				if (name == '估值') {
					this.$router.push({ name : 'valuation' })
				}
				if (name == '初审') {
					this.$router.push({ name : 'firstCheck' })
				}
				if (name == '二审') {
					this.$router.push({ name : 'secondCheck' })
				}
				if (name == '产品匹配') {
					this.$router.push({ name : 'match' })
				}
				if (name == '联系产品供应方') {
					this.$router.push({ name : 'contact' })
				}
				if (name == '下户') {
					this.$router.push({ name : 'xiahu' })
				}
				if (name == '产品终审') {
					this.$router.push({ name : 'lastCheck' })
				}
				if (name == '打印合同') {
					this.$router.push({ name : 'printDeal' })
				}
				if (name == '产品方面签公证') {
					this.$router.push({ name : 'notarization' })
				}
				if (name == '产品方进抵') {
					this.$router.push({ name : 'jindi' })
				}
				if (name == '产品方放款') {
					this.$router.push({ name : 'loan' })
				}
				if (name == '归档') {
					this.$router.push({ name : 'file' })
				}
				
				// if (name == '估值确认') {
				// 	this.$router.push({ name : 'confirmValuation' })
				// }
				// if (name == '正式报单') {
				// 	this.$router.push({ name : 'form' })
				// }
				// if (name == '初审确认') {
				// 	this.$router.push({ name : 'confirmFirstCheck' })
				// }
				// if (name == '立项') {
				// 	this.$router.push({ name : 'setUpProject' })
				// }
				// if (name == '产品匹配确认') {
				// 	this.$router.push({ name : 'confirmMatch' })
				// }
				// if (name == '补充资料') {
				// 	this.$router.push({ name : 'addData' })
				// }
				// if (name == '产品终审结果确认') {
				// 	this.$router.push({ name : 'confirmLastCheck' })
				// }
				// if (name == '打印合同') {
				// 	this.$router.push({ name : 'printDeal' })
				// }
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
	height: 60px;
	width: 500px;
	line-height: 60px;
	margin: 0 auto;
	margin-top: 20px;
	border-radius: 5px;
	position: relative;
    color: #67c23a;
    background: #f0f9eb;
	border: 1px solid #c2e7b0;
	padding: 0 15px;
	cursor: pointer;

}
.op-item.warn {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
}
.op-item.on {

}
.op-item-icon {
	font-size: 18px;
}
.op-item-name {
	margin-left: .6rem;
}
.op-item-next {
	position: absolute;
	right: .2rem;
}

</style>
