import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import Customers from './containers/Customers.vue';
import Orders from './containers/Orders.vue';
import About from './containers/About.vue';

Vue.use(VueRouter);

const routes = [{
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
