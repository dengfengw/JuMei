<template>
	<footer>
		<ul @click="handleClick()" id="list">
			<li v-for="data in footlist" @click="hand(data.index)">
				<router-link :to="data.ahref">
					<i :class="data.class"></i>
					<p>{{data.name}}</p>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				footlist:[{ahref:"/home/today",name:"首页",class:"iconfont icon-store",index:0},
									{ahref:"/group",name:"拼团",class:"iconfont icon-smile",index:1},
									{ahref:"/car",name:"购物车",class:"iconfont icon-bags",index:2},
									{ahref:"/my",name:"我的",class:"iconfont icon-account",index:3}]
			}
		},
		methods:{
			handleClick(){
			},
			hand(index){
				//console.log(index);
				this.$emit("index_show",index)
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
