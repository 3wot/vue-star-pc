<template>
	
	<div class="upload-img">



		<div class="upload-content">
			<div v-for="(item,index) in arrc" :key="index" class="upload-item">
				<div class="dele-icon" @click="dele(index)"><i class="el-icon-close"></i></div>
				<img :src="item" @click="showBig(index)">
				<!-- {{item}} -->

			</div>

			<div v-if="showBigTemp" :style="styleObj" class="upload-img-out" @click="hideBig">
				<a :href="showBigSrc" target="_blank" class="big-a">新页面打开图片</a>
			</div>

			<div v-if="arr.length < maxNum" class="upload-item">
				<el-upload
					:action="uploadUrl"
					:multiple="true"
					:limit="200"
					:show-file-list="false"
					:auto-upload="true"
					:http-request="fnUploadRequest"
					
					>
					<img src="../../static/plus.png" alt="">
				</el-upload>
			<!-- <img src="../../static/plus.png" alt=""> -->
			</div>

			<div style="clear: both;"></div>

		</div>

	</div>

</template>

<script>
import $ from 'jquery'
import loadingUrl from '@/assets/loading.gif'
// import OSS from 'ali-oss'
let uploadObj = {}

export default {
	components:{
		
	},
	name: 'ImgUpload',
	props: ['arr','arrc','max'],
	data () {
		return {
			loadingUrl: loadingUrl,
			maxNum: 999,
			showBigTemp: false,
			showBigSrc: '',
			styleObj: {
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center',
			},
			// uploadUrl: 'http://www.windant.com:9005/UpLoadFile.ashx',
			uploadUrl: '/UpLoadFile.ashx',
		}
	},
	mounted () {
		if (this.max) {
			this.maxNum = this.max
		} else {
			this.maxNum = 999
		}

		UPLOAD_NUM = 0
		uploadObj = {}
	},
	methods:{
		// 点击上传
		upload () {
			// this.add('http://zx.youzhu.com/uploadfile/2017/0326/20170326104024702.jpg')
			// console.log(this.files)
		},
		
      	fnUploadRequest (option) {
      		const that = this
      		

      	
      		let fd = new FormData()
      		const file = option.file
      		// const { uid, token } = USER_INFO
      		const uid = window.sessionStorage.getItem('uid')
        	const token = window.sessionStorage.getItem('token')
      		const OrderId = window.sessionStorage.getItem('OrderId') + ""
      		const name = this.randomStr(5)
      		fd.append('uid', uid)
      		fd.append('token', token)
      		fd.append('OrderId', OrderId)
      		fd.append(name, file)
      		if (uid && token && OrderId) {

      		} else {
      			that.warn('您没有登录,请您重新登录')
      			return
      		}
      		// 添加loading
      		const length = that.arr.length
      		that.arr.push(loadingUrl)
      		that.arrc.push(loadingUrl)

      		UPLOAD_NUM = UPLOAD_NUM + 1
      		uploadObj[length] = true // 表示当前位置的图片正在上传

      		$.ajax({
		        type: "POST",
		        // url: 'http://www.windant.com:9005/UpLoadFile.ashx',
		        url: '/UpLoadFile.ashx',
		        contentType: false,
		        processData:false,
            	mimeType:"multipart/form-data",
		        data: fd,
		        dataType: "json",
		        success: function (res) {
		            if (res.ret == 'ok') {
		            	if (res.data && res.data.length) {
		            		res.data.map(item => {
		            			that.add(item.OSSFileUrl,item.C_OSSFileUrl,length)
		            		})
		            	}
		            } else {
		            	that.warn(file.name + "上传失败:" + res.msg)
		            	that.arr.splice(length,1)
						if (that.arrc) {
							that.arrc.splice(length,1)	
						}
		            }
		            if (uploadObj[length]) { // 如果没有中途放弃
		            	UPLOAD_NUM = UPLOAD_NUM - 1
		            	uploadObj[length] = false
		            }
		            
		        },
		        error: function (err) {
		        	if (uploadObj[length]) { // 如果没有中途放弃
		            	UPLOAD_NUM = UPLOAD_NUM - 1
		            	uploadObj[length] = false
		            }
		            that.warn(err)
		            that.arr.splice(length,1)
					if (that.arrc) {
						that.arrc.splice(length,1)	
					}
		        }
		    });
			
		},
		randomStr (len) {
			len = len || 32;
			var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
			var maxPos = chars.length;
			var pwd = '';
			for (let i = 0; i < len; i++) {
				pwd += chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return pwd;
		},
		// 添加
		add (url,urlc,index) {
			if (uploadObj[index]) {
				if (index < this.arr.length) { // 没问题
					this.arr.splice(index,1,url)
					if (this.arrc) {
						this.arrc.splice(index,1,urlc)
					}	
				} else { // 出现失败
					let idxTemp
					this.arr.map((item,idx) => {
						if (item == loadingUrl) {
							idxTemp = idx
						}
					})
					this.arr.splice(idxTemp,1,url)
					if (this.arrc) {
						this.arrc.splice(idxTemp,1,urlc)
					}
				}
			}
			
		},
		// 删除图片
		dele(idx) {
			const OSSFileUrl = this.arr[idx]
			if (OSSFileUrl == loadingUrl) { // 如果删除的是，正在上传的
				UPLOAD_NUM = UPLOAD_NUM - 1
				uploadObj[idx] = false // 放弃上传
			}
			this.arr.splice(idx,1)
			if (this.arrc) {
				this.arrc.splice(idx,1)	
			}
			
			let fd = new FormData()
      		// const { uid, token } = USER_INFO
      		const uid = window.sessionStorage.getItem('uid')
        	const token = window.sessionStorage.getItem('token')
      		fd.append('uid', uid)
      		fd.append('token', token)
      		fd.append('OSSFileUrl',OSSFileUrl)
			$.ajax({
		        type: "POST",
		        // url: 'http://www.windant.com:9005/DeleteFile.ashx',
		        url: '/DeleteFile.ashx',
		       	contentType: false,
		        processData:false,
            	mimeType:"multipart/form-data",
		        data: fd,
		        dataType: "json",
		        success: function (res) {
		            if (res.ret == 'ok') {
						console.log('删除图片成功')
					} else {
						console.log('删除图片失败')
					}
		        },
		        error: function (err) {
		           	console.log('删除图片失败:',err)
		        }
		    });
		},
		// 显示大图
		showBig (idx) {
			if (idx>=0 && idx<this.arr.length) {
				const src = this.arr[idx]
				this.styleObj.backgroundImage = 'url('+src+')'
				this.showBigSrc = src
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
.upload-img-out {
	background: rgba(0,0,0,0.7);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
}
</style>