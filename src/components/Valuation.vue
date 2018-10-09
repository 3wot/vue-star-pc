<template>
	<div class="valuation">
		<el-container class="c-outer">

			<Header back="true" title="估值"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">操作</span></p>
					<el-form :model="form1" :rules="rules" label-width="120px" label-position="left">
						<el-row gutter="15">

						  	<el-col :span="12">
							  	<el-form-item label="房屋坐落" prop="">
									<el-input placeholder="请输入房屋坐落"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="房屋建筑面积" prop="">
									<el-input placeholder="请输入房屋建筑面积"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="房屋性质">
								    <el-select class="w-100" placeholder="请选择房屋性质">
								      	<el-option v-for="(item,index) in op2" :key="index" :label="item" :value="item"></el-option>
								    </el-select>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="用途">
								    <el-select class="w-100" placeholder="请选择用途">
								      	<el-option v-for="(item,index) in op2" :key="index" :label="item" :value="item"></el-option>
								      	
								    </el-select>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="抵押成数">
								    <el-select class="w-100" placeholder="请选择抵押成数">
								      	<el-option v-for="(item,index) in op3" :key="index" :label="item" :value="item"></el-option>
								      	
								    </el-select>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
						  		<el-form-item label="房屋朝向">
								    <el-select class="w-100" placeholder="请选择房屋朝向">
								      	<el-option v-for="(item,index) in op4" :key="index" :label="item" :value="item"></el-option>
								      	
								    </el-select>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
							  	<el-form-item label="总楼层数" prop="">
									<el-input placeholder="请输入总楼层数"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
							  	<el-form-item label="所在楼层" prop="">
									<el-input placeholder="请输入所在楼层"></el-input>
								</el-form-item>
						  	</el-col>

						  	<el-col :span="12">
							  	<el-form-item label="建成年代" prop="">
									<el-date-picker class="w-100" type="year" placeholder="请选择建成年代"></el-date-picker>
								</el-form-item>
						  	</el-col>
							
							<el-col :span="24">
							  	<el-form-item label="房本照片" prop="">
									<ImgUpload title="房本照片" :arr="option2"></ImgUpload>
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
import ImgUpload from './ImgUpload'

export default {
	components:{
	// Button,Field
	Header, ImgUpload
},
name: 'Valuation',
data () {
	return {


		op1 : ['商品房','经济适用房','央产房','已购公房','其它'],
		op2 : ['住宅','别墅','商业','公寓','办公'],
		op3 : [6.5,5],
		op4 : ['无','北','南','西','东','东北','西北','东南','西南'],
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
