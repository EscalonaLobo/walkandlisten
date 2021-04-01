const spicedPg = require("spiced-pg");

const db = spicedPg("postgres:postgres:postgres@localhost:5432/socialnetwork");

module.exports.signUp = function (first, last, email, saltedPass) {
    const query = `INSERT INTO users (first, last, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;
    const params = [first, last, email, saltedPass];
    return db.query(query, params);
};
