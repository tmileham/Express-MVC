// Express
const express = require("express");
const router = express.Router();

// Controllers
const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProduct);
router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

exports.routes = router;