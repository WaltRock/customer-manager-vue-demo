<template>
  <div class="hello-world">
    <h1>Welcome to Vue.js</h1>
    <p>Counter: {{ count }}</p>
  </div>
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

  @import '~font-awesome/css/font-awesome.css';
</style>
