const express = require("express");
const {
  getProducts,
  upProducts,
} = require("../controllers/products.controller");

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", upProducts);

module.exports = router;
