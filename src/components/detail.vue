<template>

	<div id="box" v-if="info"> 
		<img src="http://p0.jmstatic.com/banner/area/000/000/029.jpg" id="right">
		<swipe class="my-swipe">
			  <swipe-item v-for="data in looplist" :key="data.__ob__.id">
			  		<img :src="data['800']"/>
			  </swipe-item>
			</swipe>	
		<p id="price"><b></b><span></span><a>价格详情</a></p>
		<p id="nothing">已抢光</p>
		<div id="title"><b>{{info.data.special_tags.jm_owner}}</b><span>{{info.data.name}}</span></div>
		<div id="freight"><span>运费</span><a>本商品满299或2件包邮（新疆部分区域除外）</a></div>
		<div id="explain"><span>说明</span><a>自营保税仓发货&nbsp;&nbsp;24小时内发货</br>7天拆封无条件退货&nbsp;&nbsp;支持分期</a></div>
		<div id="choose"><span>请选择</span><a>型号&nbsp;&nbsp;分类</a></div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
//import observer from "../observer"
import 'vue-swipe/dist/vue-swipe.css';

// in ES6 modules
import { Swipe, SwipeItem } from 'vue-swipe';
	export default{
		data(){
			return{
				info:null,
				looplist:[]
			}
		},
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem
		},
		mounted(){
			console.log(this.$route.params.id);
			axios.get(`/product/ajaxStaticDetail?item_id=ht171007p1441587t1&type=global_deal`).then(res=>{
				console.log(res.data)
				this.info = res.data
				this.looplist = res.data.data.image_url_set.single_many
				console.log(this.looplist);
			})
			
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	#box{
		font-size: 0.12rem;
		//
		overflow: hidden;
	}
	.my-swipe {
	  height: 3.75rem;;

	  img{
	  	width: 100%;
	  }
	}
	#right{
		margin-left: -0.1rem;
		width: 15%;
		position: absolute;
	}
	#price{
		margin-left: 0.1rem;
		overflow: hidden;
		b,span,a{
			float: left;
			display: block;
		}
		b{
			font-weight: 100;
			display: block;
			color: red;
			font-size: 0.22rem;
		}
		span{
			font-weight: 700;
			color: #666;
			margin-top: 0.09rem;
			margin-left: 0.06rem;
			text-decoration: line-through;
		}
		a{
			font-size: 0.14rem;
			font-weight: 700;
			margin-top: 0.06rem;
			margin-left: 0.06rem;
			font-weight: 100;
			color: #666;
		}
	}
	#nothing{
		font-weight: 600;
		margin-top: 0.05rem;
		margin-bottom: 0.05rem;
		margin-left: 0.14rem;
		color: #666
	}
	#title{
		margin-left: 0.14rem;
		overflow: hidden;
		b{
			display: block;
			float: left;
			padding: 0.01rem 0.02rem;
			background-color: #fe4070;
			font-size: 0.1rem;
			border-radius: 0.04rem;
			color: white;
		}
		span{
			font-size: 0.14rem;
			margin-left: 0.04rem;
		}
	}
	#freight,#explain{

		margin-left: 0.14rem;
		span{
			color: #999;
			margin-right: 0.30rem;
		}
		
	}
	#freight{
		padding: 0.2rem 0;
		font-size: 0.13rem;
		border-bottom: 0.01rem solid #cecece;
		a{
			color: #333;
		}
	}
	#explain{
		padding: 0.16rem 0;
		font-size: 0.13rem;
		overflow: hidden;
		span{
			float: left;
			padding-bottom: 0.2rem;
		}
	}
	#choose{
		margin-left: -0.05rem;
		padding: 0.1rem 0;
		border-top:0.05rem solid #cecece;
		border-bottom:0.05rem solid #cecece;
		span{
			margin-left: 0.14rem;
			color: #999;
			margin-right: 0.30rem;
		}
	}
</style>