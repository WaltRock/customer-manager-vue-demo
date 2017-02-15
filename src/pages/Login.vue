<template>
  <div id="login" class="container">
    <top-nav title="Customer Management">
      <div class="nav-right nav-menu">
        <span class="nav-item">
          <a class="button" >
            <span class="icon"><i class="fa fa-github"></i></span>
            <span>Github</span>
          </a>
        </span>
      </div>
    </top-nav>

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
  import TopNav from '../components/TopNav.vue';

  export default {
    name: 'LoginPage',
    components: {
      'top-nav': TopNav,
    },
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