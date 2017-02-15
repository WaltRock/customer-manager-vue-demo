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
  export default {
    name: 'LoginPage',
  }
</script>