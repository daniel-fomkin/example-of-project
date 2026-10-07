const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const authRouter = require("./auth/auth.routes");
const postsRouter = require("./posts/posts.routes");

const errorHandler = require("./middleware/error-handler");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../PAGES")));
app.use(express.static(path.join(__dirname, "../JS")));

//Documentation
app.get("/api", (req, res) => {
    res.send("All works!")
});

//Routers
app.use("/api", authRouter, postsRouter);


//Error Handler
app.use(errorHandler)

module.exports = app;