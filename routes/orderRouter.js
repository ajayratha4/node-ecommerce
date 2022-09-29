const { jwtVerify } = require("../common/jwt");
const {
  createOrder,
  getOrder,
  removeOrder,
} = require("../controllers/orderController");

express = require("express");
const router = express.Router();

router.post("/create", jwtVerify, createOrder);
router.get("/get-orders", jwtVerify, getOrder);
router.post("/remove", jwtVerify, removeOrder);

module.exports = router;
