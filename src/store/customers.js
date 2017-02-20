export default {
  namespaced: true,
  state: {
    loading: false,
    customers: [],
    updatedAt: 0,
    pagination: {
      page: 0,
      count: 10,
    },
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
    toggleLoading(state, loading) {
      state.loading = loading || !state.loading;
    },
  },
  actions: {
    fetchCustomers({ commit, state }, opts = {}) {
      commit('toggleLoading', true);
      commit('setPagination', opts);

      // TODO: fetch customers from server
      return new Promise((resolve) => {
        const customers = [{
          id: 'ai7rgail73ria3uhr',
          firstname: 'Peter',
          lastname: 'Amaya',
          email: 'PeterPAmaya@teleworm.us',
          city: 'Greensboro',
          state: 'NC',
        }, {
          id: '7a4toi7g4ot8jaefg',
          firstname: 'Derrick',
          lastname: 'Duplantis',
          email: 'DerrickCDuplantis@dayrep.com',
          city: 'Freeport',
          state: 'NY',
        }, {
          id: 'q93r7ga4otilsghae',
          firstname: 'Andrea',
          lastname: 'Hernandez',
          email: 'AndreaRHernandez@armyspy.com',
          city: 'Maumee',
          state: 'OH',
        }, {
          id: 'ia73groi7ah4oitgn',
          firstname: 'Daniel',
          lastname: 'Hurt',
          email: 'DanielGHurt@teleworm.us',
          city: 'Cedar Rapids',
          state: 'IA',
        }, {
          id: '98hi3kubtksgli9rg',
          firstname: 'Milagros',
          lastname: 'Anderson',
          email: 'MilagrosCAnderson@jourrapide.com',
          city: 'Kansas City',
          state: 'KS',
        }, {
          id: 'pl74p39otujs5kuhz',
          firstname: 'An',
          lastname: 'K\'ung',
          email: 'AnKung@dayrep.com',
          city: 'Benton Harbor',
          state: 'MI',
        }];

        setTimeout(() => {
          const { page, count } = state.pagination;
          const results = customers.slice(page, count);
          commit('setCustomers', results);
          commit('toggleLoading', false);
          resolve();
        }, 300);
      });
    },
  },
};
