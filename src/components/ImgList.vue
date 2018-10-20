<template>
	
<div class="upload-img">
 	
 	

	<div class="upload-content">
		<div v-for="(item,index) in arr" :key="index" class="upload-item">
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
	props: ['arr'],
	data () {
		return {
			

		}
	},
	mounted () {
		
		
	},
	methods:{



	},


}
</script>

<style scoped>


</style>
