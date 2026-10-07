const express = require("express");

const asyncHandler = require("../utils/async-handler");
const { loginController } = require("./auth.controller");

const router = express.Router();

router.post("/auth/login", asyncHandler(loginController));

module.exports = router