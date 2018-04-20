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
		</div>
		
		
		<div class="group-foot">
			<p class="f1">首页</p>
			<p class="f2"><b>{{datalist['group_single_price'].slice(3,7)}}</b><a>单独买</a></p>
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
//				console.log(res.data.data);

				this.datalist= res.data.data;
				console.log(this.datalist.recommend_data[0].group_name_tag);
				this.info = this.datalist['buy_alone']['image_url_set']['single']['800'];

			})
			
			axios.get("/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20").then(res=>{
				for(var i=0;i<res.data.data.length;i++){
					if(res.data.data[i].item_id==this.$route.params.id){
						this.datalist_name= res.data.data[i];
					}
				}
			})
		},

		methods:{
			
		

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
		display: flex;
		font-size: 0.14rem;
		background: #fff;
		height: 0.4rem;
		line-height: 0.4rem;
		border-bottom: 0.1rem solid #F2F2F2;
		margin-bottom: 0.86rem;
		a:nth-of-type(1){
			margin-left: 0.2rem;
			color: red;
			font-size: 0.16rem;
		}	
	}
	
}
.group-foot{
		width: 100%;
		display: flex;
		justify-content: space-between;
		background: #fff;
		position: fixed;
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