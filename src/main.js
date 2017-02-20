import Vue from 'vue';
import router from './router';
import store from './store';

// pre-route auth checking
router.beforeEach((to, from, next) => {
  // check if any of the matched routes require authentication
  if (to.matched.some(record => record.meta.requiresAuthentication)) {
    if (store.getters.isAuthenticated) return next();

    // otherwise, redirect to login, preserving the requested route
    const { name, fullPath } = to;
    const query = (name !== undefined) ? { redirect: name } : { prev: fullPath };
    return next({ name: 'login', query });
  }

  return next();
});

const app = new Vue({
  router,
  store,
  render: h => h('router-view'),
});

app.$mount('#app');
