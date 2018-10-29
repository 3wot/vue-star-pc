<template>
	
<div class="upload-img">
 	
 	

	<div class="upload-content">
		<div v-for="(item,index) in arr" :key="index" class="upload-item">
			<div class="dele-icon" @click="dele(index)"><i class="el-icon-close"></i></div>
			<img :src="item">
			<!-- {{item}} -->
		</div>
		
		<div v-if="arr.length < maxNum" class="upload-item" @click="upload">
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
	props: ['arr','arrc','max'],
	data () {
		return {
			maxNum: 999,
		}
	},
	mounted () {
		if (this.max) {
			this.maxNum = this.max
		} else {
			this.maxNum = 999
		}
	},
	methods:{
		// 点击上传
		upload () {
			this.add('http://zx.youzhu.com/uploadfile/2017/0326/20170326104024702.jpg')
		},

		// 添加
		add (url) {
			this.arr.push(url)
			if (this.arrc) {
				this.arrc.push(url)	
			}
		},

		// 删除图片
		dele(idx) {
			this.arr.splice(idx,1)
			if (this.arrc) {
				this.arrc.splice(idx,1)	
			}
		},
	},


}
</script>

<style scoped>


</style>
