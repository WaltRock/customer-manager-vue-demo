<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <router-link :to="{ name: 'customer-view', params: { id: customer.id } }">
          {{ this.name }}
        </router-link>
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
      <router-link class="card-footer-item" :to="{ name: 'customer-edit', params: { id: customer.id } }">
        <span class="icon is-small">
          <i class="fa fa-pencil"></i>
        </span>
        &nbsp;Edit
      </router-link>
      <a class="card-footer-item">
        <span class="icon is-small">
          <i class="fa fa-trash"></i>
        </span>
        <span>&nbsp;Delete</span>
      </a>
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