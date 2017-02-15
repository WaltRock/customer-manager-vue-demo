import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import Customers from './pages/Customers.vue';
import Orders from './pages/Orders.vue';
import About from './pages/About.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/login',

}, {
  path: '/',
  name: 'app',
  component: App,
  children: [
    {
      path: 'customers',
      name: 'customers',
      component: Customers,
    }, {
      path: 'orders',
      name: 'orders',
      component: Orders,
    }, {
      path: 'about',
      name: 'about',
      component: About,
    }, {
      path: '*',
      redirect: 'customers',
    },
  ],
}];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
