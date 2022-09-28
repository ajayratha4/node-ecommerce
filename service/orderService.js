const response = require("../common/response");
const Order = require("../models/OrderSchema");
const { getProductByIdService } = require("./productService");

const createOrderService = async (body, userId) => {
  const { status, productId, quantity } = body;
  const product = JSON.stringify(await getProductByIdService(productId));
  const price = JSON.parse(product);

  const order = new Order({
    productId,
    quantity,
    createdBy: userId,
    status,
    price: price.price.discountPrice,
  });
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

  return response({
    status: 200,
    data: res,
  });
};

module.exports = { createOrderService, getOrderService };
