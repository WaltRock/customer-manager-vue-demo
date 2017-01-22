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

<style>
  body {
    background-color: #eee;
  }
</style>