import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login/Login';
import Home from '@/components/Home/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '银行卡管理系统',
      component: Login
    },
    {
      path: '/Login',
      name: '登录',
      component: Login
    },
    {
      path: '/Home',
      name: '首页',
      component: Home
    }
  ]
});
