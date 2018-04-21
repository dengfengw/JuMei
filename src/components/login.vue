<template>
	<div class="login">
		<div class="login-type">
			<span @click="backRe()">&lt</span>
			<h1>登录</h1>
			<h1 @click="goRe()">注册</h1>
		</div>
		<div class="login-content">
			<h3>使用用户名登录</h3>
			<form action="/register" method="post">
				<p><input type="text" placeholder="请输入用户名" name="username" v-model="username" /></p>
				<p><input type="password" placeholder="6-16位登录密码" name="password" v-model="mypassword" /></p>
			</form>
			<p class="remind" v-show="isShowre">用户名不存在或密码错误！</p>
			<p class="denglu" @click="denglu">登录</p>
		</div>
		<div class="tk" v-show="isShowtk">
			<span>登录成功</span>
			<a href="/my">确定</a>
		</div>
	</div>
</template>

<script type="text/javascript">
	import router from "../router";
	import axios from "axios";
	export default {

		data() {
			return {
				isShowre: false,
				username: "",
				mypassword: "",
				isShowtk: false
			}
		},
		methods: {
			backRe() {
				router.push({
					path: "/my"
				});
			},
			goRe() {
				router.push({
					path: "/register"
				});
			},
			denglu() {
				var username = this.username;
				var mypassword = this.mypassword;
				axios.post("/jumeilogin", {
					username,
					mypassword
				}).then(res => {
//					console.log(res.data)
					if(res.data == "no"){
						this.isShowre = true;
						console.log(res.data);
					}
					if(res.data == "yes") {
						this.isShowtk = true;
					}
				}).catch(err => {
//					this.isShowre = true;
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		width: 100%;
		height: 100%;
		font-size: 0.16rem;
		position: absolute;
		z-index: 99;
		top: 0;
		background: #fff;
		/*opacity: .6;*/
		.login-type {
			display: flex;
			justify-content: space-between;
			padding: 0 13%;
			align-items: center;
			height: 0.44rem;
			background: #fff;
			margin-bottom: 0.1rem;
			border-bottom: 0.02rem solid #F2F2F2;
			span {
				font-size: 0.3rem;
			}
			h1 {
				font-weight: 500;
			}
		}
		.login-content {
			display: flex;
			justify-content: center;
			flex-direction: column;
			p,
			h3 {
				width: 80%;
				height: 0.36rem;
				display: flex;
				justify-content: center;
				margin: 0 auto;
				margin-bottom: 0.2rem;
			}
			h3 {
				font-weight: 400;
				margin-top: 0.1rem;
			}
			input {
				width: 100%;
				padding: 0 0.2rem;
				border: none;
				outline: none;
				background: #f5f5f5;
				border-radius: 20px;
			}
			.remind {
				width: 80%;
				font-weight: 100;
				font-size: 0.14rem;
				color: red;
				margin-bottom: 0.1rem;
			}
			.denglu {
				border-radius: 0.2rem;
				background: red;
				opacity: 0.7;
				color: #fff;
				line-height: 0.36rem;
			}
		}
		.tk {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			background: #000;
			opacity: 0.8;
			border-radius: 0.1rem;
			margin: 0 auto;
			span {
				margin-top: 65%;
				font-size: 0.5rem;
				color: #fff;
			}
			a {
				background: red;
				color: #fff;
				text-decoration: none;
				padding: 0.06rem 0.1rem;
				font-size: 0.3rem;
				border-radius: 0.1rem;
				margin-top: 10%;
			}
		}
	}
</style>