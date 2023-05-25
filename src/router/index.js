import Vue from 'vue'
import VueRouter from 'vue-router'
//引入nprogress 进度条插件
import NProgress from 'nprogress'
import Login from '@/views/login'
import Home from '@/views/home'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 简单配置  进度条,可以不配置：在axios中我们不再做配置，以用来区分。
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

// 页面路由刚开始切换的时候
// router.beforeEach(async (to, from, next) => {
//   // 开启进度条
//   NProgress.start();
// })

// // 页面路由切换完毕的时候
// router.afterEach(() => {
//   // 关闭进度条
//   NProgress.done()
// })

export default router
