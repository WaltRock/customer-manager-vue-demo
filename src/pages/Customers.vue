<template>
  <section class="section">
    <div class="container">
      <h1>Customers</h1>

      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="customer in customers">
          <CustomerCard :customer="customer">
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  import CustomerCard from '../components/CustomerCard.vue';

  export default {
    name: 'CustomerPage',
    components: {
      CustomerCard
    },
    data() {
      const mockCustomer = (num) => ({
        firstname: 'John',
        lastname: `Doe${num}`,
        city: 'cityton',
        state: 'AZ',
        email: 'john@email.com',
      });

      return {
        customers: [
          mockCustomer(1),
          mockCustomer(2),
          mockCustomer(3),
          mockCustomer(4),
          mockCustomer(5),
        ],
      }
    },
  }
</script>