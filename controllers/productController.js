const {
  getAllProductsService,
  createProductService,
  getProductByIdService,
} = require("../service/productService");

const allProducts = async (req, res) => {
  console.log(req.query);
  const data = await getAllProductsService(req.query);
  res.send(data);
};

const getProductById = async (req, res) => {
  console.log(req.query);

  const data = await getProductByIdService(req.query?.id);
  res.status(data.status || 200);
  res.send(data);
};
const createProduct = async (req, res) => {
  const data = await createProductService(req.body);
  res.status(data.status || 200);
  res.send(data);
};

module.exports = { allProducts, createProduct, getProductById };
