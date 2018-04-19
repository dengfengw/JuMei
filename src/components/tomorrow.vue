<template>
	<div>
			 
			<ul  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check	="false"
  infinite-scroll-distance="0">
				<li v-for="data in datalist" @click="handleClick(data.id)" >
				
				<h5 id="title">{{data.name}}</h5>
				<p id="price">￥{{data.jumei_price}}<span>{{data.market_price}}<i></i></span></p>
				<p id="count">{{data.deal_comments_number}}</p>
				<img :src="data.image_url_set.dx_image?data.image_url_set.dx_image.url['320']:data.image_url_set.main['800']">
			</li>
			</ul>	

			
	</div>
</template>

<script type="text/javascript">

	import router from  "../router";
	import axios from "axios";

	/*import { InfiniteScroll } from 'mint-ui';
	import Vue from "vue";
	Vue.use(InfiniteScroll);*/

	export default {

		data(){
			return {
				datalist:[],

				loading:false,

				current:1,
				total:0,

				text:"正在数据中...."
			}
		},

		mounted(){
			axios.get("/api/v1/deal/dealactlist?card_id=4057&page=2&page_key=1524051720&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj").then(res=>{
				console.log(res.data.item_list);

				this.datalist= res.data.item_list;
				for(var i=0;i<res.data.item_list.length;i++){
					//console.log(res.data.item_list[i].image_url_set.dx_image.url['320']);
						console.log(res.data.item_list[i].jumei_price);
				}
				
				

			})
		},

		methods:{
			handleClick(id){
				
console.log(this.datalist[0].image_url_set);
				
			},

			loadMore(){
				console.log("滚动到底部了");
				this.current++;

				if(this.current>this.total){
					this.loading = true;
					this.text= "没有数据了"
					return ;
				}

				/*axios.get(`/api/v1/deal/dealactlist?card_id=4057&page=${this.current}&page_key=1524051720&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj`).then(res=>{
					console.log(res.data);
					this.datalist= [...this.datalist,...res.data.item_list]; //合并两个数组
				})*/
			}

		}

	}
</script>


<style type="text/css" lang="scss" scoped>
	ul{
		background-color: #cecece;
		li{
			top:0.01rem;
			position: relative;
			overflow: hidden;
			bottom:0.3rem;
			#title{
				display:block;
				font-size: 0.1px;
				position: absolute;
				left: 2rem;
				font-weight: 100;
				margin-top:-1.3rem;
			}
			#price{
				left: 2rem;
				top: 0.8rem;
				position: absolute;
				color: red;
				font-size: 0.18rem;
				span{
					font-size: 0.14rem;
					margin-left: 0.2rem;
					color: #797979; 
					i{
						display: block;
						width: 0.28rem;
						height: 0.01rem;
						background-color: #797979;
						margin-top: -0.1rem;
						margin-left: 0.7rem;
					}
				}
			}
			#count{
				font-size: 0.1rem;
				left: 2rem;
				position: absolute;
				top: 1.1rem;
			}
			img{
				float:left;
				width:100%;
			}
		}
	}

</style>