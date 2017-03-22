import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';

import Login from '../pages/Login.vue';
import Customers from '../pages/Customers.vue';
import CustomerView from '../pages/CustomerView.vue';
import CustomerEdit from '../pages/CustomerEdit.vue';

import Orders from '../pages/Orders.vue';
import About from '../pages/About.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/login',
  name: 'login',
  component: Login,
}, {
  path: '/',
  name: 'app',
  component: App,
  meta: {
    requiresAuthentication: true,
  },
  children: [
    {
      path: 'customers',
      name: 'customers',
      component: Customers,
    }, {
      path: 'customer/:id',
      name: 'customer-view',
      component: CustomerView,
    }, {
      path: 'customer/:id/edit',
      name: 'customer-edit',
      component: CustomerEdit,
    }, {
      path: 'orders',
      name: 'orders',
      component: Orders,
    }, {
      path: 'about',
      name: 'about',
      component: About,
    }, {
      // all other routes, including /, get redirected to /customers
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
