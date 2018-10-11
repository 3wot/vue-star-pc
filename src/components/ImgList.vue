<template>
	
<div class="upload-img">
 	
 	

	<div class="upload-content">
		<div v-for="(item,index) in imgArr" :key="index" class="upload-item">
			<!-- <img src="item"> -->
			{{item}}
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
	props: ['arr'],
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



	},


}
</script>

<style scoped>


</style>
