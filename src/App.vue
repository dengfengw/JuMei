<template>
  <div id="app">

    <navbar>
      <span class="right" @click="isShow=true">
        <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png">
      </span>
    </navbar>
    <sidebar v-show="isShow">
      <span @click="isShow=false">返回</span>
    </sidebar>
    <footbar></footbar>

    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import navbar from "./components/common/navbar";
import sidebar from "./components/common/sidebar";
import footbar from "./components/common/footbar";

export default {
  name: 'App',

  data(){
    return {
      isShow:false
    }
  },

  components:{
    navbar,
    sidebar,
    footbar
  }
}
</script>

<style>

*{
  margin: 0px;
  padding: 0px;
}

html,body{
  width: 100%;
  height: 100%;
}



</style>
