<template>
  <div id="app">
    
    <navbar ></navbar>
    <sidebar></sidebar>  
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
