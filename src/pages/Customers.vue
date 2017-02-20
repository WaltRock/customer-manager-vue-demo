<template>
  <section class="section">
    <div class="container">
      <header class="is-clearfix">
        <div class="control has-addons is-pulled-right">
          <a class="button" :class="{ 'is-primary': mode === 'cards' }" @click="setMode('cards')">
            <span class="icon is-small">
              <i class="fa fa-th-large"></i>
            </span>
            <span>Cards</span>
          </a>
          <a class="button" :class="{ 'is-primary': mode === 'table' }" @click="setMode('table')">
            <span class="icon is-small">
              <i class="fa fa-table"></i>
            </span>
            <span>Table</span>
          </a>
        </div>
      </header>

      <div class="columns is-multiline" v-if="mode === 'cards'">
        <div class="column is-one-third" v-for="customer in customers">
          <customer-card :customer="customer">
        </div>
      </div>

      <customer-table v-if="mode === 'table'">
        <customer-row v-for="customer in customers" :customer="customer">
      </customer-table>

    </div>
  </section>
</template>

<script>
  import CustomerCard from '../components/CustomerCard.vue';
  import CustomerTable from '../components/CustomerTable.vue';
  import CustomerRow from '../components/CustomerRow.vue';

  export default {
    name: 'customers-page',
    components: {
      CustomerCard,
      CustomerTable,
      CustomerRow,
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
        mode: 'cards',
        customers: [
          mockCustomer(1),
          mockCustomer(2),
          mockCustomer(3),
          mockCustomer(4),
          mockCustomer(5),
        ],
      }
    },
    methods: {
      setMode(mode) {
        this.mode = (mode === 'table') ? 'table' : 'cards';
      }
    }
  }
</script>

<style scoped>
  header {
    margin-bottom: 30px;
  }
</style>