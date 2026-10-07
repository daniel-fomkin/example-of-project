const db = require("../configs/db");

async function createPostRepository(message) {
    const dbResponse = await db.query("INSERT INTO posts (message) VALUES ($1)", [message]);
}

async function getPostsRepository(){
    return (await db.query("SELECT * FROM posts")).rows;
}

module.exports = {
    createPostRepository,
    getPostsRepository
}