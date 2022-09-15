const bcrypt = require("bcrypt");
const { jwtGen } = require("../common/jwt");
const response = require("../common/response");
const User = require("../models/UserSchema");

const createUserService = async (body) => {
  const { email, name, password } = body;

  const user = new User({
    name,
    email,
    password,
  });

  const checkUser = await User.findOne({ email });

  if (checkUser) {
    return response({
      status: 404,
      message: `${checkUser.email} already exists`,
    });
  }
  const res = await user.save();

  const token = jwtGen(JSON.stringify(res._id));
  return response({
    status: 200,
    data: { user: res, token },
  });
};

const loginService = async (body) => {
  const { email, password } = body;

  const getUser = await User.findOne({ email });
  if (getUser) {
    const match = await bcrypt.compare(password, getUser.password);

    const token = jwtGen(JSON.stringify(getUser._id));

    if (match) {
      return response({
        data: { user: getUser, token },
      });
    } else {
      return response({
        status: 401,
        message: "use not found",
      });
    }
  } else {
    return response({
      status: 401,
      message: "use not found",
    });
  }
};
module.exports = { createUserService, loginService };
