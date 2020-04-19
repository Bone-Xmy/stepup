import Vue from 'vue'
import axios from 'axios'
import VuxAxios from 'vue-axios'
import router from './router'
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
  if (res.status == 0) { 
    return res.data;
  } else if(res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});


Vue.use(VuxAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')