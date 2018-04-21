<template>
  <div id="app">
    <navbar v-show="shownav">
      <span class="right" @click="isShow=true">
        <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png">
      </span>
    </navbar>
    <sidebar v-show="isShow">
      <span @click="isShow=false">返回</span>
    </sidebar>
    <footbar v-on:index_show="showindex"></footbar>
    <section>
      <router-view></router-view>
    </section>
    <div class="boxzz" v-show="isShow">
    </div>
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
      isShow:false,
      shownav:true
    }
  },
  methods:{
    showindex(index){
      console.log(index);
      if (index==0) {
        this.shownav=true;
      } else {
        this.shownav=false;
      }
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
.boxzz{
  background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 4;
    top: 0;
}


</style>
