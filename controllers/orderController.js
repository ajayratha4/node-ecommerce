const {
  createOrderService,
  getOrderService,
  removeOrderService,
} = require("../service/orderService");

const createOrder = async (req, res) => {
  const data = await createOrderService(req.body, req.userId);
  res.status(200);
  res.send(data);
};

const getOrder = async (req, res) => {
  const data = await getOrderService(req?.query, req.userId);
  res.status(200);
  res.send(data);
};

const removeOrder = async (req, res) => {
  const data = await removeOrderService(req?.body, req.userId);
  res.status(200);
  res.send(data);
};

module.exports = { createOrder, getOrder, removeOrder };
