<template>
  <!-- top navigation -->
  <div id="app" class="container">
    <top-nav title="Customer Management">
      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <router-link class="nav-item is-tab" :to="{ name: 'customers' }" active-class="is-active">
          Customers
        </router-link>
        <router-link class="nav-item is-tab" :to="{ name: 'orders' }" active-class="is-active">
          Orders
        </router-link>
        <router-link class="nav-item is-tab" :to="{ name: 'about' }" active-class="is-active">
          About
        </router-link>
        <span class="nav-item">
          <a class="button" >
            <span class="icon"><i class="fa fa-github"></i></span>
            <span>Github</span>
          </a>
        </span>
      </div>
    </top-nav>

    <!-- main app container -->
    <router-view></router-view>
  </div>
</template>

<script>
  import TopNav from './components/TopNav.vue';

  export default {
    name: 'App',
    components: {
      'top-nav': TopNav,
    }
  }
</script>

<style lang="sass">
  @import './styles/palette'

  // @import '~bulma'
  @import '~bulma/sass/utilities/_all'
  @import '~bulma/sass/base/_all'
  @import '~bulma/sass/layout/section'
  @import '~bulma/sass/components/nav'
  @import '~bulma/sass/components/card'
  @import '~bulma/sass/elements/button'
  @import '~bulma/sass/elements/other'
  @import '~bulma/sass/grid/columns'

  @import '~font-awesome/css/font-awesome.css';
</style>
