<template>
	<div class="add">
		<el-container class="c-outer">

			<Header back="true" title="补充资料"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">操作</span></p>
					<el-form :size="formSize" label-width="120px" label-position="left">
						<el-row>
							<el-col :span="24">
								<el-form-item label="需要补充的资料">
									<!-- <el-checkbox-group class="pull-left" v-model="Materials"> -->
										<div v-for="(item,index) in option1" class="add-item">
											<el-checkbox class="pull-left check-item" :key="index" :label="item.Id" v-model="item.checked" border>{{item.Name}}</el-checkbox>	
											<el-input class="add-input" v-model="item.Comment" placeholder="请输入备注"></el-input>
										</div>
									<!-- </el-checkbox-group> -->
								</el-form-item>
							</el-col>
							<!-- <el-col :span="24">
								<el-form-item label="备注">
									<el-input type="textarea" :rows="4" placeholder="请输入内容"></el-input>
								</el-form-item>
							</el-col> -->
							
							

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

export default {
	components:{
		Header,
	},
	name: 'Add',
	data () {
		return {

			formSize : 'small',
			Materials : [],
			option1: [],


		}
	},
	mounted () {
		// console.log(this.$route.params.id)
		this.init()
	},
	methods:{

		// 格式化
		format (opArr) {
			if (opArr && opArr.length) {
				opArr.map(item => {
					item.checked = false
					item.Comment = ""
				})
			}
			return opArr
		},

		// 初始化
		init() {
			const { id, hid, oprid } = this.$route.params
			const param = {
				// OrderId : id,
				// OperationRecordId : oprid,
			}
			console.log(param)
			this.pp('GetMaterialList', param, res => {
				if (res.ret) {
					const arr = this.format(res.data)
					this.option1 = arr
				} else {
					this.warn(res.msg)
				}
			})
		},

		// 提交
		sub() {
			let Materials = []
			const option1 = this.option1
			option1.map(item => {
				if (item.checked) {
					Materials.push({
						Id: item.Id,
						Comment: item.Comment,
					})
				}
			})
			const { id, hid, oprid } = this.$route.params
			const param = {
				OrderId : id,
				Materials,
			}
			// console.log(param)
			this.pp('SubmitMaterialList', param, res => {
				if (res.ret) {
					// 跳到操作页面
					this.$router.push({ name:'opList', params: { id, hid }})
					this.warn("提交成功！")
				} else {
					this.warn(res.msg)
				}
			})
		},



	},


}
</script>

<style scoped>
.add {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.check-item {
	min-width: 150px;
	float: left;
	margin-left: 0 !important;
	margin-right: 15px;
	margin-bottom: 15px;
}
.add-input {
	float: left;
	width: 150px;
}
.add-item {
	width: 50%;
	float: left;
}



</style>
