<template>
	<div class="add-data">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="补充资料" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
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
			<ImgUpload title="客户配偶身份证照片" :arr="arr1"></ImgUpload>
			<ImgUpload title="户口本照片" :arr="arr2"></ImgUpload>
			<ImgUpload title="婚姻证明材料照片" :arr="arr3"></ImgUpload>
			<ImgUpload title="房产证照片" :arr="arr4"></ImgUpload>
			<ImgUpload title="房屋租赁合同照片" :arr="arr5"></ImgUpload>
			<ImgUpload title="原始购房合同照片" :arr="arr6"></ImgUpload>
			<ImgUpload title="契税发票" :arr="arr7"></ImgUpload>
			<ImgUpload title="上家借款合同" :arr="arr8"></ImgUpload>
			<ImgUpload title="上家结清证明" :arr="arr9"></ImgUpload>
			<ImgUpload title="银行流水" :arr="arr10"></ImgUpload>
			<ImgUpload title="征信报告" :arr="arr11"></ImgUpload>
			<ImgUpload title="公司营业执照副本" :arr="arr12"></ImgUpload>
			<ImgUpload title="企业征信" :arr="arr13"></ImgUpload>
			<ImgUpload title="对公流水" :arr="arr14"></ImgUpload>
			<ImgUpload title="购销合同" :arr="arr15"></ImgUpload>
			<ImgUpload title="担保人财产共有人同意提供担保的书面文件" :arr="arr16"></ImgUpload>
			<ImgUpload title="还款卡" :arr="arr17"></ImgUpload>
			<ImgUpload title="实控人证明" :arr="arr18"></ImgUpload>
			<ImgUpload title="企业财务报表" :arr="arr19"></ImgUpload>
			<ImgUpload title="诉讼结案证明" :arr="arr20"></ImgUpload>
			<ImgUpload title="其它" :arr="arr21"></ImgUpload>

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
	name: 'AddData',
	data () {
		return {
			arr1 : [], // 客户配偶身份证照片
			arr2 : [], // 户口本照片
			arr3 : [], // 婚姻证明材料照片
			arr4 : [], // 房产证照片
			arr5 : [], // 房屋租赁合同照片
			arr6 : [], // 原始购房合同照片
			arr7 : [], // 契税发票
			arr8 : [], // 上家借款合同
			arr9 : [], // 上家结清证明
			arr10 : [], // 银行流水
			arr11 : [], // 征信报告
			arr12 : [], // 公司营业执照副本
			arr13 : [], // 企业征信
			arr14 : [], // 对公流水
			arr15 : [], // 购销合同
			arr16 : [], // 担保人财产共有人同意提供担保的书面文件
			arr17 : [], // 还款卡
			arr18 : [], // 实控人证明
			arr19 : [], // 企业财务报表
			arr20 : [], // 诉讼结案证明
			arr21 : [], // 其它

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
.add-data {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}


</style>
