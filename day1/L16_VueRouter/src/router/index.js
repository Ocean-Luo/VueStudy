import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import HelloLuoyang from '../components/HelloLuoyang'

Vue.use(VueRouter)

export default new VueRouter({
  routes:
  [{
    path:"/hello",
    component: HelloWorld
  },
  {
    path:"/helloluoyang",
    component: HelloLuoyang
  }]
})