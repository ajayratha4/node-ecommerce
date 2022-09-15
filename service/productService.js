const response = require("../common/response");
const Products = require("../models/ProductsSchema");

const getAllProductsService = async (query) => {
  let filter = {};
  const showFields = {};

  Object.keys(query)?.forEach((item) => {
    if (item !== "fields" && query[item]) {
      filter = { ...filter, [item]: query[item] };
    }

    // switch (item) {
    //   case "name":
    //     filter = { ...filter, [item]: query[item] };
    //     break;
    //   case "price":
    //     break;
    //   case "quantity":
    //     filter = { ...filter, [item]: query[item] };
    //     break;
    //   case "review":
    //     filter = { ...filter, [item]: query[item] };
    //     break;
    //   case "category":
    //     filter = { ...filter, [item]: query[item] };
    //     break;
    //   case "tag":
    //     filter = { ...filter, [item]: query[item] };
    //     break;
    //   default:
    //     break;
    // }
  });

  return await Products.find(filter, showFields);
};

const getProductByIdService = async (id) => {
  if (!id) {
    return response({ status: 400, message: "send all properties" });
  }
  return await Products.findById(id);
};

const createProductService = async (body) => {
  const { name, price, image, description, quantity, review, category, tag } =
    body;
  if (
    !name ||
    !price ||
    !image ||
    !description ||
    !quantity ||
    !review ||
    !category ||
    !tag
  ) {
    return response({ status: 400, message: "send all properties" });
  }
  const products = new Products({
    name,
    price,
    image,
    description,
    quantity,
    review,
    category,
    tag,
  });
  const res = await products.save();
  return res;
};

module.exports = {
  getAllProductsService,
  createProductService,
  getProductByIdService,
};
