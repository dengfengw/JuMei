<template>
	<div>
			<ul>
				<router-link tag="li" to="/home/today" >今日10点</router-link>
				<router-link tag="li" to="/home/tomorrow" >明日10点</router-link>
			</ul>	

			<router-view></router-view>
	</div>
</template>

<script type="text/javascript"> 
	export default {

		data(){
			return {
				datalist:[]
			}
		},

		
	}
</script>


<style type="text/css" scoped>


</style>
