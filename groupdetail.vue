<template>
	<div>
		<div class="group-box">
			<div class="group-title">
				<img :src=info />
				<p>
					<a>
						<b>{{datalist.group_jumei_price}}<i>包邮</i></b>
						<strong>{{datalist.group_single_price}}</strong>
					</a>
					<a>{{datalist.buyer_number_text}}</a>
				</p>
				<p>{{datalist.group_market_price}}</p>
				<p><a>逾期未成团自动退款</a></p>
			</div>	
			<div class="group-msg">
				<a>{{datalist_name.group_name_tag}}</a>
				<a>{{datalist_name.medium_name}}</a>
			</div>
			<div class="group-guize">
				<p><a>拼团玩法</a><a>查看规则<span>&gt</span></a></p>
				<p><a>支付<br>开团/参团</a><span>&gt</span><a>邀请<br>好友参团</a><span>&gt</span><a>拼团成立立即发货<br>逾期未成团自动退款</a><span>&gt</span></p>
				
			</div>
			<div class="jumeiser">
				<img src="http://a4.jmstatic.com/3917f15b23ae1ca0/logowxffh.png"/>
				<p>聚美官方服务号<br><span>更多靠谱优惠推荐，尽在聚美微信服务</span></p>
			</div>
		</div>
		
		
		<div class="group-foot">
			<p class="f1" @click="tohome">首页</p>
			<p class="f2"><b>{{datalist['group_single_price']}}</b></p>
			<p class="f3"><b>{{datalist.group_jumei_price}}</b><a>包邮开团</a></p>
		</div>			
		<router-view></router-view>
			
	</div>
</template>

<script type="text/javascript">
	import router from  "../router";
	import axios from "axios";

	export default {

		data(){
			return {
				datalist:[],
				datalist_name:[],
				info:null

			}
		},

		mounted(){
			console.log(this.$route.params.id);
			axios.get("/yiqituan/ajaxDetail?item_id="+this.$route.params.id+"&type=jumei_pop&tid=").then(res=>{
				console.log(res.data.data);
				this.datalist= res.data.data;
//				console.log(this.datalist.recommend_data[0].image_url_set.single['url']);
//				this.info = this.datalist.recommend_data[0].image_url_set.single['url']['800'];

			})
			
			axios.get("/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20").then(res=>{
				for(var i=0;i<res.data.data.length;i++){
					if(res.data.data[i].item_id==this.$route.params.id){
						this.datalist_name= res.data.data[i];
						this.info= this.datalist_name.image_url_set['single']['800'];
					}
				}
			})
		},

		methods:{
			tohome(){
				router.push('/home');
			}
		}

	}
</script>


<style lang="scss" scoped>	
body{
	background: #F2F2F2;
}
.group-box{
	font-size: 0.16rem;
	background: #F2F2F2;
	position: absolute;
	z-index: 99;
	top:0;
	.group-title{
		display: flex;
		flex-direction: column;
		background: #fff;
		padding-bottom:0.2rem;
		margin-bottom:0.1rem;
		img{
			height: 3.45rem;
	
		}
		p{
			display: flex;
			justify-content: space-between;
			padding: 0.02rem 0.2rem;
			align-items: center;
			b{
				color: red;
				font-weight: 700;
				font-size: 0.26rem;
				i{
					font-style: normal;
					font-size: 0.12rem;
					background: palevioletred;
					color: #fff;
					padding: 0.03rem;
					border-radius: 0.05rem;
				}
			}
			strong{
				color: #666;
				font-weight: 400;
			}
		}
		p:nth-of-type(2){
			text-decoration: line-through;
			color: #666;
		}
		p:nth-of-type(3){
			display: flex;
			justify-content: flex-end;
		}
	}
	.group-msg{
		font-size: 0.14rem;
		background: #fff;
		height: 0.4rem;
		line-height: 0.4rem;
		border-bottom: 0.1rem solid #F2F2F2;
		margin-bottom: 0.16rem;
		overflow: hidden;
		a:nth-of-type(1){
			margin-left: 0.2rem;
			color: red;
			font-size: 0.14rem;
		}	
	}
	.group-guize{
		margin-bottom: 0.16rem;
		display: flex;
		flex-direction: column;
		p{
			display: flex;
			justify-content: space-between;
			/*margin: 0 0.2rem;*/
			background: #fff;
			padding: 0.1rem 0.2rem;
		}
		p:nth-of-type(2){
			align-content: center;
			font-size: 0.14rem;
			box-sizing: content-box;
			a{
				text-align: center;
			}
			a:nth-of-type(1){
				color: red;
			}
			span{
				font-size: 0.26rem;
				color: #797979;
				margin-left: 0.1rem;
			}
		}
		
	}
	.jumeiser{
		margin-bottom: 0.86rem;
		background: #fff;
		border-bottom: 0.16rem solid #F2F2F2;
		display: flex;
		padding: 0.1rem 0.2rem;
		justify-content: flex-start;
		align-items: center;
		img{
			width:20%;
			height: 20%;
			margin-right: 0.2rem;
		}
		span{
			font-size: 0.14rem;
			color: #797979;
		}
	}
	
}
.group-foot{
		width: 100%;
		display: flex;
		justify-content: space-between;
		background: #fff;
		position: fixed;
		z-index: 10000;
		bottom: 0;
		padding-bottom: 0.1rem;
		p{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			border-radius: 0.2rem;
			background:#fe4070;
			color: #fff;
			width: 1.17rem;
			font-size: 0.14rem;
		}
		p:nth-of-type(1){
			border-radius: 50%;
			background: #fff;
			border: 0.01rem solid #CCCCCC;
			width: 0.35rem;
			height: 0.35rem;
			color: #000;
			margin-left: 0.2rem;
		}
		p:nth-of-type(2){
			background:#fff;
			color: #fe4070;
			border: 0.01rem solid #fe4070;
		}
		p:nth-of-type(3){
			margin-right: 0.3rem;
		}
	}
</style>