const mongoose = require("mongoose");
const response = require("../common/response");
const Order = require("../models/OrderSchema");
const { getProductByIdService } = require("./productService");

const createOrderService = async (body, userId) => {
  const { status, productId, quantity } = body;
  const product = await getProductByIdService(productId);

  let order = await Order.findOne({
    productId,
    createdBy: userId,
    status: "cart",
  });

  if (order) {
    order.quantity = order.quantity + quantity;
    order.status = status;
  } else {
    order = new Order({
      productId,
      quantity,
      createdBy: userId,
      status,
      price: product?.price?.discountPrice,
    });
  }

  console.log(order, "================>");
  const res = await order.save();
  return res;
};

const getOrderService = async (query, userId) => {
  let filter = { createdBy: userId };

  Object.keys(query)?.forEach((item) => {
    if (item !== "fields" && query[item]) {
      filter = { ...filter, [item]: query[item] };
    }
  });

  const res = await Order.find(filter)
    .populate({ path: "createdBy", select: "name email" })
    .populate("productId");
  let totalPrice = 0;
  res.forEach((item) => (totalPrice = totalPrice + item.price * item.quantity));

  // const abc=res

  return response({
    status: 200,
    data: { res, totalPrice },
  });
};

const removeOrderService = async (body, userId) => {
  let filter = { createdBy: userId };

  Object.keys(body)?.forEach((item) => {
    if (item !== "fields" && body[item]) {
      filter = { ...filter, [item]: body[item] };
    }
  });

  const res = await Order.findOneAndRemove(filter);

  return response({
    status: 200,
    data: res,
  });
};

module.exports = { createOrderService, getOrderService, removeOrderService };
