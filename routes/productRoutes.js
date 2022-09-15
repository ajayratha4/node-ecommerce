const { jwtVerify } = require("../common/jwt");
const {
  allProducts,
  createProduct,
  getProductById,
} = require("../controllers/productController");

express = require("express");
const router = express.Router();

router.get("/getProducts", jwtVerify, allProducts);
router.get("/getProduct", jwtVerify, getProductById);
router.post("/create", jwtVerify, createProduct);

module.exports = router;
