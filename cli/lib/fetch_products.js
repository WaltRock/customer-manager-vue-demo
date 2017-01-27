/* eslint-disable no-console */
const products = require('./mock_products');

function fetchProducts(count = 1) {
  console.log('Seeding products from JSON');

  return Promise.resolve(products.slice(0, count));
}

module.exports = fetchProducts;
