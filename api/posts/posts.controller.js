const { getPostsService, createPostService } = require("./posts.service");

async function createPostController(req, res) {
    const body = req.body;

    await createPostService(body);

    res.status(201).send("OK");
}

async function getPostsController(req, res) {
    const posts = await getPostsService();

    res.send(posts);
}

module.exports = {
    createPostController,
    getPostsController
}