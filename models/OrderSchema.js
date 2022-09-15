const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  name: { type: String, require: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  status: { type: String, require: true },
  created: { type: Date, default: new Date() },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
