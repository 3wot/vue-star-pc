<template>
	
<div class="upload-img">
 	
 	

	<div class="upload-content">
		<div v-for="(item,index) in imgArr" :key="index" class="upload-item">
			<img :src="item">
			<!-- {{item}} -->
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
			
		}
	},
	computed:{
		imgArr:function(){
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
		imgArrC:function(){
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

	},
	mounted () {
		
	},
	methods:{


	},


}
</script>

<style scoped>


</style>
