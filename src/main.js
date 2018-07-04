import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './utils/request.js'
//图片懒加载
import Lazyload from 'vue-lazyload'
import VueLidate from 'vuelidate';
import "./fonts1/iconfont.css";
//应用自定义toast组件
import Toast from './plugins/toast'
Vue.use(Toast, {
  name: 'Toast',
  timeout:2000
})
Vue.use(VueLidate)
Vue.use(Lazyload, {
  loading: '.././static/loading.gif'
})
Vue.use(http)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})