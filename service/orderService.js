const Order = require("../models/OrderSchema");

const createOrderService = async (body, userId) => {
  const { name, status, productId } = body;
  const order = new Order({ name, productId, createdBy: userId, status });
  const res = await order.save();
  return res;
};

const getOrderService = async (body, userId) => {
  return await Order.find({ createdBy: userId })
    .populate({ path: "createdBy", select: "name email" })
    .populate("productId");
};

module.exports = { createOrderService, getOrderService };
