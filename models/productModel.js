const products = require("../data/products.json");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const wantedProduct = products.find((product) => product.id === id);
    resolve(wantedProduct);
  });
}

module.exports = {
  findAll,
  findById,
};
