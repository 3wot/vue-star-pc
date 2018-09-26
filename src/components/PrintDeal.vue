<template>
	<div class="print-deal">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="打印合同" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="gotoIndex">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>

			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>

        	 		<yd-button class="bottom-btn" size="large">提交</yd-button>	
        	 		<yd-button class="bottom-btn" size="large" @click.native="finish">完成</yd-button>	

		        </yd-flexbox>
			</div>

			<!-- 内容 -->
			<ImgUpload title="合同照片" :arr="arr1"></ImgUpload>
			

	    </yd-layout>



	</div>
</template>

<script>
import URLS from '../router/link'
import ImgUpload from './ImgUpload'

export default {
	components:{
		ImgUpload
	},
	name: 'PrintDeal',
	data () {
		return {
			arr1 : [],
		}
	},
	mounted () {
		
	},
	methods:{
		gotoIndex() {
			this.$dialog.confirm({
                title: '提示',
                mes: '当前页面如有修改，将会丢失，你确定退出吗？',
                opts: () => {
                    arr1 : [], // 跳到首页
					this.$router.push({ name : 'opList' })
                }
            });
		},
		finish () {
			arr1 : [], // 跳到首页
			this.$router.push({ name : 'opList' })
		},


	},


}
</script>

<style scoped>
.print-deal {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}


</style>
