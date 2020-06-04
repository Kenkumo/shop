import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VTop from './components/backToTop/ToTop.vue'
import i18n from "./i18n/index";
import VueI18n from "vue-i18n";
import './icons'

// 解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body);
  }, false);
}

// 注册为全局组件
Vue.component('v-top', VTop);


// 瀑布流
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

// 全局引入UI库 vant
// import '@/plugins/vant'
// 全局引入rem
import '@/config/rem'
// 全局引入 Reset-css
import 'reset-css'
//  全局引入 过滤器
import '@/config/filter'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
