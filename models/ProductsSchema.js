const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  name: { type: String, require: true },
  price: {
    actualPrice: { type: Number, require: true },
    discountPrice: { type: Number, require: true },
  },
  image: [{ type: String, require: true }],
  description: { type: String, require: true },
  quantity: { type: Number, require: true },
  review: { type: Number, require: true },
  category: { type: String, require: true },
  tag: [{ type: String, require: true }],
});

const Products = mongoose.model("products", ProductsSchema);

module.exports = Products;
