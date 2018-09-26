<template>
	<div class="confirm-valuation">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="估值确认" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
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
	                <span slot="left">估值结果：</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <img class="cv-img" slot="right" src="../../static/mate1-1.png">
	            </yd-cell-item>
	            <yd-cell-item>
	                <img class="cv-img" slot="right" src="../../static/mate1-1.png">
	            </yd-cell-item>
<!-- 	            <yd-cell-item>
	                <img class="cv-img" slot="right" src="../../static/mate1-1.png">
	            </yd-cell-item> -->
	        </yd-cell-group>


	    </yd-layout>

	</div>
</template>

<script>

export default {
	components:{

	},
	name: 'ConfirmValuation',
	data () {
		return {
			
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
.confirm-valuation {
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
