<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ this.name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div>XX orders</div>
        <div><a href="" target="_blank">{{ customer.email }}</a></div>
        <small>{{ customer.city }}, {{ customer.state }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Save</a>
      <a class="card-footer-item">Edit</a>
      <a class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'customer-card',
    props: {
      customer: {
        type: Object,
        required: true,
        validator(value) {
          const props = [
            'firstname',
            'lastname',
            'email',
            'city',
            'state',
          ];

          return props.every(prop => !!value[prop]);
        }
      }
    },
    computed: {
      name() {
        return `${this.customer.firstname} ${this.customer.lastname}`;
      },
    },
  }
</script>