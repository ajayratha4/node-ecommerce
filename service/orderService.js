const Order = require("../models/OrderSchema");

const createOrderService = async (body, userId) => {
  const { name, status } = body;
  const order = new Order({ name, createdBy: userId, status });
  const res = await order.save();
  return res;
};

const getOrderService = async (body, userId) => {
  //   const { name, status } = body;
  //   const order = new Order({ name, createdBy: userId, status });
  //   const res = await order.save();
  //   return res;

  return await Order.find({}).populate("createdBy");
};

module.exports = { createOrderService, getOrderService };
