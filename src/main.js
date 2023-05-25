import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './static/common.less'
import './static/minin.less'
import './static/relize.less'
import './assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
// import SlideVerify from 'vue-monoplasty-slide-verify';
import SlideVerify from './components/SlideVerify/index'
Vue.config.productionTip = false
Vue.use(SlideVerify)
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
