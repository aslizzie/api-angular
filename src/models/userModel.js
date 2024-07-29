const db = require('../config/db');
const bcrypt = require('bcryptjs');

const createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO Users (username, password) VALUES (?, ?)`;
    const [result] = await db.query(query, [username, hashedPassword]);
    return result.insertId;
};

const findUserByEmail = async (email) => {
    const query = `SELECT * FROM Users WHERE email = ?`;
    const [rows] = await db.query(query, [email]);
    return rows[0];
};

module.exports = {
    createUser,
    findUserByEmail
};


