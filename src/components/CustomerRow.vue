<template>
    <tr>
      <td>{{ this.name }}</td>
      <td>{{ customer.email }}</td>
      <td>{{ customer.city }}, {{ customer.state }}</td>
      <td>
        <div class="control has-addons is-pulled-right">
          <a class="button is-outlined is-primary">
            <span class="icon is-small">
              <i class="fa fa-pencil"></i>
            </span>
            <span>Edit</span>
          </a>
          <a class="button is-outlined is-primary">
            <span class="icon is-small">
              <i class="fa fa-trash"></i>
            </span>
            <span>Delete</span>
          </a>
        </div>
      </td>
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