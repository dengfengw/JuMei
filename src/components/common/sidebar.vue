<template>
	<transition name="bounce">
	<aside>
		<div class="side">
		<header>
			<a class="search">
				<img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" style="display: inline-block;">
				<span>搜索商品 分类 功效</span>
			</a>
			<slot></slot>
		</header>
		<ul @click="handleClick()">
			<li v-for="(data,index) in datalist">
				{{data.name}}
				<i class="iconfont icon-moreunfold"></i>
			</li>
		</ul>
	</div>
	</aside>
	</transition>
</template>

<script type="text/javascript">
import axios from "axios";
	export default {

		data(){
			return {
				datalist:[],
				datalist1:[]
			}
		},
		methods:{
			handleClick(){
				//console.log();
			}
		},
		mounted(){
		 axios.get("/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json"
	 ).then(res=>{
		 			//console.log(res.data.data);
					//console.log(res.data.data[0].sub_categories);
					this.datalist=res.data.data;
					this.datalist1=res.data.data[0].sub_categories
		 		})
		 }
	}
</script>


<style type="text/css" lang="scss" scoped>
	li{
		list-style: none;
	}
	aside{
		font-size: 0.14rem;
		width: 80%;
		height: 100%;
		position: fixed;
		z-index: 5;
		top: 0;
		right: 0;
		background: #fff;
		border: 1px solid #f5f5f5;
		header{
			padding: 0 0.1rem;
			height: 0.45rem;
			display: flex;
			align-items: center;
			width: 100%;
			box-sizing: border-box;
			border-bottom: 1px solid #f5f5f5;
			.search{
				margin: 0.05rem 0.2rem 0.05rem 0.1rem;
		    color: #999;
		    background: #f5f5f5;
		    border-radius: 0.15rem;
		    height: 0.25rem;
		    line-height: 0.25rem;
		    -webkit-box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
		    box-shadow: inset 0 0.0625rem 0.125rem rgba(0,0,0,.05);
		    font-size: 0.12rem;
		    text-align: center;
				flex: 1;
				img{
					width: 0.14rem;
				}
			}
			.right{
				height: 0.18rem;
				img{
					width: 0.24rem;
				}
			}
		}
		ul{
			overflow: auto;
			li{
				height: 0.4rem;
				display: flex;
				padding: 0 0.1rem;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #f5f5f5;
			}
		}
	}

	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	.bounce-leave-active {
		animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
		0% {
			transform:translateX(100%);
		}
		100% {
			transform:translateX(0px);
		}
	}
</style>
