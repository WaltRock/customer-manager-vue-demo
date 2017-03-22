<template>
  <section class="section">
    <div class="container">
      <div class="notification">
        Edit customer by id: {{ $route.params.id }}
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'customer-edit-page',
    beforeCreate() {
      console.log('before create edit')
    },
  }
</script>