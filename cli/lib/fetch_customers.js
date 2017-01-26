/* eslint-disable no-console */
const https = require('https');

function fetchCustomers(count = 1) {
  const url = `https://randomuser.me/api/?nat=us&results=${count}`;
  console.log('Seeding from https://randomuser.me/api/');

  return new Promise((resolve, reject) => {
    let userData = '';

    https.get(url, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        userData = `${userData}${chunk}`;
      });
      res.on('end', () => {
        const { results } = JSON.parse(userData);

        resolve(results.map(customer => ({
          firstname: customer.name.first,
          lastname: customer.name.last,
          email: customer.email,
          address: customer.location.street,
          city: customer.location.city,
          state: customer.location.state,
          zipcode: customer.location.postcode,
        })));
      });
    })
    .on('error', err => reject(err));
  });
}

module.exports = fetchCustomers;
