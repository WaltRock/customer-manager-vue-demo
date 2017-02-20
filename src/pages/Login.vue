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
        <form @submit.prevent="doLogin">

          <label class="label">Email</label>
          <p class="control has-icon has-icon-left">
            <input class="input" type="email" placeholder="Email" v-model="email">
            <span class="icon is-small">
              <i class="fa fa-envelope-open-o"></i>
            </span>
          </p>

          <label class="label">Password</label>
          <p class="control has-addons has-icon has-icon-left">
            <input class="input is-expanded" type="password" placeholder="password" v-model="password">
            <span class="icon is-small">
              <i class="fa fa-key"></i>
            </span>
            <button type="" class="button is-primary">
              Login
            </button>
          </p>

        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import TopNav from '../components/TopNav.vue';
  import store from '../store'

  export default {
    name: 'login-page',
    components: {
      TopNav,
    },
    data() {
      return {
        email: '',
        password: '',
        sendTo: {},
      };
    },
    methods: {
      doLogin() {
        const { email, password } = this;

        store.dispatch('userLogin', { email, password })
        .then(() => {
          this.$router.push(this.sendTo);
        });
      }
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