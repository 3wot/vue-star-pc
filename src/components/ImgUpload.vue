<template>
	
<div class="upload-img">
 	
 	

	<div class="upload-content">
		<div v-for="(item,index) in arrc" :key="index" class="upload-item">
			<div class="dele-icon" @click="dele(index)"><i class="el-icon-close"></i></div>
			<img :src="item" @click="showBig(index)">
			<!-- {{item}} -->

		</div>

		<div v-if="showBigTemp" :style="styleObj" class="upload-img-outer" @click="hideBig">
		</div>
		
		<div v-if="arr.length < maxNum" class="upload-item">
			<!-- <el-upload
			 	action="http://localhost:57570/UploadFile.ashx"
				:multiple="true"
				:limit="10"
				:show-file-list="false"
				:
				
				
				>
				
			</el-upload> -->
			<el-upload
				:auto-upload="false"
				:action="uploadUrl"
				:on-success="uploadSuccess"
				:data="data_extra"
				:headers="uploadHeaders"
				:http-request="uploadReq"
				multiple>
				<img src="../../static/plus.png" alt="">
			</el-upload>
			
		</div>

		<div style="clear: both;"></div>

	</div>

</div>
	
</template>

<script>
// import Router from 'vue-router'
import $ from 'jquery'
import OSS from 'ali-oss'

export default {
	components:{
		
	},
	name: 'ImgUpload',
	props: ['arr','arrc','max'],
	data () {
		return {
			maxNum: 999,
			showBigTemp: false,
			styleObj: {
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center',
			},

			uploadUrl: 'http://39.106.17.212:9005/UploadFile.ashx',
			uploadHeaders: {
	       		uthorization: '',
	      	},

		}
	},
	mounted () {
		if (this.max) {
			this.maxNum = this.max
		} else {
			this.maxNum = 999
		}
	},
	methods:{
		// 点击上传
		upload () {
			this.add('http://zx.youzhu.com/uploadfile/2017/0326/20170326104024702.jpg')
			// console.log(this.files)
		},

		uploadSuccess (res, file, fileList) {
			console.log('AAAAA')
			console.log(res)
			console.log(file)
			console.log(fileList)
		},

		uploadError (err, file, fileList) {
			console.log('BBBBB')
			console.log(err)
			console.log(file)
			console.log(fileList)
		},

		uploadReq (option) {
			
	        let ossData = JSON.parse(ret.data.data)
	        let relativePath = ossData.relativePath
	        let client = new OSS.Wrapper({
				policy: ossData.policy,
				accessKeyId: ossData.accessid,
				accessKeySecret: ossData.accesssecret,
				bucket: ossData.bucket,
				signature: ossData.signature
	        })
	        let file = option.file
	        const point = file.name.lastIndexOf('.')
	        let suffix = file.name.substr(point)
	        let fileName = file.name.substr(0, point)
	        let date = vm.$moment().format('YYYYMMDDHHmm')
	        let fileNames = `${fileName}_${date}${suffix}`
	        // 分片上传文件
	        ret = await client.multipartUpload(relativePath + fileNames, file, {
	          progress: async function (p) {
	            let e = {}
	            e.percent = p * 100
	            option.onProgress(e)
	          }
	        })
	        console.log(ret)
	        if (ret.res.statusCode === 200) {
	          option.onSuccess(ret)
	          return ret
	        } else {
	          vm.disabled = false
	          option.onError('上传失败')
	        }
		},

		fileChanged (file) {
			//这里是重点，将文件转化为formdata数据上传
	        let fd = new FormData()
	        fd.append('aaa', file)
	        console.log(this.$refs.file.files)
	        const list = this.$refs.file.files
			const param = {
				uid: USER_INFO.uid,
				token: USER_INFO.token,
				OrderId: 1,
			}
			for (let i = 0; i < list.length; i++) {
				const key = new Date().getTime()
               	param[key] = list[i]
            }
			
			const url = ""
			console.log(param)
	       	$.post({
		        type: "POST",
		        url: url,
		        data: JSON.stringify(param),
		        success: function (res) {
		           	console.log('AAAAA')
					console.log(res)
		        },
		        error: function (err) {
	            	console.log('BBBBBB')
					console.log(err)
		        }

		    });
	  
		},

		// 添加
		add (url) {
			this.arr.push(url)
			if (this.arrc) {
				this.arrc.push(url)
			}
		},

		// 删除图片
		dele(idx) {
			this.arr.splice(idx,1)
			if (this.arrc) {
				this.arrc.splice(idx,1)	
			}
		},

		// 显示大图
		showBig (idx) {
			if (idx>=0 && idx<this.arr.length) {
				const src = this.arr[idx]
				this.styleObj.backgroundImage = 'url('+src+')'
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
