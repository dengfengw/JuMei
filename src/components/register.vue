<template>
	<div class="login">
		<div class="login-type">
			<span @click="backRe()">&lt</span>
			<h1>注册</h1>
			<h1 @click="goRe()">登录</h1>
		</div>
		<div class="login-content">
			<h3>使用用户名注册</h3>
			<form action="/login" method="post">
				<p><input type="text" placeholder="请输入2-8位用户名" name="username" v-model="username"/></p>
				<b v-show="isShowname">由3-8位数字字母下划线组成，且不能以数字开头</b>
				<p><input type="text" placeholder="请输入验证码"  name="text" v-model="yz"/><a id="yz" @click="yanzheng">{{yznum}}</a></p>
				<b v-show="isShowyz">验证码错误</b>
				<p><input type="password" placeholder="6-16位登录密码" name="password" v-model="mypassword"/></span></p>
				<b v-show="isShowpass">由6-16位数字字母下划线组成</b>
			</form>
			<p class="zhuce" @click="zhuce">注册</p>
			<p class="words">点击注册，表示同意《聚美优品用户协议》</p>
		</div>
		<div class="tk" v-show="isShowtk">
			<span>注册成功</span>
			<a href="/login">确定</a>
		</div>
	</div>
	
</template>

<script type="text/javascript">
	import router from  "../router";
	import axios from "axios";
	export default {

		data(){
			return {
				username:"",
				mypassword:"",
				yz:"",
				yznum:"验证码",
				isShowname: false,
				isShowyz: false,
				isShowpass: false,
				isShowtk: false
			}
		},
		methods:{
			backRe(){
				router.push({path:"/my"});
			},
			goRe(){
				router.push({path:"/login"});
			},
			yanzheng(){
				var oYan = document.getElementById("yz");
				oYan.innerHTML = Math.floor(Math.random()*9000+1000);
				this.yznum = oYan.innerHTML;
			},
			zhuce(){
				var username= this.username;
				var mypassword = this.mypassword;
				var yz = this.yz;
				var yznum = this.yznum;
				//用户名由2-15位数字字母下划线组成,,且不能以数字开头
				var regname=/^[a-zA-Z_]\w{2,14}$/;
				//密码由2-15位数字字母下划线组成
				var regpass=/\w{6,16}$/;
				
				if(!username.match(regname)){
					this.isShowname = true;
				}
				else{
					this.isShowname = false;
				}
				if(yz != yznum){
					this.isShowyz = true;
				}
				else{
					this.isShowname = true;
				}
				if(!mypassword.match(regpass)){
					this.isShowpass = true;
				}
				else{
					this.isShowname = true;
				}
				
				if(username.match(regname) && mypassword.match(regpass) && yz==yznum){
					this.isShowtk = true;
					axios.post("/jumeiregister",{username,mypassword
					
					}).then(res=>{
						console.log(res);
					}).catch(err=>{
						console.log(err);
					})
				}

			}
			
		}
		
	}
</script>


<style lang="scss" scoped>	
.login{
	width: 100%;
	height: 100%;
	font-size: 0.16rem;
	position: absolute;
	z-index: 99;
	top:0;
	background: #fff;
	/*opacity: .6;*/
	.login-type{
		display: flex;
		justify-content: space-between;
		padding: 0 0.2rem;
		align-items:center;
		height: 0.36rem;
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
			width: 80%;
			height: 0.36rem;
			display: flex;
			justify-content: center;
			margin: 0 auto;
			/*margin-bottom: 0.2rem;*/
			font-size: 0.16rem;
		}
		h3{
			font-weight: 400;
			margin-top: 0.1rem;
		}
		input{
			width: 100%;
			padding: 0 0.2rem;
			border: none;
			outline: none;
			background: #f5f5f5;
   			border-radius: 0.2rem;
		}
		p:nth-of-type(2){
			margin-top: 0.16rem;
			input{
				width: 70%;
			}
			a{
				width: 30%;
				border-radius: 20px;
				border: 0.01rem solid red;
				display: block;
				margin-left: 0.1rem;
				text-align: center;
				line-height: 0.36rem;
			}	
		}
		p:nth-of-type(3),.zhuce{
			margin-top: 0.18rem;
		}
		b{
			margin-left: 12%;
			font-weight: 100;
			font-size: 0.14rem;
			color: red;
		}
		.zhuce{
			border-radius: 0.2rem;
			background: red;
			color: #fff;
			line-height:0.36rem;
			opacity: .7;
		}
		.words{
			font-size: 0.14rem;
			width: 3rem;
		}
	}
	.tk{
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
		span{
			margin-top: 65%;
			font-size: 0.5rem;
			color: #fff;
		}
		a{
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