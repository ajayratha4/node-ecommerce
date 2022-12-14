const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRouter = require("./routes/orderRouter");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

require("./db/config");

app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRouter);

app.use("/", (req, res, next) => {
  res.send("<h1>welcome to app</h1>");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
