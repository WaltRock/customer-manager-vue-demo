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
          Login Here...
        </div>
        <div class="notification">
          {{ redirect }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import TopNav from '../components/TopNav.vue';
  import store from '../store'

  export default {
    name: 'login-page',
    components: {
      TopNav,
    },
    data() {
      return {
        sendTo: {},
      };
    },
    computed: {
      redirect: function() {
        return Object.keys(this.sendTo).reduce((str, val) => {
          return str += `${val}: ${this.sendTo[val]}; `;
        }, 'REDIRECT: ');
      },
    },
    created() {
      const getRedirect = (query) => {
        const { prev, redirect } = query;
        if (redirect !== undefined) return { name: redirect };
        if (prev !== undefined) return { path: prev };
        return { name: 'app' };
      }

      const sendTo = getRedirect(this.$route.query);

      // if authenticated, set to correct spot in the app
      if (store.getters.isAuthenticated) return this.$router.replace(sendTo);

      // if not authenticated, save redirect info for post-authentication redirect
      return this.sendTo = sendTo;
    },
  }
</script>