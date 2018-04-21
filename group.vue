<template>
	<div>
		 
			<ul >
				<li v-for="data in datalist">
				<img :src="data.image_url_set['single']['800']" />
				<span class="buyer-say">{{data.buyer_number_text}}</span>
				<p>
					<a>{{data.group_name_tag}}</a>
					<span>{{data.short_name}}</span>
				</p>
					
				<p>
					<a>
						<span><em>{{data.jumei_price}}</em><i>{{data.market_price}}</i></span>
						<span>{{data.single_price}}</span>
					</a>
					<b @click="groupClick(data.item_id)">去开团</b>
				</p>
			</li>
			</ul>
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

			}
		},

		mounted(){
			axios.get("/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20").then(res=>{
				console.log(res.data.data[0].image_url_set['single']['800']);

				this.datalist= res.data.data;

			})
		},

		methods:{
			groupClick(id){
				router.push(`/groupdetail/${id}`);		
			}

		}

	}
</script>


<style type="text/css" lang="scss" scoped>
	ul{
		background: #F2F2F2;
		width: 100%;
		heigth: 100%;
		font-size: 0.16rem;
		li{
			/*width: 100%;*/
			background: #fff;
			margin-bottom: 0.1rem;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 0.1rem 0;
			img{
				width: 1.5rem;
				height: 1.5rem;
				margin: 0 auto;
			}
			.buyer-say{
				width: 0.8rem;
				text-align: center;
				padding: 0.05rem 0;
				position: relative;
			    left: 0;
			    top: -0.6rem;
			    z-index: 1;
			    border: 0.01rem solid #eee;
			    border-left: 0;
			    border-top-right-radius: 0.2rem;
			    border-bottom-right-radius: 0.2rem;
			    color: #666;
			    background: rgba(251,251,251,.8);
			    font-size: 0.12rem;
			}
			p:nth-of-type(1){
				width: 100%;
				margin-left: 0.2rem;
				font-size: 0.14rem;
				margin-bottom: 0.2rem;
				a{
					color: red;
				}
			}
			p:nth-of-type(2){
				width: 100%;
				height: 0.6rem;
				line-height: 0.6rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				b{
					width: 0.88rem;
					height: 0.26rem;
					line-height: 0.26rem;
					border-radius: 0.2rem;
					background: #fe4070;
					color: #fff;
					text-align: center;
					font-weight: 200;
					margin-right: 0.2rem;
					font-family: simsun;
				}
				a{
					display: flex;
					height: 0.6rem;
					flex-direction: column;
					margin-left: 0.2rem;
					sapn{
						color: #cecece;
						
					}
					span:nth-of-type(1){
						height: 0.2rem;
						em{
							color: red;
							font-style: normal;
							font-size: 0.2rem;
							margin-right: 0.1rem;
						}
						i{
							color: #cecece;
							text-decoration: line-through;
							font-style: normal;
							font-size: 0.14rem;
						}
					}
					span:nth-of-type(2){
						height: 0.14rem;
						font-size: 0.14rem;
						color: #CECECE;
						font-family: simsun;
					}
				}
			}
		}
	}

</style>