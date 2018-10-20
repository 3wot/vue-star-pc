# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

沟通记录：

--------------------------

<!-- 预报单页面：提交-》保存，完成-》提交 -->
<!-- 保存和提交按钮风格进行设计 -->
估值确认页面有两个按钮，确认和拒绝，有备注输入框
<!-- 初审确认页面估值结果改成初审报告 -->
<!-- 产品匹配确认页面估值结果改成产品匹配结果 -->
<!-- 补充资料只有一个提交按钮，补充资料出现的选项由客服人员后台选择控制 -->
<!-- 产品终审页面批贷函只展示，提交完成按钮改成确认和拒绝 -->
<!-- 操作列表页面将查看资料和补充资料全局按钮放在页面底部fixed -->
在产品方放款页面后加入提交收款凭证页面（销售操作），产品放款页面现场照片删除

==前端
<!-- 预报单只有一个完成按钮 -->
==后端

当前操作null
房屋估值确认页面参数HouseValuationConfirmDateTime-》HouseValuationDateTime
房屋估值页面三个接口，上传估值报告和完成估值操作合并成一个接口
pc端联系产品方补充资料按钮点击之后页面：
接口1：获取所有所有补充资料备选项
接口2：提交勾选，备注
接口3：是否可以点击补充资料




10-19
结案做成全局按钮加上结案原因（List：房龄超龄，年龄超龄，职业）？待定
初审和二审加入补充材料循环
风控首页加销售姓名字段
<!-- 估值页面空白区显示图片大图 -->
估值生成表格建成年代改成房龄
初审表格去掉“公安不良行为”
二审页面四个输入框放在表格里
风控，客服，所有页面里面加全局按钮，查看所有材料
产品匹配页面去掉立项报告
产品匹配显示产品要素
产品匹配页面显示所有产品，客户需求侧重参数展示出来
<!-- 所有有缩略图页面都加上显示大图功能 -->



--------------------------

<!-- 1.销售是否可以一直点击进入补充资料页面 -->
<!-- 2.获取所有的操作列表，接口不见了？是不要了吗？ 不要了 -->
<!-- 3.当前用户的角色，登录接口需要返回，方便对操作列表的能否点击控制 已经添加-->



FE参数疑问？

<!-- 1.	CompleteConfirmHouseValuation(完成房屋估值报告确认操作)   入参OperationRecordId，从哪里取？ 操作列表返回 done -->

<!-- 2.	正式立项页面，execl表格中参数 done

	新增加的7各参数

	客户身份证照片
	客户户口本照片
	客户婚姻证明材料照片
	客户征信报告照片
	配偶身份证照片
	配偶征信报告照片
	配偶户口本照片

	接口中不一致，接口中缺少“配偶征信”，增加“配偶婚姻证明材料” -->

<!-- 3.	初审确认页面需要备注？接口中有 -->
<!-- 4.	立项页面，接口中多了，婚姻证明材料 和 征信报告， 
	立项去掉户口本，婚姻，征信 -->
	<!-- 去掉“用途” -->
	<!-- 增加接口，获取“是否有公司” -->

<!-- 4.	产品匹配页面，接口改变, -->
<!-- 5.  产品匹配确认，展示改变 -->

6.	<!-- 终审结果确认页面，备注？
	缺少拒绝理由字段，如何获取 -->


需要添加的接口：
<!-- 1. 控制销售，进入补充资料页面
2. 立项页面，添加接口，获取“是否有公司” -->
<!-- 3. 获取全部资料 -->
<!-- 4. 获取补充资料全部选项
5. 获取补充资料已选选项
6. 客服提交补充资料
7. 销售提交补充资料 -->




检查一遍

1. login ok
2. index 
		<!-- this.orderList = res.data 注释掉了 -->
		<!-- 备用数据， -->
		<!-- const hid = order.HouseId || 222 房屋id默认的222 -->
3. AddOrder ok
4. OpList 
		<!-- 去掉底色不同 -->
		备用数据
		<!-- // this.opList = res.data 注释掉了 -->
5. confirmValuation ok
6. form  ok
7. confirmFirstCheck  ok
8. setupproject ok
9. confirmMatch ok
10.confirmLastCheck ok
11.sendDeal ok

12. 查看资料
13. 补充资料
14. 缩略图替换
