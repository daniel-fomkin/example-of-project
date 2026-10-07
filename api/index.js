const express = require("express");
const dotenv = require("dotenv");

const app = require("./app.js");

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT);
})

