// TODO: user server endpoints
const artificialDelay = 300;

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

export function update(id, customer) {
  return new Promise((resolve, reject) => {
    const index = customers.findIndex(c => c.id === id);
    if (customer < 0) return reject(new Error('Invalid customer id'));
    customers.splice(index, 1, customer);
    return setTimeout(() => resolve(customer), artificialDelay);
  });
}

export function fetchById(id) {
  return new Promise((resolve, reject) => {
    const customer = customers.find(c => c.id === id);
    if (!customer) return reject(new Error('Invalid customer id'));
    return setTimeout(() => resolve(customer), artificialDelay);
  });
}

export function fetchAll() {
  // TODO: fetch customers from server
  return new Promise((resolve) => {
    setTimeout(() => resolve(customers), artificialDelay);
  });
}
