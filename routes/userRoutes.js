const express = require("express");
const router = express.Router();

const { createUser, Login } = require("../controllers/userController");

router.post("/create", createUser);
router.get("/login", Login);

module.exports = router;
