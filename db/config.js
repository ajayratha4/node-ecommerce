const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB)
  .then((res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("err");
  });

// it will return only name
//   return await Products.find({name:name}, { name: 1, _id: 0 });

//     return all product
//   return await Products.find();
