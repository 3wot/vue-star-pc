<template>
	
<div class="upload-img">
 	
 	

	<div class="upload-content">
		<div v-for="(item,index) in imgArr" :key="index" class="upload-item">
			<img :src="item" @click="showBig(index)">
			<!-- {{item}} -->
		</div>

		<div v-if="showBigTemp" :style="styleObj" class="upload-img-outer" @click="hideBig">
		</div>

		<div style="clear: both;"></div>

	</div>

</div>
	
</template>

<script>


export default {
	components:{
	// Button,Field
	},
	name: 'ImgList',
	props: ['arr','arrc'],
	data () {
		return {
			showBigTemp: false,
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
				this.showBigTemp = true
			}
		},
		
		// 关闭大图
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
