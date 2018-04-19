<template>
	<footer>
		<ul @click="handleClick()">
			<router-link to="/home" tag="li">
				<i class="iconfont icon-store"></i>
				<p>首页</p>
			</router-link>
			<router-link to="/group" tag="li">
				<i class="iconfont icon-smile"></i>
				<p>拼团</p>
			</router-link>
			<router-link to="/car" tag="li">
				<i class="iconfont icon-bags"></i>
				<p>购物车</p>
			</router-link>
			<slot></slot>
			<router-link to="/my" tag="li" @click="show=false">
				<i class="iconfont icon-account"></i>
				<p>我的</p>
			</router-link>

		</ul>
	</footer>
</template>

<script type="text/javascript">
	export default {

		data(){
			return {

			}
		},
		methods:{
			handleClick(){
				this.$emit("event");
			}
		}
	}
</script>


<style type="text/css" lang="scss" scoped>
li{
	list-style: none;
}
footer{
	background: #fff;
	font-size: 0.14rem;
	position: fixed;
	z-index: 1;
	bottom: 0;
	height: 0.5rem;
	width: 100%;
	border-top: 1px solid rgb(238, 238, 238);
	ul{
		height: 0.5rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		li{
			text-align: center;
			a{
				text-decoration: none;
				color: #666;
			}
		}
		.router-link-exact-active{
			color: #fe4070;
		}
	}
}

</style>
