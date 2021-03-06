import Vue from 'vue'
import axios from 'axios'
import VuxAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import App from './App.vue'
// import env from './env'

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'; // 接口代理方式用此种方式设置
axios.defaults.timeout = 8000; // 8 秒超时
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 200) { 
    return res.data;
  } else if(res.status == 410) {
    // index 页面不需要跳转到登录，如果是其它页面则需要跳转到登录
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject(res); // 抛出异常
  } else {
    // alert(res.msg);
    Message.warning(res.msg);
    return Promise.reject(res);
  }
}, (error) => { // 拦截服务器异常（状态非 200）后的状态结果
  let res = error.response
  Message.error(res.data.message);
  return Promise.reject(error);
});


Vue.use(VuxAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.prototype.$message=Message
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
