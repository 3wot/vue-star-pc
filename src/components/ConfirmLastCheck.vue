<template>
	<div class="confirm-last-check">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="产品终审结果确认" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="goBack">
					<yd-navbar-back-icon color="#ffffff"></yd-navbar-back-icon>
				</span>
			</yd-navbar>
			<!-- 脚 -->
			<div class="slot-bottom" slot="bottom">
				<yd-flexbox>

        	 		<yd-button class="bottom-btn" size="large">提交</yd-button>	
        	 		<yd-button class="bottom-btn" size="large" @click.native="finish">完成</yd-button>	

		        </yd-flexbox>
			</div>

			<!-- 内容 -->
			<yd-cell-group>
	            <yd-cell-item>
	                <span slot="left">操作人：</span>
	                <span slot="right">XXX</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">操作时间：</span>
	                <span slot="right">2018-10-01 13:30:30</span>
	            </yd-cell-item>
				<yd-cell-item>
	                <span slot="left">终审意见：</span>
	                <span slot="right">通过/拒绝</span>
	            </yd-cell-item>

	            <ImgUpload title="产品供应方批贷函：" :arr="arr1"></ImgUpload>

	            <yd-cell-item>
	                <span slot="left">批贷金额：</span>
	                <span slot="right">500000</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">批贷期限：</span>
	                <span slot="right">36个月</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">批贷利率：</span>
	                <span slot="right">5%</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">拒绝理由：</span>
	            </yd-cell-item>
	            <yd-cell-item>
		            <yd-textarea slot="right" v-model="str1"></yd-textarea>
		        </yd-cell-item>


	        </yd-cell-group>


	    </yd-layout>

	</div>
</template>

<script>
import ImgUpload from './ImgUpload'

export default {
	components:{
		ImgUpload
	},
	name: 'ConfirmFirstCheck',
	data () {
		return {
			arr1 : [],
			str1 : '我的拒绝理由',
			// 操作人
			// 操作时间
			// 终审意见
			// 产品供应方批贷函
			// 批贷金额
			// 批贷期限
			// 批贷利率
			// 拒绝理由
		}
	},
	mounted () {
		
	},
	methods:{
		// 跳到首页
		goBack() {
			this.$router.go(-1)
		},
		// 完成
		finish () {
			// 跳到首页
			this.$router.push({ name : 'opList' })
		},


	},


}
</script>

<style scoped>
.confirm-last-check {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.cv-img {
	width: 100%;
	height: auto;
	margin-bottom: .3rem;
}


</style>
