<template>
  <nav class="nav">
    <div class="nav-left">
      <div class="nav-item">
        Customer Management
      </div>
    </div>

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
      <a class="nav-item">Customers</a>
      <a class="nav-item">Orders</a>
      <a class="nav-item">About</a>
      <span class="nav-item">
        <a class="button" >
          <span class="icon"><i class="fa fa-github"></i></span>
          <span>Github</span>
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        count: 0
      };
    },
    mounted() {
      this.interval = setInterval(() => {
        this.count += 1;
      }, 1000);
    },
    destroyed() {
      clearInterval(this.interval);
    }
  }
</script>

<style lang="sass">
  @import './styles/palette'

  // @import '~bulma'
  @import '~bulma/sass/utilities/_all'
  @import '~bulma/sass/base/_all'
  @import '~bulma/sass/components/nav'
  @import '~bulma/sass/elements/button'

  @import '~font-awesome/css/font-awesome.css';
</style>
