const express = require("express");
const { signup, login, getCurrentUser } = require("../controller/auth.controller");
const { verifyToken } = require("../middleware/verifyToken");

const route = express.Router();

route.post("/sign-up", signup);
route.post("/login", login);
route.get("/user", verifyToken, getCurrentUser);

module.exports = route;

