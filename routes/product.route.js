const express = require("express");
const routes = express.Router();

const {
  getProducts,
  postProducts,
  getProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/products.controllers.js");

routes.get("/", getProducts);
routes.post("/", postProducts);
routes.get("/:id", getProduct);
routes.put("/:id", putProduct);
routes.delete("/:id", deleteProduct);

module.exports = routes;
