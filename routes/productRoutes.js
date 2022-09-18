const { jwtVerify } = require("../common/jwt");
const {
  allProducts,
  createProduct,
  getProductById,
} = require("../controllers/productController");

express = require("express");
const router = express.Router();

router.get("/getProducts", allProducts);
router.get("/getProduct", getProductById);
router.post("/create", jwtVerify, createProduct);

module.exports = router;
