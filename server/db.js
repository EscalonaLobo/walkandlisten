const spicedPg = require("spiced-pg");

const db = spicedPg("postgres:postgres:postgres@localhost:5432/socialnetwork");

module.exports.signUp = function (first, last, email, saltedPass) {
    const query = `INSERT INTO users (first, last, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;
    const params = [first, last, email, saltedPass];
    return db.query(query, params);
};

module.exports.getUser = function (email) {
    const query = `SELECT password, id FROM users WHERE email = $1;`;
    const params = [email];
    return db.query(query, params);
};

module.exports.getCode = function (email, code) {
    const query =
        "INSERT INTO code (email, code) VALUES ($1, $2) RETURNING created_at;";
    const params = [email, code];
    return db.query(query, params);
};

module.exports.getCode2 = function (email) {
    const query =
        "SELECT * FROM code WHERE CURRENT_TIMESTAMP - created_at < INTERVAL '10 minutes' AND email = $1;";
    const params = [email];
    return db.query(query, params);
};

module.exports.newPass = function (password, email) {
    const query = "UPDATE users SET password = $1 WHERE email = $2;";
    const params = [password, email];
    return db.query(query, params);
};

module.exports.userInfo = function (id) {
    const query = "SELECT first, last, profilepic, bio FROM users WHERE id=$1;";
    const params = [id];
    return db.query(query, params);
};

module.exports.insertPic = function (img, id) {
    const query =
        "UPDATE users SET profilepic = $1 WHERE id = $2 RETURNING id, profilepic;";
    const params = [img, id];
    return db.query(query, params);
};

module.exports.updateBio = function (bio, id) {
    const query = "UPDATE users SET bio = $1 WHERE id = $2 RETURNING id, bio;";
    const params = [bio, id];
    return db.query(query, params);
};

module.exports.getUserInfo = function (id) {
    const query = "SELECT * FROM users WHERE id = $1;";
    const params = [id];
    return db.query(query, params);
};

module.exports.lastThreeUsers = function () {
    const query = "SELECT * FROM users ORDER BY id DESC LIMIT 3;";
    return db.query(query);
};

module.exports.searchUsers = function (val) {
    const query = "SELECT first FROM users WHERE first ILIKE $1;";
    const params = [val + "%"];
    return db.query(query, params);
};

module.exports.areWeFriends = function (recipientUser, senderUser) {
    const query =
        "SELECT * FROM friendships WHERE (recipient_id = $1 AND sender_id = $2) OR (recipient_id = $2 AND sender_id = $1);";
    const params = [recipientUser, senderUser];
    return db.query(query, params).then(({ rows }) => {
        return rows;
    });
};

module.exports.letsBeFriends = function (recipientUser, senderUser) {
    const query =
        "INSERT INTO friendships (recipient_id, sender_id) VALUES ($1, $2) RETURNING sender_id;";
    const params = [recipientUser, senderUser];
    return db.query(query, params);
};

module.exports.acceptFriendship = function (recipientUser) {
    const query =
        "UPDATE friendships SET accepted = true WHERE recipient_id = $1 RETURNING accepted";
    const params = [recipientUser];
    return db.query(query, params);
};

module.exports.deleteRequest = function (recipientUser, senderUser) {
    const query =
        "DELETE FROM friendships WHERE (recipient_id = $1 AND sender_id = $2) OR (recipient_id = $2 AND sender_id = $1) RETURNING sender_id;";
    const params = [recipientUser, senderUser];
    return db.query(query, params);
};

module.exports.getWannabeFriends = function (id) {
    const query =
        "SELECT users.id, first, last, profilepic, accepted FROM friendships JOIN users ON (accepted = false AND recipient_id = $1 AND sender_id = users.id) OR (accepted = true AND recipient_id = $1 AND sender_id = users.id) OR (accepted = true AND sender_id = $1 AND recipient_id = users.id);";
    const params = [id];
    return db.query(query, params);
};
