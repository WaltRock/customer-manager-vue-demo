<template>
  <div id="login" class="container">
    <nav class="nav has-shadow">
      <div class="nav-left">
        <div class="nav-item is-brand">
          <router-link class="nav-item is-brand" to="/">Customer Management</router-link>
        </div>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <div class="notification">
          Login Here
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { getUser } from '../lib/authentication';

  export default {
    name: 'LoginPage',
    data () {
      return {
        sendTo: {},
      };
    },
    beforeRouteEnter (to, from, next) {
      const getRedirect = () => {
        const { prev, redirect } = to.query;
        if (redirect !== undefined) return { name: redirect };
        if (prev !== undefined) return { path: prev };
        return { name: 'customers' };
      }

      return getUser().then(user => {
        const sendTo = getRedirect();
        // if already logged in, redirect
        if (user) return next(sendTo);

        // preserve the sendTo property, render the login page
        next(vm => vm.sendTo = sendTo);
      });
    },
  }
</script>