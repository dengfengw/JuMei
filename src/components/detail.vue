<template>

	<div id="box" style="position: absolute;top:0;z-index: 4;"> 
		<div style="
    height: 0.5rem;
    background: #fff;
    font-size: 0.14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;

">
			<router-link class="iconfont icon-back" style="font-size: 0.25rem;" to="/home/today"></router-link>
		 	<div v-if="info">{{info.data.properties[0].value}}</div> 
		 	<i class="iconfont icon-all" style="font-size: 0.25rem;"></i>
		</div>
		<div v-if="info">
			<img :src="info.data.area_icon_v2" id="right">
			<swipe class="my-swipe">
				<swipe-item v-for="data in looplist" :key="data.__ob__.id">
				  	<img :src="data['800']"/>
				</swipe-item>
			</swipe>
		</div>
		
		<div v-if="info1">
			<p id="price"><b>￥{{info1.data.result.jumei_price}}</b><span>￥{{info1.data.result.market_price}}</span><a>价格详情</a><i>{{info1.data.result.product_desc}}</i></p>
			<p id="nothing">已抢光</p>
		</div>
		<div v-if="info">
			<div id="title"><b>{{info.data.special_tags.jm_owner}}</b><span>{{info.data.name}}</span></div>
		</div>
		<div v-if="info1">
			
			<div id="freight"><span>运费</span><a>{{info1.data.result.freight.text}}</a></div>
		<div id="explain"><span>说明</span><a>{{info1.data.result.icon_tag[0].name}}&nbsp;&nbsp;{{info1.data.result.icon_tag[1].name}}</br>{{info1.data.result.icon_tag[2].name}}&nbsp;&nbsp;支持分期</a></div>
		<div id="choose"><span>请选择</span><a>型号&nbsp;&nbsp;分类</a></div>
		</div>
		<div id="shop" v-if="info1">
				<img :src="info1.data.result.shop_info.logo_url['320']">
				<p id="shop_title">{{info1.data.result.shop_info.store_title}}</p><a>{{info1.data.result.shop_info.is_proprietary}}</a><b>{{info1.data.result.shop_info.is_authorization}}</b>
				<i>{{info1.data.result.shop_info.button_text}}</i>
			</div>	
		<div id="box_car">
			<span class="iconfont icon-store">店铺</span><span class="iconfont icon-cart">购物车</span><span>加入购物车</span><span>立即购买</span>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
//import observer from "../observer"
import 'vue-swipe/dist/vue-swipe.css';

import { Swipe, SwipeItem } from 'vue-swipe';
	export default{
		data(){
			return{
				info:null,
				info1:null,
				looplist:[]
			}
		},
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem
		},
		mounted(){
			console.log(this.$route.params.id);
			axios.get("/product/ajaxStaticDetail?item_id="+this.$route.params.id+"&type=global_deal").then(res=>{
				console.log(res.data)
				this.info = res.data
				console.log(this.info.data.area_icon_v2);
				this.looplist = res.data.data.image_url_set.single_many
				console.log(this.looplist);
			})
			axios.get("/product/ajaxDynamicDetail?item_id="+this.$route.params.id+"&type=global_deal").then(res=>{
				console.log(res.data)
				this.info1 = res.data
				//console.log(this.info.data.area_icon_v2);
				console.log(this.info1.data.result.shop_info.logo_url['320']);
				//this.looplist = res.data.data.image_url_set.single_many
				//console.log(this.looplist);
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
	img{
		display: block;
	}
	.my-swipe {
	  height: 3.75rem;;

	  img{
	  	width: 100%;
	  }
	}
	#right{
		margin-left: -0.03rem;
		width: 15%;
		position: absolute;
		z-index: 3;
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
		i{
			margin-top: 0.08rem;
			font-style: normal;
			display: block;
			float:right;
			margin-right: 0.2rem;
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
	#shop{
		height: 1.6rem;
		overflow: hidden;
		img{
			float: left;
			border: 0.01rem solid #999;
			width: 12%;
			margin: 0.1rem 0.1rem;
		}
		#shop_title{
			float: left;
			margin-top: 0.12rem;
			font-size: 0.15rem;
		}
		a,b{
			display: block;
			float: left;
			margin-left: 0.04rem;
			margin-top: 0.15rem;
			background-color: #fe4070;
			color: white;
			padding:0 0.02rem;
			border-radius: 0.04rem;	
			}
		i{
			width: 1rem;
			display: block;
			margin-top: 0.6rem;
			margin-left: 1.2rem;
			font-style: normal;
			font-size: 0.16rem;
			padding: 0.08rem 0.2rem;
			text-align: center;
			border: 0.01rem solid #999;
			border-radius: 0.4rem;
		}
	}
	#box_car{
		margin: 0.4rem 0;
		background: white;
		z-index: 4;
		position: fixed;
		bottom: 0;
	}
</style>