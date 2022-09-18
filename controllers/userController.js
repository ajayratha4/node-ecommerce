const { consoleLog } = require("../common/log");
const { createUserService, loginService } = require("../service/userService");

const createUser = async (req, res) => {
  const data = await createUserService(req.body);
  res.status(data?.status || 200);
  res.send(data);
};

const Login = async (req, res) => {
  consoleLog(
    `${req.url} =================> ${JSON.stringify(req?.query, null, 4)}`
  );
  const data = await loginService(req.query);
  res.status(data?.status || 200);
  res.send(data);
};
module.exports = { createUser, Login };
