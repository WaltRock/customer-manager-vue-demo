<template>
    <tr>
      <td>{{ this.name }}</td>
      <td>{{ customer.email }}</td>
      <td>{{ customer.city }}, {{ customer.state }}</td>
      <td></td>
    </tr>
</template>

<script>
  export default {
    name: 'customer-row',
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