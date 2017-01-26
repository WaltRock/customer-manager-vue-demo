/* eslint-disable no-console,import/no-extraneous-dependencies */
const net = require('net');
const http = require('http');
const minimist = require('minimist');
const { host, port } = require('../server/config');
const fetchCustomers = require('./lib/fetch_customers');

const argv = minimist(process.argv.slice(2));
const modelName = argv._[0];

function testConnection(conn) {
  return new Promise((resolve, reject) => {
    const client = net.connect(conn);

    client.on('connect', () => client.end());
    client.on('error', err => reject(err));
    client.on('end', () => resolve(true));
  });
}

function populateDatabase(model) {
  console.log('Populating model:', model);
  let task = false;

  switch (model.toLowerCase()) {
    case 'customers':
      task = fetchCustomers(100)
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
      .then(results => console.log('Customer(s) added', results.length));
      break;
    default:
      throw new Error(`Model not found or supported: ${model}`);
  }

  return task.catch((err) => {
    console.log('FAILED to populate database', err);
    process.exit(3);
  });
}

if (!modelName) {
  console.log('Please specify a model to populate');
  process.exit(1);
}

testConnection({ host, port })
.then(populateDatabase(modelName))
.catch(() => {
  console.log('Start the server to seed the database!');
  process.exit(2);
});
