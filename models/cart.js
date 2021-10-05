const fs = require("fs");
const path = require("path");

const rootPath = require("../util/path");
const p = path.join(rootPath, "data", "cart.json");

module.exports = class Cart {
  static addProduct(id) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };

      // Fetch the previous cart

      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => find existing product
      const existingProduct = cart.products.find((prod) => prod.id === id);

      let updatedProduct;
      // Add new product / increase quantity.
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty++;
      } else {
        updatedProduct = {
          id: id,
          qty: 1,
        };
      }
    });
  }
};
