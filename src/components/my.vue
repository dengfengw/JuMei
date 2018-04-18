<template>
	<div class="box">
		<div class="head">
			<div class="head-title">
				<i class="iconfont icon-back"></i>
				<h3>
					{{name}}聚美	
				</h3>
				<img src = "../assets/home.png" @click="backHome()"/>
			</div>
			<div class="head-user">
				<img src = "../assets/man.png"/>
				<p>
					<a @click="login()">注册</a>
					<a @click="register()">登录</a>
				</p>
			</div>
		</div>
		<div class="block-title">
			<a><i class="iconfont icon-text"></i><span>我的订单</span></a>
			<a><span>查看我的全部订单</span><i class="iconfont icon-more"></i></a>
		</div>
		<div class="block-item">
			<a><i class="iconfont icon-rejectedorder"></i><span>待付款</span></a>
			<a><i class="iconfont icon-imagetext"></i><span>待收货</span></a>
			<a><i class="iconfont icon-email"></i><span>待评价</span></a>
			<a><i class="iconfont icon-agriculture"></i><span>退货/退款</span></a>
		</div>
		<div class="mymoney">
			<a><i class="iconfont icon-jifen"></i><span>总资产</span></a>
		</div>
		<div class="money-type">
			<a>现金券</a>
			<a>红包</a>
			<a>聚美余额</a>
			<a>礼品卡</a>
		</div>
		<div class="my-list">
			<a><span><i class="iconfont icon-service"></i>售后服务</span><span>&gt</span></a>
			<a><span><i class="iconfont icon-copy"></i>意见反馈</span><span>&gt</span></a>
			<a><span><i class="iconfont icon-machinery"></i>收货地址</span><span>&gt</span></a>
			<a><span><i class="iconfont icon-refresh"></i>退出登录</span><span>&gt</span></a>
			<a><span><i class="iconfont icon-phone"></i>400-123-8888</span><span>&gt</span></a>
		</div>
		<div class="my-foot">
			<p>客服热线400-123-8888(8:00-22:00)</p>
			<p>拨打前请记录您的UID 0</p>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import router from  "../router";
	export default {

		data(){
			return {
				name: "我的"
			}
		},
		methods:{
			backHome(){
				router.push({path:"/home"});
			},
			login(){
				router.push({path:"/login"});
			},
			register(){
				router.push({path:"/register"});
			}
		}
	}
</script>


<style lang="scss" scoped>
.box{
	width: 100%;
	height: 100%;
	background: #F2F2F2;
	.head{
		width: 100%;
		height: 1.7rem;
		font-size: 0.2rem;
		background: linear-gradient(-204deg,#FD465F 0,#FC5E9F 100%);
		.head-title{
			width:100%;
			display: flex;
			justify-content: space-around;
			align-items:center;
			font-size: 0.2rem;
			height: 0.5rem;
			background: transparent;
			line-height: 0.5rem;
			overflow: hidden;
			color: #fff;
			h3,img,i{
				float: left;
			}
			i{
				width: 0.5rem;
				height: 0.5rem;
				display: block;
			    font-size: 0.3rem;
			}
			img{
				width: 0.3rem;
				height: 0.3rem;
			}
			
		}
		.head-user{
			display: flex;
			flex-direction: column;
			text-align: center;
			color: #fff;
			margin-top: 0.1rem;
			img{
				width: 0.6rem;
				height: 0.6rem;
				margin: 0 auto;
			}
			p{
				margin-top: 0.1rem;
			}
			a{
				font-weight: 700;
				display: inline-block;
				width: 0.95rem;
			}
			a:nth-of-type(1){
				border-right: 0.02rem solid #fff;
			}
		}
	}

	.block-title{
		display: flex;
		justify-content: space-between;
		align-items:center;
		width: 100%;
		height: 0.35rem;
		margin: 0.1rem 0;
		background: #fff;
		a{
			display: block;
			height: 0.35rem;
			display: flex;
			align-items:center;
			font-size: 0.16rem;
		}
		a:nth-of-type(1){
			margin-left: 0.2rem;
		}
		i{
			font-size: 0.2rem;
		}
		i:nth-of-type(1){
			margin-right: 0.1rem;
		}
		i:nth-of-type(2){
			margin-left: 0.1rem;
		}
	}
	.block-item{
		height: 0.7rem;
		background: #fff;
		display: flex;
		justify-content: space-around;
		align-items:center;
		margin-bottom: 0.1rem;
		a{
			font-size: 0.16rem;
			display: flex;
			justify-content: space-around;
			align-items:center;
			flex-direction: column;
		}
		i{
			font-size: 0.2rem;
		}
	}
	.mymoney{
		display: flex;
		justify-content: space-between;
		align-items:center;
		font-size: 0.16rem;
		height: 0.35rem;
		background: #fff;
		padding-left: 0.2rem;
		span{
			margin-left: 0.1rem;
		}
		i{
			font-size: 0.2rem;
		}
	}	
	.money-type{
		display: flex;
		justify-content: space-around;
		align-items:center;
		font-size: 0.16rem;
		margin: 0.03rem 0 0.1rem 0;
		background: #fff;
		height: 0.41rem;
		i{
			font-size: 0.2rem;
		}
	}
	.my-list{
		font-size: 0.16rem;
		display: flex;
		flex-direction: column;
		a{
			display: flex;
			justify-content: space-between;
			align-items:center;
			height: 0.35rem;
			background: #fff;
			margin-bottom: 0.03rem;	
			padding: 0 0.2rem;	
		}
		i{
			margin-right: 0.1rem;
			font-size: 0.2rem;
		}
			span:nth-of-type(2S){
			font-size: 0.2rem;
		}
	}
	.my-foot{
		display: flex;
		flex-direction: column;
		font-size: 0.16rem;
		padding: 0.1rem 0 0.1rem 0.2rem;
		color:#999;
	}
}

</style>