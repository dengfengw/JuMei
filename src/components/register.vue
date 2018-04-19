<template>
	<div class="login">
		<div class="login-type">
			<span @click="backRe()">&lt</span>
			<h1>登录</h1>
			<h1 @click="goRe()">注册</h1>
		</div>
		<div class="login-content">
			<h3>使用手机登录</h3>
			<p><input type="number" placeholder="请输入11位手机号" name=""/></p>
			<p><input type="password" placeholder="6-16位登录密码" name=""/></p>
			<p>登录</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	import router from  "../router";
	export default {

		data(){
			return {
				
			}
		},
		methods:{
			backRe(){
				router.push({path:"/my"});
			},
			goRe(){
				router.push({path:"/login"});
			}
		}
	}
</script>


<style lang="scss" scoped>	
.login{
	width: 100%;
	height: 100%;
	font-size: 0.16rem;
	opacity: .6;
	.login-type{
		display: flex;
		justify-content: space-between;
		padding: 0 0.2rem;
		align-items:center;
		height: 0.44rem;
		background: #fff;
		margin-bottom: 0.1rem;
		border-bottom: 0.02rem solid #F2F2F2;
		span{
			font-size: 0.3rem;
		}
		h1{
			font-weight: 500;
		}
	}
	.login-content{
		display: flex;
		justify-content: center;
		flex-direction: column;
		p,h3{
			width: 2.85rem;
			height: 0.36rem;
			display: flex;
			justify-content: center;
			margin: 0 auto;
			margin-bottom: 0.2rem;
		}
		h3{
			font-weight: 400;
		}
		input{
			width: 2.45rem;
			padding: 0 0.2rem;
			border: none;
			outline: none;
			background: #f5f5f5;
   			border-radius: 20px;
		}
		
		p:nth-of-type(3){
			border-radius: 0.2rem;
			background: #feb2c5;
			color: #fff;
			line-height:0.36rem;
		}
	}
}
</style>