<template>
	<div class="opList">
		<el-container class="c-outer">
	
			<Header back="true" title="操作列表"></Header>
		  	<el-main class="c-main">
				
				<div @click="handleTapOp(index)" v-for="(item, index) in opList" class="op-item">
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
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "预报单",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "估值",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "估值确认",
				// 	"CreationDateTime" : "",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "正式报单",
				// 	"CreationDateTime" : "",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "初审",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "初审确认",
				// 	"CreationDateTime" : "",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "立项",
				// 	"CreationDateTime" : "",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "二审",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品匹配",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品匹配确认",
				// 	"CreationDateTime" : "",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "联系产品供应方",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "补充资料",
				// 	"CreationDateTime" : "",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "下户",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品终审",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品终审结果确认",
				// 	"CreationDateTime" : "",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "打印合同",
				// 	"CreationDateTime" : "",
				// 	"Status" : "0", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品方面签公证",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品方进抵",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "产品方放款",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// },
				// {
				// 	"Id" : "AAA",
				// 	"OperationId" : "12354",
				// 	"OperationName" : "归档",
				// 	"CreationDateTime" : "",
				// 	"Status" : "1", // 0，未操作，1，已操作
				// }
			], 
		}
	},
	mounted () {
		this.getOpList()
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

		// 获取操作列表
		getOpList () {
			const id = this.$route.params.id
			const param = {
				OrderId: id,
			}
			this.pp('OrderOperationList', param, res => {
				if (res.ret) {
					this.opList = res.data
				} else {
					this.warn(res.msg)
				}
			})
		},

		// 处理点击操作
		handleTapOp(idx) {
			if (this.opList && idx == this.opList.length-1) {
				const op = this.opList[idx]
				const { OperationRoleType, RouteName, OperationRecordId } = op
				const OperatorRoleId = window.sessionStorage.getItem('OperatorRoleId')
				if (OperationRoleType == OperatorRoleId) {
					this.gotoDetail(RouteName, OperationRecordId)
				} else {
					this.warn('您不能进入此操作')
				}
			} else {
				this.warn('您不能进入此操作')
			}
		},

		// 进入具体操作
		gotoDetail (nameKey, OperationRecordId) {
			// 1	预报单	1	2
			// 2	估值	2	3
			// 3	估值确认	1	4
			// 4	正式报单	1	5
			// 5	初审	2	6
			// 6	初审结果确认	1	7
			// 7	立项	1	8
			// 8	二审	2	9
			// 9	产品匹配	3	10
			// 10	产品匹配确认	1	11
			// 11	联系产品供应方	3	12
			// 12	下户	3	13
			// 13	产品终审	3	14
			// 14	产品终审结果确认	1	15
			// 15	打印合同	3	16
			// 16	产品方面签公证	3	17
			// 17	产品方进抵	3	18
			// 18	产品方放款	3	19
			// 19	提交收款凭证	1	20
			// 20	归档	3	0
			const jsonObj = {
				"估值" : "valuation",
				"初审" : "firstCheck",
				"二审" : "secondCheck",
				"产品匹配" : "match",
				"联系产品供应方" : "contact",
				"下户" : "xiahu",
				"产品终审" : "lastCheck",
				"打印合同" : "printDeal",
				"产品方面签公证" : "notarization",
				"产品方进抵" : "jindi",
				"产品方放款" : "loan",
				"归档" : "file",
			}
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const oprid = OperationRecordId
			const name = jsonObj[nameKey]
			// console.log(name)
			if (name) {
				this.$router.push({ name, params: { id, hid, oprid } })
			} else {
				this.warn('您不能进入此操作')
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
