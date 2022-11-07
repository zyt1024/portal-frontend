import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'
import ElementUI from '../src/pulgins/elementUI'
import './assets/styles/styles.css'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'

// Vue.use(ElementUI, { locale })
Vue.use(router)
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


// // 这里就可以进行vue-router的beforeEach拦截了，你也可以放其他地方，我比较喜欢放这
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || '';
//   // 这里先获取下用户信息，我偷懒用sessionStorage存了
//   // 里面包含了用户权限，用户各种信息等
//   const user = JSON.parse(sessionStorage.getItem('ms_user'));
//   // 这里必须加上to.path !== 'login'的判断，不然会陷入无限循环，
//   // 因为逻辑是第一次进来，判断用户信息不存在，即!user为true，由于使用的是next('/login')而非next()，
//   // 会再次进入路由跳转，next()方法没有参数是直接进入页面，不会再次进入路由拦截，有参数则会，因为跳转，
//   // 所以再次进入路由，再次判断，再次进入路由，再次判断，循环往复无限循环
//   // 所以一定要加to.path !== 'login'的判断
//   if (!user && to.path !== '/login') {
//     next('/login');
//   } else if (to.meta.permission) {
//     user.permission === to.meta.permission ? next() : message.alert('没有权限');
//   } else {
//     next();
//   }
//
router.beforeEach((to, from, next) => {
  // var _this = this;
  if(to.meta.requireAuth){
    if(JSON.parse(sessionStorage.getItem("userId"))==null){
      console.log('没有登录',)
      alert("请先登录")
      return;
      // next('licenseAll')
    } else {
      next()
    }
  }
  else {

    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
//   render: h => h(App)
// }).$mount('#app')
