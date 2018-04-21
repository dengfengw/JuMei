<template>

	<div id="box" style="position: absolute;top:0;z-index: 4;"> 
		<div id="box_header">
			<router-link class="iconfont icon-back" style="font-size: 0.25rem; text-decoration: none;" to="/home/today"></router-link>
		 	<div v-if="info">{{info.data.properties[0].value}}</div> 
		 	<router-link class="iconfont icon-all" style="font-size: 0.25rem; text-decoration: none;" to="/home/today"></router-link>
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
			
			<div id="freight">
				<span>运费</span><a>{{info1.data.result.freight.text}}</a>
			</div>
			<div id="explain">
				<span>说明</span><a>{{info1.data.result.icon_tag[0].name}}&nbsp;&nbsp;{{info1.data.result.icon_tag[1].name}}</br>{{info1.data.result.icon_tag[2].name}}&nbsp;&nbsp;支持分期</a>
			</div>
			<div id="choose">
				<span>请选择</span><a>型号&nbsp;&nbsp;分类</a>
			</div>
		</div>
		<div id="shop" v-if="info1">
				<img :src="info1.data.result.shop_info.logo_url?info1.data.result.shop_info.logo_url['320']:null">
				<p id="shop_title">{{info1.data.result.shop_info.store_title}}</p><a>{{info1.data.result.shop_info.is_proprietary}}</a><b>{{info1.data.result.shop_info.is_authorization}}</b>
				<i>{{info1.data.result.shop_info.button_text}}</i>
			</div>	
		<div id="box_footer">
		<ul>
			<router-link to="/home" tag="li">
				<i class="iconfont icon-store" id="box_footer_shop"></i>
				<p>店铺</p>
			</router-link>
			<router-link to="/car" tag="li" id="box_footer_car">
				<i class="iconfont icon-bags"></i>
				<p>购物车</p>
			</router-link>
			<transition name="bounce">
				<div id="box_footer_incar" @click="handleClick()">

					<p>加入购物车</p>
				</div>
			</transition>
			
			<router-link to="/my" tag="li" id="box_footer_buy">
				<p>立即购买</p>
			</router-link>

		</ul>
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
			var url=window.location.pathname;
			//console.log(url);
			//console.log(url.substring(8));
			axios.get("/product/ajaxStaticDetail?item_id="+url.substring(8)).then(res=>{
				//h5.jumei.com/product/ajaxStaticDetail?item_id=df1803236501340p3685498&type=jumei_pop
				//console.log(res.data)
				this.info = res.data
				//console.log(this.info.data.area_icon_v2);
				this.looplist = res.data.data.image_url_set.single_many
				//console.log(this.looplist);
				//console.log(window.location.port);
			})
			axios.get("/product/ajaxDynamicDetail?item_id="+url.substring(8)).then(res=>{
				//console.log(res.data)
				this.info1 = res.data
				//console.log(this.info.data.area_icon_v2);
				//console.log(this.info1.data.result.shop_info.logo_url['800']);
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
	#box_header{
		height: 0.5rem;
	    background: #fff;
	    font-size: 0.14rem;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    padding: 0 0.3rem;
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
	li{
	list-style: none;
}
#box_footer{
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
		//justify-content: space-around;
		align-items: center;
		li{
			text-align: center;
			a{
				text-decoration: none;
				color: #666;
			}
		}
		
	}
}
#box_footer_car,#box_footer_shop{
	padding:0 0.16rem;
}
#box_footer_shop{
	margin-left: 0.07rem;
}
#box_footer_incar{
	background-color: #fff1f6;
	color:#fe4070;
	padding:0.18rem 0.3rem;
}
#box_footer_buy{
	background-color: #fe4070;
	color:white;
	padding:0.18rem 0.3rem;
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
			transform:translateY(0px);
		}
	}
</style>