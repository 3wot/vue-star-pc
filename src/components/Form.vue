<template>
	<div class="index">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="正式报单" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
				<span slot="left" @click="goBack">
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
			<yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>借款人姓名：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入借款人姓名"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>借款人身份证号：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入借款人身份证号"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>借款人电话：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入借款人电话"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item type="label">
		            <span slot="left"><span class="danger">* </span>婚姻状况：</span>
		            <select slot="right" required v-model="select1">
		               	<option v-for="item in option1">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>企业名称：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入企业名称"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    
		    <div v-if="select1 == '已婚'">

		    	<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>配偶姓名：</span>
			            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入配偶姓名"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>配偶身份证号：</span>
			            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入配偶身份证号"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>配偶电话：</span>
			            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入配偶电话"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

		    </div>
			
	    </yd-layout>



	</div>
</template>

<script>
import URLS from '../router/link'
import ImgUpload from './ImgUpload'

export default {
	components:{
		ImgUpload
	// Button,Field
	},
	name: 'AddOrder',
	data () {
		return {
			select1: '',
			option1: ['未婚','已婚','离异','丧偶'],
		}
	},
	mounted () {
		
	},
	methods:{
		// 回退
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
.index {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}


</style>
