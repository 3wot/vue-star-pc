<template>
	<div class="add-order">
		
		 <yd-layout>
	       <!-- 头 -->
			<yd-navbar slot="navbar" title="预报单" fontsize=".4rem" bgcolor="#5871f5" color="#ffffff">
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
			<yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>所有权人：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入所有权人姓名"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
		    <yd-cell-group>
		        <yd-cell-item>
		            <span slot="left"><span class="danger">* </span>房屋坐落：</span>
		            <yd-input slot="right" required :show-required-icon="false"  placeholder="请输入房屋地址"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>
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
		            <span slot="left"><span class="danger">* </span>房屋建筑面积：</span>
		            <yd-input type="number" slot="right" required :show-required-icon="false"  placeholder="请输入房屋建筑面积"></yd-input>
		        </yd-cell-item>
		    </yd-cell-group>

			<ImgUpload title="房产证照片" :arr="option2"></ImgUpload>  

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
			select1 : '住宅',
			option1 : ['无','住宅','别墅','商业','公寓','办公'],
			option2 : ['无','住宅','别墅','商业','公寓','办公'],
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
                    // 跳到首页
					this.$router.push({ name : 'index' })
                }
            });
		},
		// 完成
		finish () {
			// 跳到首页
			this.$router.push({ name : 'index' })
		},


	},


}
</script>

<style scoped>
.add-order {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}


</style>
