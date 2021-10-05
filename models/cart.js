const fs = require("fs");
const path = require("path");

const rootPath = require("../util/path");
const p = path.join(rootPath, "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };

      // Fetch the previous cart

      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => find existing product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      console.log(`existingProduct: ${existingProduct}`); // remove after
      let updatedProduct;
      // Add new product / increase quantity.
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        console.log(`updatedProduct: ${existingProduct}`); // remove after
        updatedProduct.qty++; // might not work, check..
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = {
          id: id,
          qty: 1,
        };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
