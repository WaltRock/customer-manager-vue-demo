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
      console.log('shouldUpdate', diffTime >= seconds * 1000)
      return diffTime >= seconds * 1000;
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
  },
  actions: {
    setPagination({ commit }, opts = {}) {
      commit('setPagination', opts);
    },
    fetchCustomers({ commit, state }, opts = {}) {
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
          resolve();
        }, 300);
      });
    },
  },
};
