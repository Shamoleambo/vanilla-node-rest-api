const { v4: uuidv4 } = require("uuid");

const { writeDataToFile } = require("../utils");
let products = require("../data/products.json");

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

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);

    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const productIndex = products.findIndex((product) => product.id === id);
    products[productIndex] = product;

    writeDataToFile("./data/products.json", products);

    resolve(product);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter((product) => product.id !== id);
    writeDataToFile("./data/products.json", products);
    resolve();
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
