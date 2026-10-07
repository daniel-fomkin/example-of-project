const crypto = require('crypto');

const { notEmpty } = require("../utils/validators");
const { loginRepository } = require('./auth.repository');

async function loginService(reqBody){
    notEmpty(reqBody.username, "Username");
    notEmpty(reqBody.password, "Password");

    const { username, password } = reqBody

    const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if(!(username == ADMIN_USERNAME && password == ADMIN_PASSWORD)){
        const err = new Error("Invalid login credentials");
        err.status = 401;
        throw err;
    }

    const sessionId = crypto.randomBytes(32).toString("hex");

    loginRepository(sessionId)

    return sessionId;
}

module.exports = {
    loginService
}