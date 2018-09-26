<template>
	<div class="set-up">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="立项" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
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
		        <yd-cell-item type="label">
		            <span slot="left">用途：</span>
		            <select slot="right" v-model="select1">
		               	<option v-for="item in option1">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

			<yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>申请贷款金额：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入申请贷款金额"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>申请贷款期限：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入申请贷款期限"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    
		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>借款用途：</span>
		            <select slot="right" v-model="select2">
		               	<option v-for="item in option2">{{item}}</option>
		            </select>
		        </yd-cell-item>
		        <yd-cell-item v-if="select2 == '其他'">
		            <yd-textarea slot="right" placeholder="请输入借款用途"></yd-textarea>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>利息还款来源：</span>
		            <select slot="right" v-model="select3">
		               	<option v-for="item in option3">{{item}}</option>
		            </select>
		        </yd-cell-item>
		        <yd-cell-item v-if="select3 == '其他'">
		            <yd-textarea slot="right" placeholder="请输入利息还款来源"></yd-textarea>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>本金还款来源：</span>
		            <select slot="right" v-model="select4">
		               	<option v-for="item in option4">{{item}}</option>
		            </select>
		        </yd-cell-item>
		        <yd-cell-item v-if="select4 == '其他'">
		            <yd-textarea slot="right" placeholder="请输入本金还款来源"></yd-textarea>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>共有情况：</span>
		            <select slot="right" v-model="select5">
		               	<option v-for="item in option5">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>抵押物现状：</span>
		            <select slot="right" v-model="select6">
		               	<option v-for="item in option6">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>抵押状况：</span>
		            <select slot="right" v-model="select7">
		               	<option v-for="item in option7">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>


		    <div v-if="select7=='已抵押'">

		    	<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>抵押机构：</span>
			            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入抵押机构"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

		    	<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>抵押金额：</span>
			            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入抵押金额"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

				<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>是否结清：</span>
			            <select slot="right" v-model="select8">
			               	<option v-for="item in option8">{{item}}</option>
			            </select>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>是否转单：</span>
			            <select slot="right" v-model="select9">
			               	<option v-for="item in option8">{{item}}</option>
			            </select>
			        </yd-cell-item>
			    </yd-cell-group>
		    	
		    </div>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>是否有公司：</span>
		            <select slot="right" v-model="select10">
		               	<option v-for="item in option8">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

		    <div v-if="select10 == '是'">

		    	<yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>企业统一社会信用代码：</span>
			            <yd-input slot="right" :show-required-icon="false"  placeholder="请输入企业统一社会信用代码"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>企业电话：</span>
			            <yd-input slot="right" :show-required-icon="false"  placeholder="请输入企业电话"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>企业法定代表人姓名：</span>
			            <yd-input slot="right" :show-required-icon="false"  placeholder="请输入企业法人姓名"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

			    <yd-cell-group>
			        <yd-cell-item>
			            <span slot="left"><span class="danger">* </span>企业法定代表人身份证号：：</span>
			            <yd-input slot="right" :show-required-icon="false"  placeholder="请输入企业法人身份证号"></yd-input>
			        </yd-cell-item>
			    </yd-cell-group>

				<ImgUpload title="公司营业执照副本" :arr="arr1"></ImgUpload>

				<ImgUpload title="企业章程" :arr="arr2"></ImgUpload>  			    

		    </div>

			<ImgUpload title="户口本" :arr="arr3"></ImgUpload>
			<ImgUpload title="婚姻证明材料" :arr="arr4"></ImgUpload>
			<ImgUpload title="银行流水" :arr="arr5"></ImgUpload>
			<ImgUpload title="征信报告" :arr="arr6"></ImgUpload>

			<yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>客户需求侧重：</span>
		            <select slot="right" v-model="select11">
		               	<option v-for="item in option9">{{item}}</option>
		            </select>
		        </yd-cell-item>
		    </yd-cell-group>

		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>销售经理立项建议：</span>
		        </yd-cell-item>
		         <yd-cell-item>
		            <yd-textarea slot="right" placeholder="请输入立项建议"></yd-textarea>
		        </yd-cell-item>
		    </yd-cell-group>

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
	name: 'SetUpProject',
	data () {
		return {
			select1 : '住宅',
			option1 : ['住宅','别墅','商业','公寓','办公'],

			select2 : '',
			option2 : ['买车','买房','公司经营周转','企业经营','其他'],

			select3 : '',
			option3 : ['工资收入','经营收入','企业应收账款','其他'],

			select4 : '',
			option4 : ['卖房款','企业应收账款','其他'],

			select5 : '单独所有',
			option5 : ['单独所有','共有'],

			select6 : '自住',
			option6 : ['自住','出租','空置'],

			select7 : '未抵押',
			option7 : ['已抵押','未抵押'],

			select8 : '否',
			select9 : '否',
			select10 : '否',
			option8 : ['是','否'],

			select11 : '效率优先',
			option9 : ['成本优先','效率优先','成数优先'],


			arr1 : [],

			arr2 : [],

			arr3 : [],
			arr4 : [],
			arr5 : [],
			arr6 : [],




		}

	},
	mounted () {
		
	},
	methods:{
		goBack() {
			this.$dialog.confirm({
                title: '提示',
                mes: '当前页面如有修改，将会丢失，你确定退出吗？',
                opts: () => {
                    // 跳到首页
					this.$router.push({ name : 'opList' })
                }
            });
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
.set-up {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}


</style>
