const express = require("express");

const { createPostController, getPostsController } = require("./posts.controller");

const asyncHandler = require("../utils/async-handler");
const authHandler = require("../middleware/auth.middleware");


const router = express.Router();

router.post("/posts", asyncHandler(createPostController));

router.use("/posts", authHandler);

router.get("/posts", asyncHandler(getPostsController));

module.exports = router;