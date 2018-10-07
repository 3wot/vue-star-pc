<template>
	<div class="valuation">
		<el-container class="c-outer">

			<Header back="true" title="估值"></Header>

			<el-main class="c-main">
				
				<div>
					<p class="main-title">操作</p>
					<el-form :model="form1" :rules="rules" label-width="120px" label-position="left">
						<el-form-item label="房屋坐落" prop="">
							<el-input placeholder="请输入房屋坐落"></el-input>
						</el-form-item>
						<el-form-item label="房屋建筑面积" prop="">
							<el-input placeholder="请输入房屋建筑面积"></el-input>
						</el-form-item>

						<el-form-item label="房屋性质">
						    <el-select placeholder="请选择房屋性质">
						      	<el-option v-for="item in op1" :label="item" :value="item"></el-option>
						      	
						    </el-select>
						</el-form-item>

						<el-form-item label="用途">
						    <el-select placeholder="请选择用途">
						      	<el-option v-for label="区域一" value="shanghai"></el-option>
						      	
						    </el-select>
						</el-form-item>

					 	

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
	// Button,Field
	Header
},
name: 'Valuation',
data () {
	return {


		op1 : ['商品房','经济适用房','央产房','已购公房','其它'],
		op2 : ['住宅','别墅','商业','公寓','办公'],

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


</style>
