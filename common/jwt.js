const jwt = require("jsonwebtoken");
const { consoleLog } = require("./log");
const response = require("./response");

const jwtGen = (data) => {
  return jwt.sign(data, process.env.JWS_SECRET_KEY);
};

const jwtVerify = async (req, res, next) => {
  if (req.method === "GET") {
    consoleLog(
      `${req.url} =================> ${JSON.stringify(req?.query, null, 4)}`
    );
  } else {
    consoleLog(
      `${req.url} =================> ${JSON.stringify(req?.body, null, 4)}`
    );
  }

  const token = req.headers["authorization"]?.split(" ")[1];

  jwt.verify(token, process.env.JWS_SECRET_KEY, function (err, decoded) {
    if (err) {
      res.status(401);
      res.send(response({ message: err.message, status: 401 }));
    } else {
      req.userId = JSON.parse(decoded);
      next();
    }
  });
};

module.exports = { jwtGen, jwtVerify };
