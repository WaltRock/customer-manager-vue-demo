<template>
  <section class="section">
    <div class="container">
      <div class="notification">
        View customer by id: {{ $route.params.id }}
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'customer-view-page',
    beforeCreate() {
      console.log('before create view')
    },
  }
</script>