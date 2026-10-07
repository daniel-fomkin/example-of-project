const { notEmpty } = require("../utils/validators");
const { createPostRepository, getPostsRepository } = require("./posts.repository");

async function createPostService(body) {
    notEmpty(body.message, "Message");

    await createPostRepository(body.message);
}

async function getPostsService() {
    const dbResponse = await getPostsRepository();
    return dbResponse;
}

module.exports = {
    createPostService,
    getPostsService
}