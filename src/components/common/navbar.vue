<template>
	<div class="top">
		<header>
			<a class="search">
				<img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png">
				<span>搜索商品 分类 功效</span>
			</a>
			<span class="right">
				<img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png">
			</span>
		</header>
		<ul class="navlist" @click="handleClick()">
			<router-link to="/home" tag="li">
				<a href="#">
					<span>首页</span>
					<div class="line"></div>
				</a>
			</router-link>
			<router-link to="/speed" tag="li">
				<a href="#">
					<span>极速免税店</span>
					<div></div>
				</a>
			</router-link>
			<router-link to="/mom" tag="li">
				<a href="#">
					<span>母婴</span>
					<div></div>
				</a>
			</router-link>
			<router-link to="" tag="li">
				<a href="#">
					<span>轻奢</span>
					<div></div>
				</a>
			</router-link>
		</ul>
	</div>
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
				console.log(event);
			}
		}
	}
</script>


<style type="text/css" lang="scss" scoped>
body,p,header,ul,li{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
header{
	padding: 0 10px;
	height: 45px;
	display: flex;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	.search{
		margin: 5px 20px 5px 10px;
    color: #999;
    background: #f5f5f5;
    border-radius: 15px;
    height: 30px;
    line-height: 30px;
    -webkit-box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
    box-shadow: inset 0 0.0625rem 0.125rem rgba(0,0,0,.05);
    font-size: 14px;
    text-align: center;
		flex: 1;
		img{
			width: 14px;
		}
	}
	.right{
		height: 18px;
		img{
			width: 24px;
		}
	}
}
.navlist{
	width: 100%;
	height: 45px;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	border-bottom: 1px solid #eee;
	a{
		text-decoration: none;
		font-size: 14px;
		color: #666;
		div{
			margin-top: 10px;
			height: 3px;
		}
	}
	.router-link-exact-active{
		a{
			color: #fe4070;

			div{
				background: #fe4070;
			}
		}
	}
}

</style>
