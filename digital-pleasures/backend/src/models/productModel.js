const fs = require("fs");
const path = require("path");

const model = {
  fileRoute: path.join(__dirname, "../data/products.json"),

  findAll: () => {
    const jsonData = fs.readFileSync(model.fileRoute, "utf-8");
    const products = JSON.parse(jsonData);

    return products;
  },

  findOfertas: (oferts) => {
    const products = model.findAll();
    const productsOferts = products.find((oferts) => oferts.offer === true);

    return productsOferts;
  },

  findCategorias: (categorias) => {
    const products = model.findAll();
    const categories = products.filter(
      (category) => category.categories == categorias
    );

    return categories;
  },

  updateProduct: (updatedProduct) => {


    let products = model.findAll();
    const prodIndex = products.findIndex(actualProd => actualProd.id === updatedProduct.id);
    products[prodIndex] = updatedProduct;
    const productsJson = JSON.stringify(products);
    fs.writeFileSync(model.fileRoute, productsJson, 'utf-8');
  },

  delete: (id) => {

    let products = model.findAll();

    products = products.filter(productoActual => productoActual.id !== id);

    const jsonProducts = JSON.stringify(products);

    fs.writeFileSync(model.fileRoute, jsonProducts, 'utf-8');

  },

  findById: (id) => {
    const products = model.findAll();
    const selectedProduct = products.find(productoActual => productoActual.id == id);
    return selectedProduct;
  },
  createProduct: (data) => {
    let products = model.findAll();

    const lastProdId = products[products.length - 1].id;

    const newProduct = {
      id: lastProdId + 1,
      ...data
    }

    products.push(newProduct);
    const jsonData = JSON.stringify(products);
    fs.writeFileSync(model.fileRoute, jsonData, 'utf-8');
    return newProduct;
  }

};

module.exports = model;
