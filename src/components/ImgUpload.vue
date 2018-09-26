<template>
	
<div class="upload-img">
 	
 	<div class="upload-title"><span class="danger">* </span>{{title}}</div>

	<div class="upload-content">
		<div v-for="(item,index) in imgArr" :key="index" class="upload-item">
			<yd-icon class="dele-icon" @click.native="dele(index)" color="#5871f5" size=".4rem" name="error"></yd-icon>
			<!-- <img src="item"> -->
			{{item}}
		</div>
		
		<div class="upload-item" @click="upload">
			<img src="../../static/plus.png" alt="">
		</div>

		<div style="clear: both;"></div>

	</div>

</div>
	
</template>

<script>
// import Router from 'vue-router'
import URLS from '../router/link'

export default {
	components:{
	// Button,Field
	},
	name: 'ImgUpload',
	props: ['title','arr'],
	data () {
		return {
			imgArr : [],

		}
	},
	mounted () {
		// 点击上传
		this.imgArr = this.arr
	},
	methods:{
		// 点击上传
		upload () {
			this.add('A')
		},

		// 添加
		add (url) {
			this.imgArr.push(url)	
		},


		// 删除图片
		dele(idx) {
			this.imgArr.splice(idx,1)
		},



	},


}
</script>

<style scoped>


</style>
