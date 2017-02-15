<template>
  <nav class="nav has-shadow">
    <div class="nav-left">
      <div class="nav-item is-brand">
        <router-link class="nav-item is-brand" to="/">{{ title }}</router-link>
      </div>
    </div>

    <!-- allow injection of items into the nav -->
    <slot></slot>
  </nav>
</template>

<script>
  export default {
    name: 'top-nav',
    props: {
      title: String,
    }
  }
</script>