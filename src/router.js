import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import Login from './pages/Login.vue';
import Customers from './pages/Customers.vue';
import Orders from './pages/Orders.vue';
import About from './pages/About.vue';

import { getUser } from './lib/authentication';

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

router.beforeEach((to, from, next) => {
  // check if any of the matched routes require authentication
  if (to.matched.some(record => record.meta.requiresAuthentication)) {
    return getUser().then((user) => {
      // if user is authenticated, continue
      if (user) return next();

      // otherwise, redirect to login, preserving the requested route
      const { name, fullPath } = to;
      const query = (name !== undefined) ? { redirect: name } : { prev: fullPath };
      return next({ name: 'login', query });
    });
  }

  return next();
});

export default router;
