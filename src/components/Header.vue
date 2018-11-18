<template>
	

	<el-header class="c-header">
		<span v-if="back" class="header-back" @click="goBack">返回</span>
		<span>{{title}}</span>

		<span class="logout pull-right" @click="logOut">退出</span>
		<span v-if="refresh" class="logout pull-right" style="margin-right:15px;" @click="refreshFn">刷新</span>
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
	props: ['title','back','refresh'],
	data () {
		return {
			
		}
	},
	mounted () {

	},
	methods:{

		// 退出
		logOut() {
			this.$router.push({ name : 'login' })
		},

		// 后退
		goBack () {
			const { name } = this.$route
			const { id, hid } = this.$route.params
			if (name == 'opList' || name == 'look') { // 返回首页
				this.$router.push({ name : 'index' })
			} else if (name == 'firstDetail') {
				this.$router.go(-1)
			} else {
				this.$router.push({ name : 'opList', params: { id, hid }})
			}
			// this.$router.go(-1)	
		},

		// 刷新
		refreshFn() {
			this.$emit('refresh')
		},
	

	},


}
</script>

<style scoped>

.header-back {
	float: left;
	cursor: pointer;
}
.header-back:hover {
	color: #cccccc;
}
.logout {
	float: right;
	cursor: pointer;
}
.logout:hover {
	color: #cccccc;
}

</style>
