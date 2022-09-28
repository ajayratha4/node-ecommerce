const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  quantity: { type: Number, require: true },
  price: { type: Number, require: true },
  status: { type: String, require: true },
  created: { type: Date, default: new Date() },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
