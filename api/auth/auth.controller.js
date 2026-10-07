const { loginService } = require("./auth.service")

async function loginController(req, res) {
    const sessionId = await loginService(req.body);

    res.cookie("session_token", sessionId, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000
    });

    res.redirect("../../post.html");
}

module.exports = {
    loginController
}