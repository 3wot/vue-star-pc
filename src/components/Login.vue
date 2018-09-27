<template>
	<div class="login">

		<img class="bg" src="../../static/login.jpg">

		<div class="login-form">
			
			<el-form :model="loginForm" :rules="rules" label-width="90px" label-position="left">
				<el-form-item label="账号" prop="mobile">
					<el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pwd">
					<el-input type="password" placeholder="请输入密码" v-model="loginForm.pwd"></el-input>
				</el-form-item>

				<el-form-item label="记住密码">
				    <el-switch
					  	v-model="loginForm.remember"
					  	active-color="#13ce66"
					  	inactive-color="#aaaaaa">
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
			loginForm : {
				mobile: '',
				pwd: '',
				remember: false,	
			},
			

			rules : {
				mobile : [
				 	{ required: true, message: '请输入手机号', trigger: 'blur' },
				],
				pwd : [
				 	{ required: true, message: '请输入密码', trigger: 'blur' }
				],
			},
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
				mobile: this.loginForm.mobile,
				pwd: this.loginForm.pwd
			}
			this.JCACHE.set('name', data)
		},

		// 获取名字和密码
		getName () {
			const data = this.JCACHE.get('name')
			console.log('获取名字和密码',data)
			if (data) {
				const { mobile, pwd } = data
				this.loginForm.mobile = mobile
				this.loginForm.pwd = pwd	
			}
		},

		// 登录
		handleLogin () {
			const { pwd, mobile, remember } = this.loginForm
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
						this.$message({
				          	message: res.mes,
				          	type: 'warning'
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
				this.$message({
		          	message: '请输入手机号和密码',
		          	type: 'warning',
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
