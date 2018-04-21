
<template>
	<div style="margin-bottom:0.5rem">
    <div class="top">
      <ul class="clear">
        <li>
          <a href="#">
            <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70">
            <div class="deals-text">海外直供</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/genuine_guarantee.png?imageView2/2/w/51/q/70">
            <div class="deals-text">原装正品</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70">
            <div class="deals-text">极速到货</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70">
            <div class="deals-text">轻松退货</div>
          </a>
        </li>
      </ul>
    </div>
			<ul>
				<li v-for="data in datalist" @click="handleClick(data.item_id)">
				<h5 id="title">{{data.name}}</h5>
				<p id="price">￥{{data.jumei_price}}<span>{{data.market_price}}</span></p>
				<p id="count">{{data.deal_comments_number}}</p>
				<img :src="data.image_url_set.dx_image?data.image_url_set.dx_image.url['320']:data.image_url_set.main['800']">
			</li>
			</ul>
      <div class="foot">
            <div class="footimage">
            <a onclick="#">
                <img src="//s1.jmstatic.com/templates/touch/css/v3/image/footer_bg.jpg">
            </a>
            </div>
            <ul class="tablist">
                <li class="checked"><a href="#" style="color:#fe4070;">触屏版</a></li>
                <li class=""><a href="#"">电脑版</a></li>
            </ul>
            <div class="bottom">
                <p>©2016 聚美优品 Jumei.com</p>
            </div>
        </div>
    <div class="jump" @click="jumptop()">
      <i class="iconfont icon-less"></i>
    </div>
	</div>
</template>

<script type="text/javascript">

	import router from  "../router";
	import axios from "axios";


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
			axios.get("/api/v1/deal/dealactlist?card_id=4057&page=2&page_key=1524021000&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj").then(res=>{
				for(var i=0;i<res.data.item_list.length;i++){
          if (res.data.item_list[i].type!=="jmstore") {
            this.datalist.push(res.data.item_list[i]);
          }
				}

			})
		},

		methods:{
			handleClick(id){

				router.push(`/detail/${id}`);

			},
      jumptop(){
        scrollTo(0,0);
      }
		}

	}
</script>


<style type="text/css" lang="scss" scoped>
a{
  color: #333;
  text-decoration: none;
}
.top{
  font-size: 0.12rem;
  border-bottom: 0.1rem solid #eee;
  ul{
    background: #fff;
    padding: 0.15rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
      text-decoration: none;
      color: #666;
    }
  }
}
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
          text-decoration: line-through;
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
				top: 1.3rem;
			}
			img{
				float:left;
				width:100%;
			}
		}
	}
  .foot{
    font-size: 0.14rem;
    padding: 0.1rem;
    .footimage{
      width: 100%;
      img{
        width: 100%;
      }
    }
    .tablist{
      padding: 0 0.4rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #fff;
      height: 0.8rem;
      li{
        border: 1px solid #eee;
        border-radius: 0.3rem;
        width: 1rem;
        text-align: center;
        line-height: 0.3rem;
      }
    }
    .bottom{
      text-align: center;
      color: #999;
      height: 1rem;
    }
  }
  .jump{
    background: #fff;
    color: #666;
    position: fixed;
    bottom: 0.8rem;
    right: 0.2rem;
    font-size: 0.18rem;
    text-align: center;
    line-height: 0.4rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.4rem;
    border: 1px solid #666;
  }
</style>
