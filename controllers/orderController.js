const {
  createOrderService,
  getOrderService,
} = require("../service/orderService");

const createOrder = async (req, res) => {
  const data = await createOrderService(req.body, req.userId);
  res.status(200);
  res.send(data);
};

const getOrder = async (req, res) => {
  const data = await getOrderService(req?.query);
  res.status(200);
  res.send(data);
};
module.exports = { createOrder, getOrder };
