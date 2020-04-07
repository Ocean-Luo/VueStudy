// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Carousel ,CarouselItem,Select } from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$axios=Axios
Vue.config.productionTip = false
Vue.prototype.Host= '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
