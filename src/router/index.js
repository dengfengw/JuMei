import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from "../components/home"
import LoginComponent from "../components/login"
import Topspeed from "../components/speed"
import Today from "../components/today"
import Tomorrow from "../components/tomorrow"
import Mom from "../components/mom"
import Light from "../components/light"
import Group from "../components/group"
import Car from "../components/car"
import My from "../components/my"
import Register from "../components/register"
import Detail from "../components/detail"

Vue.use(Router)

const router = new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      component: HomeComponent,
      children:[
    		{
    			path:"/today",
    			component:Today
    		},
    		{
    			path:"/tomorrow",
    			component:Tomorrow
    		}
    	]
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/speed',
      component: Topspeed
    },
    {
      path: '/mom',
      component: Mom
    },
    {
      path: '/light',
      component: Light
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/register',
      component: Register
    }, 
    {
      path: '/detail',
      component: Detail
    },
    {
    	path:"*",
    	redirect:"/home"
    }
    
  ]
})
export default router;