<template>
	<div class="top">
		<header>
			<a class="search">
				<img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" style="display: inline-block;">
				<span>搜索商品 分类 功效</span>
			</a>
			<slot></slot>
		</header>
		<div class="searchBar" id="searchBar">
			<ul @click="handleClick()" :class="searchBarFixed">
				<router-link to="/home/today" tag="li">
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
				<router-link to="/light" tag="li">
					<a href="#">
						<span>轻奢</span>
						<div></div>
					</a>
				</router-link>
			</ul>
		</div>

	</div>
</template>

<script type="text/javascript">
	export default {

		data(){
			return {
				searchBarFixed:""
			}
		},
		mounted(){
			 window.addEventListener('scroll', this.handleScroll)
		},
		methods:{
			handleClick(){
				this.$emit("event");
			},
			handleScroll () {
			 var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			 var offsetTop = document.querySelector('#searchBar').offsetTop
				if (scrollTop > offsetTop) {
				this.searchBarFixed = "true";
				} else {
				this.searchBarFixed = "false";
				}
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
	padding: 0 0.1rem;
	height: 0.45rem;
	display: flex;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	.search{
		margin: 0.05rem 0.2rem 0.05rem 0.1rem;
    color: #999;
    background: #f5f5f5;
    border-radius: 0.15rem;
    height: 0.3rem;
    line-height: 0.3rem;
    -webkit-box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
    box-shadow: inset 0 0.0625rem 0.125rem rgba(0,0,0,.05);
    font-size: 0.14rem;
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
.searchBar{
	ul{
		width: 100%;
		height: 0.45rem;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		border-bottom: 0.01rem solid #eee;
		a{
			text-decoration: none;
			font-size: 0.14rem;
			color: #666;
			div{
				margin-top: 0.01rem;
				height: 0.03rem;
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
	.true{
		position: fixed;
		top: 0;
		z-index: 2;
		background: #fff;
	}
}


</style>
