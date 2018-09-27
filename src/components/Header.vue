<template>
	

	<el-header class="c-header">
		<span>首页</span>
		<span class="logout pull-right" @click="logOut">退出</span>
	</el-header>
		
	
</template>

<script>
// import Router from 'vue-router'
// import GETJSON from '../router/service'


export default {
	components:{
	// Button,Field
	},
	name: 'Header',
	data () {
		return {
			
		}
	},
	mounted () {

	},
	methods:{
		logOut() {
			this.$router.push({ name : 'login' })
		},
		



	},


}
</script>

<style scoped>


</style>
