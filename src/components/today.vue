<template>
	<div>
			 
			<ul  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check	="false"
  infinite-scroll-distance="0">
				<li v-for="data in datalist" @click="handleClick(data.item_id)" >
				
				<h5 id="title">{{data.name}}</h5>
				<p id="price">￥{{data.jumei_price}}<span>{{data.market_price}}</span></p>
				<p id="count">{{data.deal_comments_number}}条评论</p>
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
			axios.get("/api/v1/deal/dealactlist?card_id=4057&page=1&page_key=1524021000&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj").then(res=>{
				console.log(res.data.item_list);
				for(var i=0;i<res.data.item_list.length;i++){
				if(res.data.item_list[i].type=="global_deal" || res.data.item_list[i].type=="jumei_pop"){
					this.datalist.push(res.data.item_list[i]);
				}
				console.log(this.datalist);
			}
				for(var i=0;i<res.data.item_list.length;i++){
						console.log(res.data.item_list[i].type);
				}
				
				
				//this.total =res.data.data.page.total //总页数
			})
		},

		methods:{
			handleClick(id){
				
				router.push(`/detail/${id}`);
				
			}

			/*loadMore(){
				console.log("滚动到底部了");
				this.current++;

				if(this.current>this.total){
					this.loading = true;
					this.text= "没有数据了"
					return ;
				}*/

				/*axios.get(`/v4/api/film/now-playing?page=${this.current}&count=7`).then(res=>{
					console.log(res.data);
					this.datalist= [...this.datalist,...res.data.data.films]; //合并两个数组
				})*/
			

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
					text-decoration: line-through;
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