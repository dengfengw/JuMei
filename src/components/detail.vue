<template>
	<div id="box"> 
		<img src="http://p0.jmstatic.com/banner/area/000/000/029.jpg" id="right">
		<img src="http://mp5.jmstatic.com/product/000/928/928490_spu_normal/928490_800_800.jpg?imageView2/2/w/320/q/90" />
		<p id="price"><b>￥148</b><span>￥180</span><a>价格详情</a></p>
		<p id="nothing">已抢光</p>
		<div id="title"><b>聚美自营</b><span>韩国.【肌肤校色器】兰芝雪纱防晒隔离霜</span></div>
		<div id="freight"><span>运费</span><a>本商品满299或2件包邮（新疆部分区域除外）</a></div>
		<div id="explain"><span>说明</span><a>自营保税仓发货&nbsp;&nbsp;24小时内发货</br>7天拆封无条件退货&nbsp;&nbsp;支持分期</a></div>
		<div id="choose"><span>请选择</span><a>型号&nbsp;&nbsp;分类</a></div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
//import observer from "../observer"
	export default{
		data(){
			return{
				info:null
			}
		},
		mounted(){
			axios.get(`/api/v1/deal/dealactlist?card_id=4057&page=1&page_key=1524021000&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj`).then(res=>{
				this.info = res.data.item_list;
			})
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	#box{
		font-size: 0.12rem;
		margin-left: 0.1rem;
		overflow: hidden;
	}
	#right{
		margin-left: -0.1rem;
		width: 15%;
		position: absolute;
	}
	#price{
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
		margin-left: 0.04rem;
		color: #666
	}
	#title{
		margin-left: 0.04rem;
		overflow: hidden;
		b,span{
			display: block;
			float: left;
		}
		b{
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
		margin-left: 0.04rem;
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
		margin-left: -0.1rem;
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