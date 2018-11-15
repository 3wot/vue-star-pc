<template>
	
<div class="upload-img">
 	
 	

	<div class="upload-content">
		<div v-for="(item,index) in imgArr" :key="index" class="upload-item">
			<img :src="item" @click="showBig(index)">
			<!-- {{item}} -->
		</div>

		<!-- <div v-if="showBigTemp" :style="styleObj" class="upload-img-outer" @click="hideBig">
			<a :href="showBigSrc" target="_blank" class="big-a">新页面打开图片</a>
		</div> -->

		<div v-if="showBigTemp" class="upload-img-outer">
			<div class="upload-img-tool">
				<a :href="showBigSrc" target="_blank" class="big-a">单独打开</a>
				<span class="big-a" @click="big">放大</span>
				<span class="big-a" @click="small">缩小</span>
				<span class="big-a" @click="left">左转</span>
				<span class="big-a" @click="right">右转</span>
				<span class="pull-right big-a" style="margin-right: 15px" @click="hideBig"><i class="el-icon-close"></i></span>
			</div>
			<div :style="styleObj" class="upload-img-in">
				
			</div>
		</div>

		<div style="clear: both;"></div>

	</div>

</div>
	
</template>

<script>
import $ from 'jquery'
let LEFT = 90
let RIGHT = 90

export default {
	components:{
	// Button,Field
	},
	name: 'ImgList',
	props: ['arr','arrc'],
	data () {
		return {
			showBigTemp: false,
			showBigSrc: '',
			styleObj: {
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center',
			}
		}
	},
	computed:{

		imgArr:function(){
			if (this.arrc) {
				if (typeof this.arrc == 'string') {
					let a = []
					a.push(this.arrc)
					return a
				} else {
					return this.arrc
				}	
			} else {
				return []
			}
		},
		imgArrC:function(){
			if (this.arr) {
				if (typeof this.arr == 'string') {
					let a = []
					a.push(this.arr)
					return a
				} else {
					return this.arr
				}	
			} else {
				return []
			}
		},

	},
	mounted () {
		
	},
	methods:{

		// 显示大图
		showBig (idx) {
			if (idx>=0 && idx<this.imgArrC.length) {
				const src = this.imgArrC[idx]
				this.styleObj.backgroundImage = 'url('+src+')'
				this.showBigSrc = src
				this.showBigTemp = true
			}
		},
		
		// 关闭大图
		hideBig () {
			this.showBigTemp = false
		},

		big() {
			const width = $('.upload-img-outer').width() + 20
			const height = $('.upload-img-outer').height() + 20
			const left = $('.upload-img-outer').position().left - 10
			const top = $('.upload-img-outer').position().top
			$('.upload-img-outer').css({
				width: width,
				height: height,
				left: left,
				// top: top,
			})
		},

		small() {
			const width = $('.upload-img-outer').width() - 20
			const height = $('.upload-img-outer').height() - 20
			const left = $('.upload-img-outer').position().left + 10
			const top = $('.upload-img-outer').position().top
			$('.upload-img-outer').css({
				width: width,
				height: height,
				left: left,
				// top: top,
			})
		},

		left() {
			
		},
		right() {
			
		},

	},


}
</script>

<style scoped>


</style>
