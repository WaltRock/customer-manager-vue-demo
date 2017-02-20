<template>
  <section class="section">
    <div class="container" v-if="loading">
      Loading...
    </div>

    <div class="container" v-if="!loading">
      <header class="is-clearfix">
        <div class="control is-grouped is-pulled-right">
          <div class="control">
            <a class="button" @click="fetchCustomers()">
              <span class="icon is-small">
                <i class="fa fa-refresh"></i>
              </span>
              <span>Reload</span>
            </a>

          </div>
          <div class="control has-addons">
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
  import { mapActions, mapState } from 'vuex';
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
      }
    },
    computed: Object.assign({}, mapState('customers', [
      'customers',
      'loading',
      'updatedAt',
    ])),
    methods: Object.assign({
      setMode(mode) {
        this.mode = (mode === 'table') ? 'table' : 'cards';
      },
    }, mapActions('customers', [
      'fetchCustomers',
    ])),
    created() {
      const diffTime = (new Date().getTime()) - this.updatedAt;
      const seconds = 30;

      if (diffTime >= seconds * 1000) this.fetchCustomers();
    },
  }
</script>

<style scoped>
  header {
    margin-bottom: 30px;
  }
</style>