<template>
	
<div class="upload-img">
 	
 	

	<div class="upload-content">
		<div v-for="(item,index) in arrc" :key="index" class="upload-item">
			<div class="dele-icon" @click="dele(index)"><i class="el-icon-close"></i></div>
			<img :src="item" @click="showBig(index)">
			<!-- {{item}} -->

		</div>

		<div v-if="showBigTemp" :style="styleObj" class="upload-img-outer" @click="hideBig">
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
		
	},
	name: 'ImgUpload',
	props: ['arr','arrc','max'],
	data () {
		return {
			maxNum: 999,
			showBigTemp: false,
			styleObj: {
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center',
			}
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

		// 显示大图
		showBig (idx) {
			if (idx>=0 && idx<this.arr.length) {
				const src = this.arr[idx]
				this.styleObj.backgroundImage = 'url('+src+')'
				this.showBigTemp = true
			}
		},

		hideBig () {
			this.showBigTemp = false
		},
	},


}
</script>

<style scoped>
.upload-img-outer {
    background: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
}

</style>
