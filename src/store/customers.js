import { fetchAll } from '../services/customers';

export default {
  namespaced: true,
  state: {
    customers: [],
    updatedAt: 0,
    pagination: {
      page: 0,
      count: 10,
    },
  },
  getters: {
    shouldUpdate: state => (seconds = 30) => {
      const diffTime = (new Date().getTime()) - state.updatedAt;
      return diffTime >= seconds * 1000;
    },
    byId: state => id => state.customers.find(customer => customer.id === id),
  },
  mutations: {
    setCustomers(state, customers) {
      state.customers = customers;
      state.updatedAt = new Date().getTime();
    },
    setPagination(state, opts = {}) {
      if (opts.page) state.pagination.page = opts.page;
      if (opts.count) state.pagination.count = opts.count;
    },
  },
  actions: {
    setPagination({ commit }, opts = {}) {
      commit('setPagination', opts);
    },
    fetchCustomers({ commit, state }, opts = {}) {
      commit('setPagination', opts);

      fetchAll().then((customers) => {
        const { page, count } = state.pagination;
        const results = customers.slice(page, count);
        commit('setCustomers', results);
      });
    },
  },
};
