<template>
	<div class="valuation">
		<el-container class="c-outer">

			<Header back="true" title="估值"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">操作</span></p>
					<el-form :model="form1" :size="formSize" :rules="rules" label-width="130px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label="房本照片">
									<ImgList :arr="HouseCertificateImageUrls" :arrc="C_HouseCertificateImageUrls"></ImgList>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="房屋建筑面积(㎡)" class="label-danger">
									<el-input type="number" @change="changeArea" v-model="form1.Area" placeholder="请输入房屋建筑面积(㎡)"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="房屋坐落" class="label-danger">
									<el-input v-model="form1.Location" placeholder="请输入房屋坐落"></el-input>
								</el-form-item>
							</el-col>

							

							<el-col :span="12">
								<el-form-item label="房屋性质">
									<el-select class="w-100" v-model="form1.Type" placeholder="请选择房屋性质">
										<el-option v-for="(item,index) in op1" :key="index" :label="item" :value="item"></el-option>
									</el-select>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="用途" class="label-danger">
									<el-select class="w-100" v-model="form1.Usage" @change="changeUsage" placeholder="请选择用途">
										<el-option v-for="(item,index) in op2" :key="index" :label="item" :value="item"></el-option>

									</el-select>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="抵押成数" class="label-danger">
									<el-select class="w-100" v-model="form1.PledgePercentage" placeholder="请选择抵押成数">
										<el-option v-for="(item,index) in op3" :key="index" :label="item" :value="item"></el-option>

									</el-select>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="房屋朝向">
									<el-select class="w-100" v-model="form1.Orientation" placeholder="请选择房屋朝向">
										<el-option v-for="(item,index) in op4" :key="index" :label="item" :value="item"></el-option>

									</el-select>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="总楼层数">
									<el-input type="number" v-model="form1.TotalFloor" placeholder="请输入总楼层数"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="所在楼层">
									<el-input type="number" v-model="form1.Floor" placeholder="请输入所在楼层"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item label="建成年代">
									<el-date-picker v-model="form1.BuildingFinishYear" value-format="yyyy" class="w-100" type="year" placeholder="请选择建成年代"></el-date-picker>
									<!-- <el-input v-model="form1.BuildingFinishYear" placeholder="请输入房龄"></el-input> -->
								</el-form-item>
							</el-col>

							<el-col :span="24">

								<el-button class="pull-left" type="primary" @click="valuation">估值</el-button>
								<span v-if="loading" class="loading"><i class="el-icon-loading"></i></span>
							</el-col>

						</el-row>
						

					</el-form>
				</div>
				
				<div class="sec">
					<p class="main-title"><span class="span-title">表格</span></p>
					<table class="show-table" cellpadding="0" cellspacing="0" border="1">
						<tbody>
							<tr>
								<td colspan="2">
									<img class="header1" src="../../static/header1.png">
								</td>
								<td colspan="3">
									<span>房屋估值情况表</span>
								</td>
								
							</tr>
							<tr>
								<td>编号</td>
								<td colspan="4">{{OrderNo || '-'}}</td>
							</tr>
							<tr>
								<td>房屋坐落</td>
								<td colspan="4">{{form1.Location || '-'}}</td>
							</tr>							<tr>
								<td>房屋建筑面积</td>
								<td>{{form1.Area|| '-'}}</td>
								<td>用途</td>
								<td colspan="2">{{form1.Usage|| '-'}}</td>
							</tr>
							<tr>
								<td>总楼层数</td>
								<td>{{form1.TotalFloor|| '-'}}</td>
								<td>房屋所在楼层</td>
								<td colspan="2">{{form1.Floor|| '-'}}</td>
							</tr>
							<tr>
								<td>房屋朝向</td>
								<td>{{form1.Orientation|| '-'}}</td>
								<td>房龄</td>
								<td colspan="2" :class="{'td-danger': BuildingYear>=35}">{{BuildingYear|| '-'}}</td>
							</tr>
							<tr>
								<td>房屋单价(元/平米)</td>
								<td>{{HouseUnitPrice|| '-'}}</td>
								<td>房屋总价(万)</td>
								<td colspan="2">{{HouseTotalPrice|| '-'}}</td>
							</tr>
							<tr>
								<td>抵押成数</td>
								<td>{{form1.PledgePercentage|| '-'}}</td>
								<td>抵押总价(万)</td>
								<td colspan="2">{{HousePledgePrice|| '-'}}</td>
							</tr>
							<tr>
								<td>行政区均价(元/平米)</td>
								<td>{{HouseAveragePrice|| '-'}}</td>
								<td>成交周期(日)</td>
								<td colspan="2">{{HouseDealPeriod|| '-'}}</td>
							</tr>
							<tr>
								<td rowspan="2">周边小区价格</td>
								<td>{{HouseNearbyName1|| '-'}}</td>
								<td>{{HouseNearbyAveragePrice1|| '-'}}</td>
								<td>{{HouseNearbyName2|| '-'}}</td>
								<td>{{HouseNearbyAveragePrice2|| '-'}}</td>
							</tr>
							<tr>
								<td>{{HouseNearbyName3|| '-'}}</td>
								<td>{{HouseNearbyAveragePrice3|| '-'}}</td>
								<td>{{HouseNearbyName4|| '-'}}</td>
								<td>{{HouseNearbyAveragePrice4|| '-'}}</td>
							</tr>
							
						</tbody>
					</table>
					<p class="tip">备注【评估信息仅供参考，最终估值以下户为准】</p>

					<el-form :size="formSize" class="m-t-20" label-width="120px" label-position="left">
						<el-row :gutter="15">
							<el-col :span="24">
								<el-form-item label="上传估值报告" class="label-danger">
									<ImgUpload :arr="HouseValuationImageUrl" :arrc="C_HouseValuationImageUrl" :max="1"></ImgUpload>
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
	name: 'Valuation',
	computed:{
		BuildingYear: function(){
			const start = this.form1.BuildingFinishYear
			const end = new Date().getFullYear()
			if (start) {
				return +end - (+start)
			} else {
				return 0
			}
		},
	},
	data () {
		return {
			loading : false,
			formSize : 'small',
			form1 : {
				"OwnerName" : "",
				"Location" : "",
				"Usage" : "住宅",
				"Area" : "",
				"PledgePercentage" : "6.5",
				Orientation: "",
				TotalFloor: "",
				Floor: "",
				BuildingFinishYear: "",
				Type: '', // 房屋性质
			},
			rules : {
				Area : [
				 	{ required: true, message: '请输入房屋建筑面积', trigger: 'blur' },
				],
				Usage : [
				 	{ required: true, message: '请输入用途', trigger: 'blur' }
				],
				PledgePercentage : [
				 	{ required: true, message: '请输入抵押成数', trigger: 'blur' }
				],
			},
			// 房本照片
			HouseCertificateImageUrls:[],
			C_HouseCertificateImageUrls: [],
			// 上传报告
			HouseValuationImageUrl: [],
			C_HouseValuationImageUrl: [],

			op1 : ['商品房','经济适用房','央产房','已购公房','其它'],
			op2 : ['住宅','别墅','商业','公寓','办公'],
			op3 : ['4','4.5','5','5.5','6','6.5','7','7.5','8'],
			op4 : ['无','北','南','西','东','东北','西北','东南','西南'],

			//估值返回字段
		 	"HouseAveragePrice": "",
            "HouseDealPeriod": "",
            "HouseNearbyName1": '',
            "HouseNearbyName2": '',
            "HouseNearbyName3": '',
            "HouseNearbyName4": '',
            "HouseNearbyAveragePrice1": "",
            "HouseNearbyAveragePrice2": "",
            "HouseNearbyAveragePrice3": "",
            "HouseNearbyAveragePrice4": "",
            "HousePledgePrice": "",
            "HouseTotalPrice": "",
            "HouseUnitPrice": "",

            temp: false, // 是否估值成功
            OrderNo: '', // 编号
		}
	},
	mounted () {
		// console.log(this.$route.params.id)
		this.init()
	},
	methods:{

		gotoLook() {
			// 调到预报单
			const id = this.$route.params.id
			console.log(id)
			this.$router.push({ name: 'look', params: { id }})
		},
		
		// 修改用途
		changeUsage(e) {
			const { Usage } = this.form1
			if (Usage == '住宅') {
				this.form1.PledgePercentage = '6.5'
			} else {
				this.form1.PledgePercentage = '5'
			}
		},

		// 修改面积
		changeArea() {
			const { Area } = this.form1
			console.log(Area)
			if (Area < 0 ) {
				this.form1.Area = 0
			}
		},

		// 首页
		gotoIndex() {
			this.$router.push({ name : 'index' })
		},

		// 估值
		valuation () {
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const {
				OwnerName,
				Location,
				Usage,
				Area,
				PledgePercentage,
				Type,
				Orientation,
				TotalFloor,
				Floor,
				BuildingFinishYear,
			} = this.form1

			if (Location && Area && Usage && PledgePercentage) {

			} else {
				this.warn('请完成标红的项目！')
				return
			}
			const param = {
				OrderId: id,
				HouseId: hid,
				OwnerName,
				Location,
				Usage,
				Area,
				PledgePercentage,
				Type,
				Orientation,
				TotalFloor,
				Floor,
				BuildingFinishYear,
			}
			this.loading = true
			this.pp('HouseValuation', param, res => {
				this.loading = false
				if (res.ret) {
					const {
						HouseAveragePrice,
			            HouseDealPeriod,
			            HouseNearbyName1,
			            HouseNearbyName2,
			            HouseNearbyName3,
			            HouseNearbyName4,
			            HouseNearbyAveragePrice1,
			            HouseNearbyAveragePrice2,
			            HouseNearbyAveragePrice3,
			            HouseNearbyAveragePrice4,
			            HousePledgePrice,
			            HouseTotalPrice,
			            HouseUnitPrice,
					} = res.data || {}

					this.HouseAveragePrice = HouseAveragePrice
					this.HouseDealPeriod = HouseDealPeriod
					this.HouseNearbyName1 = HouseNearbyName1
					this.HouseNearbyName2 = HouseNearbyName2
					this.HouseNearbyName3 = HouseNearbyName3
					this.HouseNearbyName4 = HouseNearbyName4
					this.HouseNearbyAveragePrice1 = HouseNearbyAveragePrice1
					this.HouseNearbyAveragePrice2 = HouseNearbyAveragePrice2
					this.HouseNearbyAveragePrice3 = HouseNearbyAveragePrice3
					this.HouseNearbyAveragePrice4 = HouseNearbyAveragePrice4
					this.HousePledgePrice = HousePledgePrice
					this.HouseTotalPrice = HouseTotalPrice
					this.HouseUnitPrice = HouseUnitPrice
				} else {
					this.warn(res.msg)
				}
			})

		},

		// 初始化
		init () {
			const id = this.$route.params.id
			const hid = this.$route.params.hid
			const param = {
				OrderId: id,
				HouseId: hid,
			}
			this.pp('GetHouseValuationParams', param, res => {
				if (res.ret) {
					const { 
						HouseCertificateImageUrls,
						C_HouseCertificateImageUrls,
						OrderNo,
					} = res.data || {}
					this.HouseCertificateImageUrls = HouseCertificateImageUrls
					this.C_HouseCertificateImageUrls = C_HouseCertificateImageUrls
					this.OrderNo = OrderNo
				} else {
					this.warn(res.msg)
				}
			})
		},

		// 确认
		sub () {
			const { id, hid, oprid } = this.$route.params
			const HouseValuationImageUrl = this.HouseValuationImageUrl
			const C_HouseValuationImageUrl = this.C_HouseValuationImageUrl

			if (HouseValuationImageUrl.length && C_HouseValuationImageUrl.length) {
			} else {
				this.warn('请上传估值报告！')
				return
			}
			if (UPLOAD_NUM) {
				this.warn('还有图片正在上传！')
				return
			}

			const param = {
				OrderId: id,
				HouseId: hid,
				OperationRecordId: oprid,
				HouseValuationImageUrl:HouseValuationImageUrl.join(),
				C_HouseValuationImageUrl:C_HouseValuationImageUrl.join(),
			}
			this.pp('CompleteHouseValuation', param, res => {
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
.valuation {
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
	max-width: 150px;
	min-width: 120px;
}
.td-danger {
	background-color: red;
	color: #ffffff;
}


</style>
