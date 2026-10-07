const db = require("../configs/db");

async function loginRepository(sessionId) {
    const expiresAt = new Date(Date.now() + (1 * 24 * 60 * 60 * 1000));

    await db.query("INSERT INTO sessions VALUES ($1, $2)", [sessionId, expiresAt]);

}

async function getSession(sessionId) {
    const session = await db.query("SELECT * FROM sessions WHERE id = $1", [sessionId]);

    return session.rows[0];
}

async function deleteSession(sessionId) {
    await db.query("DELETE * FROM sessions WHERE id = $1", [sessionId])
}

module.exports = {
    loginRepository,
    getSession,
    deleteSession
}