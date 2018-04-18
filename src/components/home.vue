<template>
	<div>
			<ul>
				<router-link tag="li" to="/home/today" activeClass="active">今日10点上新</router-link>
				<router-link tag="li" to="/home/tomorrow" activeClass="active">明日10点上新</router-link>
			</ul>	
			
			<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
//import observer  from "../observer"

	export default {

		data(){
			return {
				datalist:[]
			}
		},

		/*mounted(){
			// observer.publish("default");
			this.$store.commit("changeMaizuoTitle","卖座电影");
		}*/
	}
</script>


<style type="text/css" lang="scss" scoped>
	ul{
		display: flex;
		li{
			font-size: 0.16rem;
			list-style: none;
			flex:1;
			height: 0.4rem;
			line-height: 0.4rem;
			text-align: center;
		}
	}

	.active{
		color:#fe6e00;
	}

</style>