<template>
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <slot>
        <td rowspan="4">No Customers</td>
      </slot>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'customer-table',
  }
</script>