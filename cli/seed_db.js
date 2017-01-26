/* eslint-disable no-console,import/no-extraneous-dependencies */
const net = require('net');
const http = require('http');
const https = require('https');
const { host, port } = require('../server/config');

function testConnection(conn) {
  return new Promise((resolve, reject) => {
    const client = net.connect(conn);

    client.on('connect', () => client.end());
    client.on('error', err => reject(err));
    client.on('end', () => resolve(true));
  });
}

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

function populateDatabase() {
  return fetchCustomers(100)
  .then((customers) => {
    const tasks = customers.map((customer) => {
      return new Promise((resolve, reject) => {
        const options = {
          host,
          port,
          path: '/api/Customers',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const req = http.request(options, (res) => {
          res.setEncoding('utf8');
          res.on('data', () => {});
          res.on('end', resolve);
        });

        req.on('error', reject)
        req.write(JSON.stringify(customer));
        req.end();
      });
    });

    return Promise.all(tasks);
  })
  .catch(err => console.log('FAILED to populate database', err));
}

testConnection({ host, port })
.then(populateDatabase)
.catch(() => console.log('Start the server to seed the database!'));
