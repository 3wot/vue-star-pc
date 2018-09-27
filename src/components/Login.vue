<template>
	<div class="login">

		<img class="bg" src="../../static/login.jpg">

		<div class="login-form">
			
			<el-form label-width="90px" label-position="left">
				<el-form-item label="账号">
					<el-input v-model="mobile"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="pwd"></el-input>
				</el-form-item>

				<el-form-item label="记住密码">
				    <el-switch
					  	v-model="remember"
					  	active-color="#13ce66"
					  	inactive-color="#dddddd">
					</el-switch>

			  	</el-form-item>

			 	<el-form-item>
				    <el-button type="primary" @click="handleLogin">登录</el-button>
			  	</el-form-item>

			</el-form>

		</div>
		

	</div>
</template>

<script>
// import Router from 'vue-router'
// import GETJSON from '../router/service'


export default {
	components:{
	// Button,Field
	},
	name: 'Login',
	data () {
		return {
			mobile: '',
			pwd: '',
			remember: false,
		}
	},
	mounted () {
		// 获取记录的名字和密码
		this.getName()
	},
	methods:{
		
		// 记录名字和密码
		setName () {
			console.log('记录名字')
			const data = {
				mobile: this.mobile,
				pwd: this.pwd
			}
			this.JCACHE.set('name', data)
		},

		// 获取名字和密码
		getName () {
			const data = this.JCACHE.get('name')
			console.log('获取名字和密码',data)
			if (data) {
				const { mobile, pwd } = data
				this.mobile = mobile
				this.pwd = pwd	
			}
		},

		// 登录
		handleLogin () {
			const { pwd, mobile, remember } = this
			if (mobile && pwd) {
				
				const param = {
					a: 'A'
				}
				this.GETJSON('Login', param, res => {
					if (res.ret) {
						const { uid, token } = res.data
						USER_INFO.uid = uid
						USER_INFO.token = token
						// 首页
						this.$router.push({ name : 'index' })
					} else {
						this.$dialog.toast({
							mes: res.mes,
							icon: 'none',
							timeout: 2000,
						})
					}
				})

				// 调到首页
				this.$router.push({ name : 'index' })
				// 记住密码
				if (remember) {
					this.setName()
				}
			} else {
				this.$dialog.toast({
					mes: '请输入账号和密码',
					icon: 'none',
					timeout: 2000,
				})
			}
		},



	},


}
</script>

<style scoped>
.login {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
	text-align: left;
}

.login img.bg {
	position: absolute;
	left: 0px;
	top: 0px;
	height: 100%;
	width: 100%;
	z-index: -1;
}
.login-form {
	width: 350px;
	margin: 0 auto;
	margin-top: 200px;
	background-color: #ffffff;
	border-radius: 10px;
	padding: 30px;
	z-index: 99;
}

</style>
